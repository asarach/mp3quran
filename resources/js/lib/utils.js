export function notify(title, type, text) {
    var div = $("<div class='notification-wrapper'><div class='notification " + type + "'><div class='notification-title'>" + title + "</div><div class='notification-content'>" + text + "</div></div></div>");
    $(".notifications").append(div);
    setTimeout(() => {
        div.remove();
    }, 3000);
}
export function trans(string, args = {}) {
    const stringArray = string.split(".");
    var value = window.trans;
    for (let index = 0; index < stringArray.length; index++) {
        value = value[stringArray[index]];
    }
    for (var arg in args) {
        if (!args.hasOwnProperty(arg)) continue;
        value = value.replace(arg, args[arg]);
    }
    return value;
}
export function stateChange(state) {
    $('.hiden-ply-btn').hide();
    $('.shown-ply-btn').show();
    switch (state.playing_state) {
        case "loading":
            $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-loading').show();
            $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-pause').hide();
            $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-play').hide();

            $("#playerLoading").show();
            $("#playerPauseBtn").hide();
            $("#playerPlayBtn").hide();

            $("#fullPlayerLoading").show();
            $("#fullPlayerPauseBtn").hide();
            $("#fullPlayerPlayBtn").hide();


            $('#playerListItem-' + state.index + ' .btn-loading').show();
            $('#playerListItem-' + state.index + ' .btn-pause').hide();
            $('#playerListItem-' + state.index + ' .btn-play').hide();

            $('#fullPlayerListItem-' + state.index + ' .btn-loading').show();
            $('#fullPlayerListItem-' + state.index + ' .btn-pause').hide();
            $('#fullPlayerListItem-' + state.index + ' .btn-play').hide();
            break;
        case "playing":
            $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-loading').hide();
            $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-pause').show();
            $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-play').hide();

            $("#playerLoading").hide();
            $("#playerPauseBtn").show();
            $("#playerPlayBtn").hide();

            $("#fullPlayerLoading").hide();
            $("#fullPlayerPauseBtn").show();
            $("#fullPlayerPlayBtn").hide();


            $('#playerListItem-' + state.index + ' .btn-loading').hide();
            $('#playerListItem-' + state.index + ' .btn-pause').show();
            $('#playerListItem-' + state.index + ' .btn-play').hide();

            $('#fullPlayerListItem-' + state.index + ' .btn-loading').hide();
            $('#fullPlayerListItem-' + state.index + ' .btn-pause').show();
            $('#fullPlayerListItem-' + state.index + ' .btn-play').hide();

            break;
        default:
            $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-loading').hide();
            $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-pause').hide();
            $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-play').show();

            $("#playerLoading").hide();
            $("#playerPauseBtn").hide();
            $("#playerPlayBtn").show();

            $("#fullPlayerLoading").hide();
            $("#fullPlayerPauseBtn").hide();
            $("#fullPlayerPlayBtn").show();


            $('#playerListItem-' + state.index + ' .btn-loading').hide();
            $('#playerListItem-' + state.index + ' .btn-pause').hide();
            $('#playerListItem-' + state.index + ' .btn-play').show();

            $('#fullPlayerListItem-' + state.index + ' .btn-loading').hide();
            $('#fullPlayerListItem-' + state.index + ' .btn-pause').hide();
            $('#fullPlayerListItem-' + state.index + ' .btn-play').show();

            break;
    }
}
export function getItemAndPlay(url, item, type, time = null) {
    if (window.player.state.playing_item != item) {
        stateChange({ playing_type: type, playing_item: item, playing_state: "loading" })
        $.ajax({
            type: 'GET',
            url: url,
            success: function (response) {
                window.player.addAndPlayItem(response);
                if (time) {
                    window.player.sound.on('play', function () {
                      window.player.sound.seek(time);
                    });
                }
            },
            error: function (response) {
            },
        });

    } else {
        window.player.play();
    }
}
export function addItem(url) {
    $.ajax({
        type: 'GET',
        url: url,
        success: function (response) {
            window.player.addItem(response);
            notify(trans("text.added"), 'success', trans("text.item-added-playlist"));
        },
        error: function (response) {
            notify(trans("text.not-added"), 'warn', trans("text.item-not-added-playlist"));
        },
    });
}
export function bookmarkTsora(url) {
    $.ajax({
        type: 'GET',
        url: url,
        success: function (response) {
            notify(trans("text.added"), 'success', trans("text.bookmark-created"));
        },
        error: function (response) {
            notify(trans("text.not-added"), 'warn', trans("text.bookmark-not-created"));
        },
    });
}