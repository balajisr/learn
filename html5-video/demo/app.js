(function () {
    var video = document.querySelector('video');
    video.addEventListener('canplay', checkCanPlay);
    function checkCanPlay() {
        console.log('video canplay');
        video.play();
    }
    function playVideo() {
    }
})();
