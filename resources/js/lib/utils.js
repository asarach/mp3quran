export function notify(title, type, text) {
    var div = $("<div class='notification-wrapper'><div class='notification " + type + "'><div class='notification-title'>" + title + "</div><div class='notification-content'>" + text + "</div></div></div>");
    $(".notifications").append(div);
    setTimeout(() => {
        div.remove();
    }, 3000);
}
export function trans(string, args = {}) {
    const stringArray = string.split(".");
    console.log(stringArray);
    var value = window.trans;
    console.log(value);
    for (let index = 0; index < stringArray.length; index++) {
        value = value[stringArray[index]];
    }
    for (var arg in args) {
        if (!args.hasOwnProperty(arg)) continue;
        value = value.replace(arg, args[arg]);
    }
    return value;
}

export function getItemAndPlay(url, item, type, time = null) {
    if (window.player.state.playing_item != item && url) {
        window.player.stateChange({ playing_type: type, playing_item: item, playing_state: "loading" })
        $.ajax({
            type: 'GET',
            url: url,
            success: function (response) {
                window.player.addAndPlayItem(response);
                if (time) {
                    window.player.sound.once('play', function () {
                        window.player.sound.seek(time / 1000);
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
            notify(trans("text.done"), 'success', trans("text.bookmark-created"));
        },
        error: function (response) {
            notify(trans("text.error"), 'warn', trans("text.bookmark-not-created"));
        },
    });
}