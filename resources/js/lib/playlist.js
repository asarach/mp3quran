import { notify, trans } from './utils';

export function savePlaylist() {
    $("#playlistName").removeClass("error");
    let savePlaylist = [];
    for (let index = 0; index < window.player.playlist.length; index++) {
        const item = window.player.playlist[index];
        var saveItem = {};
        switch (item.type) {
            case 'tadabor':
                saveItem = {
                    'type': item.type,
                    'tadabor_id': item.id.replace('tb', ''),
                };
                break;
            case 'radio':
                saveItem = {
                    'type': item.type,
                    'radio_id': item.id.replace('100002-', ''),
                };
                break;
            default:
                saveItem = {
                    'type': item.type,
                    'sora_id': item.sora_id,
                    'read_id': item.read_id,
                };
                break;
        }

        savePlaylist.push(saveItem);
    }

    const data = {
        name: $("#playlistName").val(),
        id: $("#playlistId").val(),
        playlist: JSON.stringify(savePlaylist)
    }
    const url = window.App.urlBase + '/' + window.App.current_language + '/ajax/playlist';

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

export function loadPalylist(id, name) {
    $.ajax({
        type: 'GET',
        url: window.App.urlBase + '/' + window.App.current_language + '/ajax/playlist/' + id,
        success: function (response) {
            window.player.loadPalylist(response, id, name);
            notify(trans("text.done"), 'success', trans("text.playlist-loaded-text"));
        },
        error: function (data) {
            notify(trans("text.error"), 'warn', trans("text.playlist-not-loaded-text"));
        },
    });
}
export function deletePalylist(id) {
    $.ajax({
        type: 'DELETE',
        url: window.App.urlBase + '/' + window.App.current_language + '/ajax/playlist/' + id,
        success: function (response) {
            Turbolinks.visit(window.location.toString(), { action: 'replace' })
            notify(trans("text.done"), 'success', trans("text.playlist-deleted-text"));
        },
        error: function (data) {
            notify(trans("text.error"), 'warn', trans("text.playlist-not-deleted-text"));
        },
    });
}