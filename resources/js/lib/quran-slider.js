export default class quranSlider {
    constructor(slider, control) {
        let self = this;
        this.control = control;
        this.slider = slider;
        this.set_perc = 0;
        // $(this.slider).on("mouseover", function (event) {
        //     self.showTooltip(event);
        // });
        // $(this.slider).on("mouseout", function (event) {
        //     self.hideTooltip(event);
        // });
        $(this.slider).on("mousedown", function (event) {
            if (player.sound.duration()!= Infinity || control == 'volume') {
                self.startSlide(event);
            }
        });
        $(document).on("mousemove", function (event) {
            var mousedown = (event.buttons === 1);
            if (mousedown && $(self.slider).hasClass("qs-active")) {
                self.changeSlide(event);
            }
            event.stopPropagation();
        });
        $(document).on("mouseup", function (event) {
            if ($(self.slider).hasClass("qs-active")) {
                self.stopSlide(event);
            }
            event.stopPropagation();
        });
    }

    showTooltip(event) {
        $(this.slider).find(".player-progress-tooltip").show();
        const set_perc = this.calcPerc(event);
        $(this.slider).find(".player-progress-tooltip").css('left', 'calc(' + (set_perc * 100) + '% - 6px)');
    }
    hideTooltip(event) {
        $(this.slider).find(".player-progress-tooltip").hide();
    }
    startSlide(event) {
        $(this.slider).addClass("qs-active");
        this.changeSlide(event);
    }
    changeSlide(event) {
        this.set_perc = this.calcPerc(event);
        if (this.control == 'volume') {
            $(this.slider).find(".qs-progress").css('height', (this.set_perc * 100) + 'px');
            $(this.slider).find(".qs-point").css('bottom','calc(' + (this.set_perc * 100) + 'px - 6px)');
        } else {
            $(this.slider).find(".qs-progress").css('width', (this.set_perc * 100) + '%');
            $(this.slider).find(".qs-point").css('left', 'calc(' + (this.set_perc * 100) + '% - 6px)');
            $(this.slider).find(".qs-point").attr('data-down', 'true');
            $("#playerTimer").html(player.formatTime(Math.round(this.set_perc * player.sound.duration())));

            $('.player-progress-line').css('width', (this.set_perc * 100) + '%');
        }
    }
    stopSlide(event) {
        $(this.slider).removeClass("qs-active");
        if (this.control == 'progress') {
            player.seek(this.set_perc);
        }
        if (this.control == 'volume') {
            player.volume(this.set_perc);
        }
        this.set_perc = 0;
    }
    calcPerc(event) {
        var set_perc = 0;
        if (this.control == 'volume') {
            const bottom = $(this.slider)[0].getBoundingClientRect().bottom;
            set_perc = ((((- event.clientY + bottom) / $(this.slider).outerHeight())).toFixed(6));
        } else {
            let playerProgress = $(this.slider).find(".qs-progress");
            set_perc = ((((event.clientX - $(playerProgress).offset().left) / $(this.slider).outerWidth())).toFixed(6));
        }
        set_perc = Math.max(set_perc, 0);
        return Math.min(set_perc, 1);
    }
}