const bgVideo = document.getElementById('bgVideo')
        bgVideo.addEventListener('ended', function () { //监听视频播放完毕
            window.location.href = '主页面.html'
        })