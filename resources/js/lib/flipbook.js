import { getItemAndPlay, notify, trans } from './utils';

export default class FlipBook {
    constructor(element) {
        let self = this;
        this.start = parseInt(element.dataset.start);
        this.end = parseInt(element.dataset.end);
        this.page = parseInt(element.dataset.page);
        this.kahf = element.dataset.kahf;
        this.mobile = element.dataset.mobile;
        this.sora = 18;
        this.current_page = 0;
        this.images = [];

        this.setImages();

        $(".mushafs-options .custom-select.read").change(function () {
            const read = $(this).val();
            const url = ajax_prefix + '/soar/item?r=' + read + '&s=' + self.sora;
            const item = self.sora;
            getItemAndPlay(url, item, 'sora');
        });

        $(".mushafs-options .custom-select.sora").change(function () {
            self.sora = $(this).val();
            self.page = $(this).children('option:selected').data('page');
            self.setReads();
        });

        $(".mushafs-options .custom-select.part").change(function () {
            self.page = parseInt($(this).val());
            self.changePage($(this).val());
        });

        Array.prototype.forEach.call(document.getElementsByClassName("next-btn"), function (nextBtn) {
            nextBtn.onclick = function () {
                self.nextPage();
            };
        });

        Array.prototype.forEach.call(document.getElementsByClassName("previous-btn"), function (nextBtn) {
            nextBtn.onclick = function () {
                self.previousPage();
            };
        });
    }

    setAlkahfReads() {
        $.ajax({
            type: 'GET',
            url: ajax_prefix + "/alkahf-surah",
            success: function (response) {
                for (let i = 0; i < response.read_soar.length; i++) {
                    const read = response.read_soar[i];
                    const html = '<option value="' + read.read + '">' + read.reciter_name + '</option>'
                    $(".mushafs-options .custom-select.read").append(html);
                }
                $(".mushafs-options .share-btn").data('title', response.page_share.title);
                $(".mushafs-options .share-btn").data('description', response.page_share.description);
                $(".mushafs-options .share-btn").data('url', response.page_share.url);
            },
            error: function (data) { },
        });
    }

    setReads() {
        var self = this;
        $.ajax({
            type: 'GET',
            url: ajax_prefix + "/reads/list?s=" + this.sora,
            success: function (response) {
                for (let i = 0; i < response.reads.length; i++) {
                    const read = response.reads[i];
                    const html = '<option value="' + read.id + '">' + read.reciter_name + ' - <span>' + read.rewaya_name + '</span></option>'
                    $(".mushafs-options .custom-select.read").append(html);
                }
                self.changePage(self.page);
            },
            error: function (data) { },
        });
    }

    setParts() {
        $.ajax({
            type: 'GET',
            url: ajax_prefix + "/mushaf",
            success: function (response) {
                for (var key in response.parts) {
                    if (response.parts.hasOwnProperty(key)) {
                        const part = response.parts[key];
                        const html = '<option value="' + part.start_page + '">' + part.name + '</option>';
                        $(".mushafs-options .custom-select.part").append(html);
                    }
                }
            },
            error: function (data) { },
        });
    }

    setSoar() {
        $.ajax({
            type: 'GET',
            url: ajax_prefix + "/soar/list",
            success: function (response) {
                for (let i = 0; i < response.soar.length; i++) {
                    const sora = response.soar[i];
                    const html = '<option data-page="' + sora.start_page + '" value="' + sora.id + '">' + sora.name + '</option>'
                    $(".mushafs-options .custom-select.sora").append(html);
                }
            },
            error: function (data) { },
        });
    }

    nextPage() {
        if (this.mobile !== 'true') {
            this.changePage(this.current_page + 2);
        } else {
            this.changePage(this.current_page + 1);
        }

    }

    previousPage() {
        if (this.mobile !== 'true') {
            this.changePage(this.current_page - 2);
        } else {
            this.changePage(this.current_page - 1);
        }

    }

    changePage(page) {
        let self = this;
        let add = 0;
        if (this.kahf !== 'true') {
            if (this.mobile !== 'true') {
                add = 2;
            } else {
                add = 1;
            }
           
        }
        if (page <= this.end && page >= this.start - add) {
            if (page % 2 === 0 && this.mobile !== 'true') {
                self.current_page = page - 1;
            } else {
                self.current_page = page;
            }
        }
        if (page <= this.end && page > this.start - add) {
            if (this.images.includes(self.current_page)) {
                this.adjustImages();
            } else {
                this.setImages();
            }
        }
        this.setFlipped();
    }

    setFlipped() {
        var self = this;
        var index = parseInt(self.images[0]) - 1;

        if (self.current_page % 2 !== 0 && this.mobile !== 'true') {
            index--;
        }

        Array.prototype.forEach.call(document.getElementsByClassName("fipable"), function (fliping) {
            if (self.current_page > index) {
                fliping.classList.add("flipped");
            } else {
                fliping.classList.remove("flipped");
            }
            index++;
        });
    }

    setImages() {
        let odd = 0;
        let add = 1;
        if (this.page === 0) {
            odd = 1;
            add = 0;
        }
        if (this.page % 2 !== 0 && this.mobile !== 'true') {
            odd = 1;
            add = 0;
        }
        let first_page = Math.max(1, this.start - add, this.page - 5 - odd);
        let last_page = Math.min(this.end + add, this.page + 29 - odd);
        this.images = [];
        for (let i = first_page; i < last_page; i++) {
            this.images.push(i);
        }
        this.current_page = this.page;
        this.insertImages();
    }

    adjustImages() {
        let last_item = this.images[this.images.length - 1];
        let first_item = this.images[0];
        let itemsCount = 2;
        if (this.mobile === 'true') {
            itemsCount--;
        }
        if (this.current_page > first_item + 4 && last_item < this.end) {
            for (let index = 0; index < itemsCount; index++) {
                // remove pages 
                document.getElementById('pages').removeChild(document.getElementById('pages').firstChild);
                this.images.shift();

                // add pages 
                this.images.push(last_item + index + 1);
                this.insertImage(this.images.indexOf(last_item + index + 1));
            }
        }

        if (this.current_page < first_item + 4 && first_item > 1) {
            for (let index = 0; index < itemsCount; index++) {
                // remove pages 
                document.getElementById('pages').removeChild(document.getElementById('pages').lastChild);
                this.images.pop();

                // add pages 
                this.images.unshift(first_item - index - 1);
                this.insertImage(this.images.indexOf(first_item - index - 1), true);
            }
        }
    }

    insertImages() {
        document.getElementById("pages").innerHTML = "";
        for (let index = 0; index < this.images.length; index++) {
            this.insertImage(index);
        }
        this.setFlipped();
    }

    insertImage(index, prepand = false) {
        var self = this;
        const item = self.images[index];
        var page = document.createElement("div");
        page.className = 'page fipable';
        let zindex = 1000 - item + 1;
        if (item % 2 || this.mobile === 'true') {
            page.style = "z-index: " + zindex + ";";
        }
        if (this.mobile !== 'true') {
            page.onclick = function () {
                if (item % 2) {
                    self.nextPage();
                } else {
                    self.previousPage();
                }
            };
        }


        var image = document.createElement("img");
        image.src = "https://cdn.qurango.net/Sura2/files/mobile/" + item + ".jpg";

        page.appendChild(image);

        if (prepand) {
            document.getElementById("pages").prepend(page);
        } else {
            document.getElementById("pages").appendChild(page);
        }
    }
}

