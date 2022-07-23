import { getItemAndPlay, notify, trans } from './utils';

export default class QuickAccess {
    constructor() {
        let self = this;
        self.setReads();
        $("#quickAccessId .custom-select.read").change(function () {
            self.getSoar($(this).val());
        });
        $("#quickAccessId button").on("click", function (e) {
            e.preventDefault();
            const read = $("#quickAccessId .custom-select.read").val();
            const sora = $("#quickAccessId .custom-select.sora").val();
            const url = ajax_prefix + '/soar/item?r=' + read + '&s=' + sora;
            const item = sora;
            getItemAndPlay(url, item, 'sora');
            $("#quickAccessId").modal("hide");

        });
    }
    showModal() {
        $("#quickAccessId").modal("show");
    }
    setReads() {
        $.ajax({
            type: 'GET',
            url: ajax_prefix + "/reads/list",
            success: function (response) {
                for (let i = 0; i < response.reads.length; i++) {
                    const read = response.reads[i];
                    const html = '<option value="' + read.id + '">' + read.reciter_name + ' - <span>' + read.rewaya_name + '</span></option>'
                    $("#quickAccessId .custom-select.read").append(html);
                }
            },
            error: function (data) { },
        });
    }
    getSoar(read) {
        $.ajax({
            type: 'GET',
            url: ajax_prefix + "/soar/list?r=" + read,
            success: function (response) {
                var html = '<option value class="d-none" disabled selected>' + trans("text.sora") + '</option>'
                for (let i = 0; i < response.soar.length; i++) {
                    const sora = response.soar[i];
                    html += '<option value="' + sora.id + '">' + sora.name + '</option>'
                }
                $("#quickAccessId .custom-select.sora").html(html);
            },
            error: function (data) { },
        });
    }
    submitReport() {
        const data = {
            note: $("#reportNote").val(),
        }
        if (data.note.length < 10) {
            $("#report_model .text-danger").show();
        } else {
            const url = this.prefix + "/" + this.read + "/" + this.sora + "/report";
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: function (response) {
                    $("#report_model").modal("hide");
                    if (response.success) {
                        $("#reportNote").val('')
                        notify(trans("text.reported"), 'success', trans("text.sora-reported-success"));
                    } else {
                        notify(trans("text.not-reported"), 'warn', trans("text.sora-reported-warn"));
                    }
                },
                error: function (data) {
                    notify(trans("text.not-reported"), 'warn', trans("text.sora-reported-warn"));
                },
            });
        }
    }
}

