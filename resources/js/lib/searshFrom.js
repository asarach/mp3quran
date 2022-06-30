
window.addEventListener('click', function (e) {
    if (document.getElementsByClassName('sora-item').contains(e.target)) {
        // Clicked in box
    } else {
        document.getElementsByClassName('sora-item').removeClass show 
        // Clicked outside the box
    }
});

export default class Favorites {
    constructor() {
        this.init();
    }

    init() {
        this.videos = [];
        this.radios = [];
        this.reads = [];
        this.soar = [];
        this.getFavorites();
    }

    getSearch() {
        $('.btn-search').on('click', {

        })
        let self = this;
        let query = 'text';

        $.get(window.App.urlBase + '/' + window.App.current_language + '/search?s=' + query, function (response, status) {


        });
    }


}
