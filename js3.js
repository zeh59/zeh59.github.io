function toggleLike(btn) {
		     const icon = btn.querySelector('.post-action-icon');
		     const countSpan = btn.querySelector('.like-count');
		     let count = parseInt(countSpan.textContent);
		     if (icon.classList.contains('fa-regular')) {
		         icon.classList.remove('fa-regular');
		         icon.classList.add('fa-solid');
		         btn.classList.add('liked');
		         count++;
		     } else {
		         icon.classList.remove('fa-solid');
		         icon.classList.add('fa-regular');
		         btn.classList.remove('liked');
		         count--;
		     }
		     countSpan.textContent = count;
		 }
		 
		 function toggleCommentBox(btn) {
		     const commentBox = btn.closest('.post-content').querySelector('.comment-box');
		     commentBox.style.display = commentBox.style.display === 'none' ? 'block' : 'none';
		 }
		 
		 function submitComment(btn) {
		     const input = btn.previousElementSibling;
		     const comment = input.value;
		     if (comment) {
		         alert(`你提交的评论是: ${comment}`);
		         input.value = '';
		     }
		 }
		document.addEventListener('DOMContentLoaded', function () {
		    const gameIcons = document.querySelectorAll('.game-icon');
		    const introBoxes = document.querySelectorAll('.intro-box');
		
		    gameIcons.forEach((icon, index) => {
		        icon.addEventListener('click', function () {
		            introBoxes.forEach(box => {
		                box.classList.remove('slide-up');
		                box.classList.add('slide-down');
		            });
		            introBoxes[index].classList.remove('slide-down');
		            introBoxes[index].classList.add('slide-up');
		        });
		    });
		});
		 var typed = new Typed("#typed", {
		      strings: ['你走过的路，正在成为你的地图','伤疤是存在对意识的具象化铭刻，疼痛作为此在向本真性敞开的裂隙。','人生如茶，沉浮都是过程','孤独是灵魂的健身房，你在无人处举起的重量终将化作翅膀'],
		      typeSpeed: 100,//打字的速度
		      smartBackspace: true, // 开启智能退格 默认false
		      backSpeed: 50,//后退速度
		      backDelay: 500,//后退延迟
		      loop: true,//是否循环.,,
		      startDelay: 1000,//起始时间
		      smartBackspace: true, //智能后间距,
		 		
		  });
		 const doc=document
	        document.addEventListener('DOMContentLoaded', function () {
	            const navLinks = document.querySelectorAll('.navigation a');
	            const contentSections = document.querySelectorAll('.content-section');
	
	            // 为导航链接添加点击事件监听器
	            navLinks.forEach(link => {
	                link.addEventListener('click', function (e) {
	                    e.preventDefault();
	                    const targetId = this.getAttribute('data-target');
	
	                    // 移除所有导航链接的 active 类
	                    navLinks.forEach(navLink => {
	                        navLink.classList.remove('active');
	                    });
	                    // 移除所有内容区域的 active 类
	                    contentSections.forEach(section => {
	                        section.classList.remove('active');
	                    });
	
	                    // 为当前点击的导航链接添加 active 类
	                    this.classList.add('active');
	                    // 显示对应的内容区域
	                    document.getElementById(targetId).classList.add('active');
	                });
	            });
	        });
			//歌曲播放器👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
			
			
			//歌曲信息数组
			const songsList=[
				{
					id:'xxx-01',
					title:'火花',
					author:'野田洋次郎',
					path:'./images/音乐/火花.mp3',
					bgPath:'./images//image/火花.jpg',
					time: '6:52'
				},
				{
					id:'xxx-02',
					title:'没什么大不了的',
					author:'野田洋次郎',
					path:'./images/音乐/なんでもないや，没什么大不了的.mp3',
					bgPath:'./images//image/没什么大不了的.jpg',
					time: '5:40'
				},
				{
					id:'xxx-03',
					title:'梦灯笼',
					author:'野田洋次郎',
					path:'./images//音乐/梦灯笼.mp3',
					bgPath:'./images//image/梦灯笼.jpg',
					time: '1:49'
				},
				{
					id:'xxx-04',
					title:'前前世世',
					author:'野田洋次郎',
					path:'./images//音乐/前前世世.mp3',
					bgPath:'./images//image/前前世世.jpg',
					time: '4:46'
				}
			]
			
			// DOM元素
			const audio = doc.querySelector('#audio') // 播放器
			const bgImg = doc.querySelector('#bg-img') // 插图
			const controls = doc.querySelector('#controls') // 按钮区域
			const title = doc.querySelector('#title') // 歌曲标题
			const author = doc.querySelector('#author') // 歌曲作者
			const playBtn = doc.querySelector('#play') // 播放按钮
			const voiceBtn = doc.querySelector('#voice') // 声音开关
			const endTime=doc.querySelector('#end')//获取结束时间
			
			// 当前播放歌曲
			let curSongIndex = 1
			// 是否在播放
			let isPlay = false
			
			
			// 初始化
			function init() {
			    render(songsList[curSongIndex])
			}
			
			
			// 按钮事件
			controls.addEventListener('click', e => {
			    switch (e.target?.id) {
			        case 'list': // 歌曲列表
			            // TODO
			            break;
			        case 'voice': // 声音开关
			            voiceControl();
			            break;
			        case 'pre': // 上一首
			            preSong();
			            break;
			        case 'play': // 播放/暂停
			            togglePlay();
			            break;
			        case 'next': // 下一首
			            nextSong();
			            break;
			        case 'mode': // 播放模式
			            // TODO
			            break;
			        default:
			            break;
			    }
			})
			
			// 播放 / 暂停 切换
			function togglePlay() {
			    if (!isPlay) {
			        // 暂停 图标切换
			        songPlay()
			    } else {
			        // 播放 图标切换
			        songPause()
			    }
			}
			
			// 播放
			function songPlay() {
			    isPlay = true
			    audio.play()
			}
			
			// 暂停
			function songPause() {
			    isPlay = false
			    audio.pause()
			}
			
			// 上一首
			function preSong() {
			    if (curSongIndex > 0) {
			        curSongIndex--
			        render(songsList[curSongIndex])
			        songPlay()
			    }
			}
			
			// 下一首
			function nextSong() {
			    if (curSongIndex < songsList.length - 1) {
			        curSongIndex++
			        render(songsList[curSongIndex])
			        songPlay()
			    }
			}
			
			// 声音控制
			function voiceControl() {
			    if (audio.volume > 0) {
			        voiceOff()
			    } else {
			        voiceOn()
			    }
			}
			
			// 声音开
			function voiceOn() {
			    audio.volume = 1
			}
			
			// 声音关
			function voiceOff() {
			    audio.volume = 0
			}
			
			
			// 内容渲染到页面
			function render(song) {
			    title.innerHTML = song.title
			    author.innerHTML = song.author
			    bgImg.src = song.bgPath; // 插图
			    audio.volume = 1 // 音量 0 ~ 1
			    audio.src = song.path // 音乐资源路径
				endTime.innerHTML=song.time
			}
			init();
			//歌曲播放器👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆
			
			
			 const navItems = document.querySelectorAll('.nav-item');
			 const blueMark = document.getElementById('blue-mark');
			 const contentSections = document.querySelectorAll('.content-sections');
			 
			 navItems.forEach((item, index) => {
			     item.addEventListener('click', () => {
			         navItems.forEach(li => li.classList.remove('actives'));
			         item.classList.add('actives');
			 
			         blueMark.style.left = `${item.offsetLeft}px`;
			 
			         contentSections.forEach(section => section.style.display = 'none');
			         const contentId = item.dataset.target;
			         document.getElementById(contentId).style.display = 'block';
			     });
			 });