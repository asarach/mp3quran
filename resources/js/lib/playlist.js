import { postPlaylist } from './services';


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

    postPlaylist(url, data);
}