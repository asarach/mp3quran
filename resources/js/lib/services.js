import { notify, trans } from './utils';

export function postPlaylist(url, data) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function (response) {
            var loc = window.location.pathname;
            if (loc.includes('playlists')) {
                Turbolinks.visit(window.location.toString(), { action: 'replace' })
            }
        },
        error: function (data) {
            if (data.responseJSON && data.responseJSON.errors && data.responseJSON.errors.name) {
                $("#playlistName").addClass("error");
            }
        },
    });
}

export function postReport(url, data) {
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