const musicContainer = document.getElementById('music-container')
		const playIcon = document.getElementById('play-icon')
		const music = document.getElementById('music')
		 
		musicContainer.addEventListener('click', function() {
		    if (music.paused) {    // music.paused:音乐暂停状态     
				music.play()  // 调用音乐对象的 play() 方法，开始播放音乐
		        playIcon.classList.remove('fa-play') // 移除 'fa-play' 类，这个类通常对应播放图标
		        playIcon.classList.add('fa-pause')  // 向 playIcon 元素的类列表中添加 'fa-pause' 类，这个类通常对应暂停图标
		        musicContainer.classList.add('spin')   // 添加 'spin' 类，这个类对应一个旋转动画
		        musicContainer.classList.remove('pause-spin') // 移除 'pause-spin' 类，这个类用于停止旋转动画
		    } else {
		        music.pause();    // 调用音乐对象的 pause() 方法，暂停音乐播放
		        playIcon.classList.remove('fa-pause')   // 移除 'fa-pause' 类
		        playIcon.classList.add('fa-play')   // 添加 'fa-play' 类
		        musicContainer.classList.add('pause-spin')   // 添加 'pause-spin' 类，停止旋转动画
		    }
		})
		
		const video = document.getElementById("bgVideo")
		const videoSource = document.getElementById('videoSource')
		const userImage=document.querySelector('.userImage')
		userImage.addEventListener('click',function(){
			 window.open('https://ys.mihoyo.com/main/	', '_blank');
		})
		function setVideoByTime() {
		            const now = new Date()
		            const hour = now.getHours()
		            let videoUrl
		            if (hour >= 6 && hour < 10) {
		                videoUrl = "./images/加载页面背景视频/横版-原神-晨.mp4"
		            } else if (hour >= 10 && hour < 15) {
		                videoUrl = "./images/加载页面背景视频/2中午加长.mp4"
		            } else if(hour >= 15 && hour < 18){
						videoUrl = "./images/加载页面背景视频/3下午加长.mp4"
					} else {
		                videoUrl = "./images/加载页面背景视频/4晚上加长.mp4"
		            }
		            videoSource.src = videoUrl
		            video.load()
		            video.play()
		        }
		
		        window.onload = setVideoByTime
		        setInterval(setVideoByTime, 60 * 1000)
		
		var typed = new Typed("#typed", {
		     strings: ['','“欢迎访问Venette的个人网站”','“怎么没声音？看看右上角吧！”','“触碰头像试试？”','“背景会随着时间变化哦~”','“点击头像试试？”'],
		     typeSpeed: 100,//打字的速度
		     smartBackspace: true, // 开启智能退格 默认false
		     backSpeed: 50,//后退速度
		     backDelay: 500,//后退延迟
		     loop: true,//是否循环.,,
		     startDelay: 1000,//起始时间
		     // fadeOut: true,//淡出效果
		     // fadeOutClass: 'typed-fade-out',//fadeOutClass 用于淡入淡出动画的css类
		     // fadeOutDelay: 500,//以毫秒为单位淡出延迟
		     smartBackspace: true, //智能后间距,
				
		 });