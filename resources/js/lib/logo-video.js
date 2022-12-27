import { notify, trans } from './utils';

export default class VideoLogo {
    constructor(item) {
        var self = this;
        this.item = item;
        this.place = '';
        this.video = item.dataset.url;
        this.video_id = item.dataset.id;
        this.image = '';
        this.progressing = false;
        this.progress = 0;

        document.getElementById('generateVideoBtn').onclick = function () {
            self.generateVideo();
        }


    }
    generateVideo() {
        var self = this;
        if (this.validate()) {
            const data = {
                place: this.place,
                video: this.video,
                image: this.image,
            };

            $.ajax({
                type: 'POST',
                url: window.ajax_prefix + "/video/download/" + this.video.id + "/generate",
                data: data,
                success: function (response) {
                    self.progressing = response.progressing;
                    $("#downloadVideoBtn").attr('href', response.generated_url);
                    if (response.progressing) {
                        self.setProgressing();
                    }
                },
                error: function (data) {
                    self.progressing = false;
                    notify(trans("text.not-reported"), 'warn', trans("text.sora-reported-warn"));
                },
            });
        }
    }

    setProgressing() {
        $("#generateVideoBtn").hide();
        $("#progressVideo").show();
        var self = this;
        var myInterval = setInterval(() => {
            if (self.progress == 100) {
                self.progressing = false;
                $("#progressVideo").hide();
                $("#downloadVideoBtn").show();
                clearInterval(myInterval);
            } else {
                $.ajax({
                    type: 'GET',
                    url: window.ajax_prefix + "/video/download/" + self.video_id + "/progress",
                    success: function (response) {
                        self.progress = response.progress;
                        console.log(self.progress);
                        $("#progressVideo .progress-bar").html(self.progress);
                        $("#progressVideo .progress-bar").attr('ariaValuenow', self.progress);
                        $("#progressVideo .progress-bar").attr('style','width: '+  self.progress + '%;');
                    },
                    error: function (data) { },
                });
            }
        }, 1000);
    }

    validate() {
        let valid = true;
        $("#imageError").hide();
        $("#placeError").hide();
        try {
            this.place = document.querySelector('input[name="place"]:checked').value;
        } catch (error) {
            $("#placeError").show();
            valid = false;
        }

        if (this.place.length != 2) {
            $("#placeError").show();
            valid = false;
        }

        try {
            this.image = window.imageUploader.image_id;
        } catch (error) {
            $("#imageError").show();
            valid = false;
        }

        if (this.image.length == 0) {
            console.log('imageError');
            $("#imageError").show();
            valid = false;
        }
        console.log(this.image.length);

        return valid;
    }

}
