import { VideoStatus } from './video-info';

(function() {
    let video = document.querySelector('video') as HTMLVideoElement;

    let videoInfo: VideoStatus = {
        canPlay: false
    }

    video.addEventListener('canplay', checkCanPlay);

    function checkCanPlay() {
        console.log('video canplay');
    }

    function playVideo() {
        video.play();
    }
})();