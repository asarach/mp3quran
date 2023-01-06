import ReportSora from './lib/report-sora';
import QuickAccess from './lib/quick-access';
import FlipBook from './lib/flipbook';
import Share from './lib/share';
import Clipboard from './lib/clipboard';
import FileUploader from './lib/file-uploader';
import ImageUploader from './lib/image-uploader';
import VidPlayer from './lib/vid-player';
import VideoLogo from './lib/logo-video';
import { getItemAndPlay, addItem, bookmarkTsora } from './lib/utils';
import { loadPalylist, deletePalylist } from './lib/playlist';
import screenfull from './lib/screenfull';

export function initiateLib() {
    document.getElementById("MainLoading").style.display = "none";

    retateHeaderAds();

    $('.tafsir-sora-btn').off('click').click(function () {
        const current_sora = $(this).data("sora");
        $('.tafsir-sora-collapse').not($('#tafsirsSora-' + current_sora)).removeClass('show');
        $('.tafsir-sora-btn').not($(this)).removeClass('show');
        $('#tafsirsSora-' + current_sora).toggleClass('show')
        $(this).toggleClass('show')
    });

    $(".card-playlist .load-btn").off('click').on("click", function (e) {
        loadPalylist($(this).data("id"), $(this).data("name"));
    });
    $(".card-playlist .delete-btn").off('click').on("click", function (e) {
        deletePalylist($(this).data("id"));
    });

    //languagesToggl
    $('.tbl-btn').off('click').click(function (e) {
        e.preventDefault();
        $('.tb-languages .tbl-dropdown').toggleClass('opened');
        $('#footer .expend-menu').removeClass('expended');
    });

    $('.tbl-dropdown .close-lan').off('click').click(function (e) {
        e.preventDefault();
        $('.tb-languages .tbl-dropdown').removeClass('opened');
    });

    $('#toggelExpended').off('click').click(function (e) {
        e.preventDefault();
        $('#footer .expend-menu').toggleClass('expended');
        $('.tb-languages .tbl-dropdown').removeClass('opened');
    });


    $(".quick-access a").off('click').on("click", function (e) {
        e.preventDefault();
        window.quickAccess = new QuickAccess();
        quickAccess.showModal();
    });

    $(".report-btn").off('click').on("click", function (e) {
        e.preventDefault();
        const params = {
            read: $(this).data("read"),
            sora: $(this).data("sora"),
            prefix: $(this).data("prefix"),
        }
        window.reportSora = new ReportSora(params);
        reportSora.showModal();
    });
    $("#submitReport").off('click').on("click", function (e) {
        e.preventDefault();
        reportSora.submitReport();
    });
    $(".ply-btn.btn-pause").off('click').on("click", function (e) {
        player.pause();
    });
    $(".ply-btn.btn-play").off('click').on("click", function (e) {

        const url = $(this).data("url");
        const item = $(this).data("item");
        const type = $(this).data("type");
        const time = $(this).data("time");

        getItemAndPlay(url, item, type, time);
    });
    $(".share-btn").off('click').on("click", function (e) {
        const params = {
            url: $(this).data("url"),
            description: $(this).data("description"),
            title: $(this).data("title"),
        }
        window.share = new Share(params);
        share.showModal();
    });

    $(".share-on").off('click').on("click", function (e) {
        const network = $(this).data("network");
        share.shareOn(network);
    });

    $(".direct-share").off('click').on("click", function (e) {
        const network = $(this).data("network");
        const params = {
            url: $(this).closest('.show-share').data("url"),
            description: $(this).parents('.show-share').data("description"),
            title: $(this).parent().data("title"),
        }
        window.share = new Share(params);
        share.shareOn(network);
    });

    $(".clipboard-btn").off('click').on("click", function (e) {
        const text = $(this).data("text")
        window.clipboard = new Clipboard(text);
        clipboard.copy();
    });

    $(".sora-btn.playlist-add").off('click').on("click", function (e) {
        const url = $(this).data("url");
        addItem(url);
    });
    $('.like-btn').off('click').on("click", function (e) {
        const sora_id = $(this).data("id")
        const group = $(this).data("group")
        favorites.addItem(sora_id, group);
    });
    $('.deslike-btn').off('click').on("click", function (e) {
        const sora_id = $(this).data("id")
        const group = $(this).data("group")
        favorites.removeItem(sora_id, group);
    });
    $('.more-btn').off('click').on("click", function (e) {
        $('.more-btn').not(this).next('.item-options').removeClass('show');
        $(this).next('.item-options').toggleClass('show');
    });

    $(".btn-bookmark-tafsir").off('click').on("click", function (e) {
        if ($(this).hasClass('show')) {
            try {
                let time = window.player.current_item.howl.seek();
                let url = window.ajax_prefix + '/tsora/bookmark?id=' + window.player.current_item.read_id + '&time=' + Math.round(time);
                bookmarkTsora(url);
            } catch (error) {
                notify(trans("text.not-added"), 'warn', trans("text.bookmark-not-created"));
            }
        }
    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // ********* card logo video ********* //
    $(".card-logo-video").each(function (index) {
        window.videoLogo = new VideoLogo(this);
    });

    // ********* file uploader ********* //
    $(".file-uploader").each(function (index) {
        new FileUploader(this);
    });
    // ********* file uploader ********* //
    $(".image-uploader").each(function (index) {
        window.imageUploader = new ImageUploader(this);
    });

    // ********* video player ********* //
    $(".dplayer").each(function (index) {
        new VidPlayer(this);
    });



    // ********* fullscreen ********* //
    const fullscreenElement = document.getElementById('fullscreen');
    if (fullscreenElement) {
        document.getElementById('fullscreenToggle').addEventListener('click', () => {
            if (screenfull.isEnabled) {
                screenfull.toggle(fullscreenElement);
            }
        });

    }



    // ********* alkahf flipbook ********* //
    var alkahfFlipbook = document.querySelector('div.alkahf-flipbook');
    if (alkahfFlipbook) {
        window.flipbook = new FlipBook(alkahfFlipbook);
        flipbook.setAlkahfReads();

        var flipbookObserver = new MutationObserver(function (event) {
            flipbook.watchPage(alkahfFlipbook.dataset.page);
        })
        flipbookObserver.observe(alkahfFlipbook, {
            attributes: true,
            attributeFilter: ['data-page'],
            childList: false,
            characterData: false
        })
    }
    // ********* mushafs flipbook ********* //
    var mushafsFlipbook = document.querySelector('div.mushafs-flipbook');
    if (mushafsFlipbook) {
        window.flipbook = new FlipBook(mushafsFlipbook);
        flipbook.setSoar();
        flipbook.setParts();
    }

    $('img').each(function () {
        if (!$(this).attr('title') && $(this).attr('alt')) {
            $(this).attr('title', $(this).attr('alt'));
        }
    })
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
            $(".header").addClass("sticky-header fadeInDown");
            $(".header .top-buttons .btn").addClass("jackInTheBox delay-1s faster");
        } else {
            $(".header").removeClass("sticky-header fadeInDown");
            $(".header .top-buttons .btn").removeClass("jackInTheBox");

        }
    });

    $(document).on('keyup', function (e) {
        if (e.keyCode == 27) {
            $('.popupOverlay').remove();
        }
    });

    // CLOSE AND REMOVE ON CLICK
    $('body').on('click', '.popupOverlay .close', function () {
        $('.popupOverlay').remove();
        var adId = $(this).attr("data-id");
        $.get(window.current_language + "/ajax/mpa_closed/" + adId, function () { });
    });

}


function retateHeaderAds() {
    var count = $(" .main .show-header .header-ads .ha-item").length;

    var currentItem = 1;
    if (count > 1) {
        var nextItem = 2;
    } else {
        var nextItem = 1;
    }

    $(" .main .show-header .header-ads .ha-item:nth-child(" + currentItem + ")").addClass('show');
    toggleHeaderAds(currentItem, nextItem, count);
}

function toggleHeaderAds(currentItem, nextItem, count) {
    var soconds = 5;
    window.setTimeout(function () {
        $(" .main .show-header .header-ads .ha-item:nth-child(" + currentItem + ")").removeClass('show');
        $(" .main .show-header .header-ads .ha-item:nth-child(" + nextItem + ")").addClass('show');
        let newCurrentItem = nextItem;
        let newNextItem;
        if (nextItem == count) {
            newNextItem = 1;
        } else {
            newNextItem = nextItem + 1;
        }

        toggleHeaderAds(newCurrentItem, newNextItem, count);
    }, soconds * 1000);
}