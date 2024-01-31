import DPlayer from 'dplayer';

export default class VidPlayer {
  constructor(item) {
    const url = item.dataset.url;

    var live = false;
    if (item.dataset.live) {
       live = true;
    }
    var autoplay = false;
    if (item.dataset.autoplay) {
      autoplay = true;
    }
    
    this.dp = new DPlayer({
      container: item,
      live: live,
      autoplay: autoplay,
      video: {
        url: url,
        pic: 'demo.jpg',
        thumbnails: 'thumbnails.jpg',
      },
    });
  }

}