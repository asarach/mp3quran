import { notify, trans } from './utils';

export default class Favorites {
    constructor() {
        this.videos = [];
        this.radios = [];
        this.reads = [];
        this.soar = [];
        this.getFavorites();
    }

    getFavorites() {
        let self = this;
        $.get(window.App.urlBase + '/' + window.App.current_language + '/ajax/favorites', function (response, status) {

            if (typeof response.videos != "undefined") {
                self.videos = response.videos;
            }
            if (typeof response.radios != "undefined") {
                self.radios = response.radios;
            }
            if (typeof response.reads != "undefined") {
                self.reads = response.reads;
            }
            if (typeof response.soar != "undefined") {
                self.soar = response.soar;
            }
            self.favoritesChanged();
        });
    }

    saveFavorites() {
        let data = {
            "_token": window.App.csrfToken,
            videos: this.videos,
            radios: this.radios,
            reads: this.reads,
            soar: this.soar
        };

        $.post(window.App.urlBase + '/' + window.App.current_language + '/ajax/favorites', data,
            function (response, textStatus, jqXHR) {

            }).fail(function (jqXHR, textStatus, errorThrown) {

            });
    }

    addItem(item, type) {
        item = item.toString();
        switch (type) {
            case 'videos':
                var items = this.videos
                break;
            case 'radios':
                var items = this.radios
                break;
            case 'reads':
                var items = this.reads
                break;
            case 'soar':
                var items = this.soar
                break;
        }

        if (!items.includes(item)) {
            items.push(item);
            this.saveFavorites();
            this.favoritesChanged();

        }
        notify(trans("text.added"), 'success', trans("text.sora-added-favorites"));
    }

    removeItem(item, type) {
        item = item.toString();
        switch (type) {
            case 'videos':
                var items = this.videos
                break;
            case 'radios':
                var items = this.radios
                break;
            case 'reads':
                var items = this.reads
                break;
            case 'soar':
                var items = this.soar
                break;
        }
        if (items.includes(item)) {
            items.splice(items.indexOf(item), 1);
            this.saveFavorites();
            this.favoritesChanged();
        }
        notify(trans("text.removed"), 'warn', trans("text.sora-removed-favorites"));
    }

    
    favoritesChanged() {
        $('.like-btn').each(function (i, obj) {
            const id = $(this).data("id").toString();
            const group = $(this).data("group");
            let inFavorites = false;
            inFavorites = favorites[group].includes(id);
            if (inFavorites) {
                $(this).hide();
                $(this).next('.deslike-btn').show();
            } else {
                $(this).show();
                $(this).next('.deslike-btn').hide();
            }
        });
    }


    favoritesIncludes(item, type) {
        var result = false;
        switch (type) {
            case 'videos':
                result = this.videos.includes(item);
                break;
            case 'radios':
                result = this.radios.includes(item);
                break;
            case 'reads':
                result = this.reads.includes(item);
                break;
            case 'soar':
                result = this.soar.includes(item);
                break;
        }
        return result;
    }

    clearFavorites() {
        this.videos = [];
        this.radios = [];
        this.reads = [];
        this.soar = [];
    }

}
