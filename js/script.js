
const mainElem = document.documentElement;
const mainWidth = parseInt(mainElem.clientWidth);
const wrapperLoad = document.querySelector('.wrapperLoad');
  styleWrapperLoad = getComputedStyle(wrapperLoad);
const skipBar = document.querySelector('.skipBar');
  const styleSkipBar = getComputedStyle(skipBar);
const skipBlock = document.querySelector('.skipBlock');
  const styleSkipBlock = getComputedStyle(skipBlock);
const skipTitle = document.querySelector('.skipTitle');
  const styleSkipTitle = getComputedStyle(skipTitle);
const skipBlockContent = document.querySelector('.skipBlockContent');
  const styleSkipBlockContent = getComputedStyle(skipBlockContent);
const titleWelcome = document.querySelector('.welcome');
const wrapper_hello_title = document.querySelector('.wrapper_hello_title');
const block_scroll = document.querySelector('.block_scroll');
const block_autor = document.querySelector('.block_autor');
const block_music = document.querySelector('.block_music');
const block_time = document.querySelector('.block_time');
let flag = 0;
widthContent = skipBlockContent.width;
//#############################################################################
wrapperLoad.addEventListener('mousemove', function(event){
  x = event.clientX - (parseInt(styleSkipBar.left) - parseInt(styleSkipBar.width)/2) - parseInt(styleSkipBlock.width)/2;
  if (x <= 0) x = 0;
  if (x >= parseInt(styleSkipBar.width)-parseInt(styleSkipBlock.width))
      x = parseInt(styleSkipBar.width) - parseInt(styleSkipBlock.width);

  skipBlock.addEventListener("mousedown", function(){
    if (flag == 0) {
                    flag = 1;
                    skipBlock.style.cssText =
                    `background-color: #3caebd;
                    left: ${x}px;
                    opacity: 0.8;
                    `
                    skipBar.style.cssText = `
                      box-shadow: 0 0 15px #3caebd;
                    `
                    }

      })

  document.addEventListener("mouseup", function(){
    if (flag == 1){
          if (x != (parseInt(styleSkipBar.width) - parseInt(styleSkipBlock.width))){
                    flag = 0;
                    x = 0;
                    skipBlock.style.cssText =
                    `background-color: #3caebd;
                    left: ${x}px;`
                    skipBlockContent.style.cssText = `
                    width: ${50}px;
                    `
                    skipBar.style.cssText = `
                      box-shadow: 0 0 8px #3caebd;
                    `
          }else{
            flag = 2;
            welcome();
            skipBar.classList.add('barOpacity');
            skipBlock.style.cssText =
            `background-color: #3caebd;
            left: ${x}px;`
          }


  }})

  if (flag == 1){
     move(x, widthContent);
     widthContent = x;
  }
  if (flag == 2){

  }
});


function move(x, widthContent){
  skipBlock.style.cssText = `
  left: ${x}px;
  background-color: #3caebd;
`
  skipBlockContent.style.cssText = `
  width: ${widthContent+30}px;
`

};

function welcome(){
  let i = 0;
  let str = 'Welcome to the page ...  ';
  setInterval(inputText1, 230);
  function inputText1(){
    if (i<6) {titleWelcome.textContent += str[i];
    i++;}
  }
  setInterval(inputText2, 80);
  function inputText2(){
    if ((i>=6)&&(i<15)) {titleWelcome.textContent += str[i];
    i++;}
  }
  setInterval(inputText3, 200);
  function inputText3(){
    if ((i>=15)&&(i<18)){ titleWelcome.textContent += str[i];
    i++;}
  }
  setInterval(inputText4, 350);
  function inputText4(){
    if ((i>=18)&&(i<str.length)){ titleWelcome.textContent += str[i];
    i++;
    if (i==22) wrapperLoad.classList.add('barOpacity');
    if (i==25) {wrapperLoad.style.cssText = 'display: none';
                document.body.style.overflow = " visible"
                wrapper_hello_title.style.cssText = `opacity: 1;  top: 35%;`
                block_scroll.style.cssText = `top: 30px;`
                block_autor.style.cssText = ` top: 50px;`
                block_music.style.cssText = `opacity:1;`
                block_time.style.cssText = `opacity:1;`
                call_surfing.classList.add('call_surfing_Hi');
              }
  }
  }
}

//#############################################################################
const marker_scroll = document.querySelector('.marker_scroll');
const style_marker_scroll = getComputedStyle(marker_scroll);
const marker_scroll_text = document.querySelector('.marker_scroll_text');
const pageHight = document.documentElement.scrollHeight;
const bodyHight = document.body.scrollHeight;
let flagForScroll = 1;
let scrollY, procent;
document.addEventListener('scroll', function(){
  scrollY = window.pageYOffset;
  procent = Math.round(scrollY/((pageHight-bodyHight-30)/100));
  if (procent>100) procent=100;
  marker_scroll.style.cssText = ` transform: rotate(${procent*5.4}deg);`
  marker_scroll_text.innerHTML = `${procent}%`;
})

marker_scroll.onclick = function(){if (flagForScroll==1)window.scrollTo({top: 0,behavior: 'smooth'});}

//#############################################################################
const block_music_button = document.querySelector('.block_music_button');
const audio = document.querySelector('.block_music audio');
const block_music_controls = document.querySelector('.block_music_controls');
const block_music_volumUp = document.querySelector('.block_music_volumUp');
const block_music_volumDown = document.querySelector('.block_music_volumDown');
const block_music_stop = document.querySelector('.block_music_stop');
let audioFlag = 0;
audio.volume = 0.5;
block_music_button.addEventListener('click', function(){
  if (audioFlag==0) {audio.play();
                    audioFlag = 1;
                    block_music_button.classList.add('button_music_animation');
                    block_music_controls.style.cssText = ` opacity: 1;`}
  else if(audioFlag==1) {audio.pause();
                        audioFlag = 0;
                        block_music_button.classList.remove('button_music_animation');
                        block_music_controls.style.cssText = ` opacity: 0;`}
})
block_music_controls.addEventListener('click', function(event){
  if (event.target == block_music_volumUp) {if(audio.volume <= 0.9) {audio.volume += 0.1;}}
  if (event.target == block_music_volumDown) {if(audio.volume >= 0.1) {audio.volume -= 0.1;}}
  if (event.target == block_music_stop) {audio.pause(); audio.currentTime = 0.0;}
})
//#############################################################################
let now, min, blink = 0;
time();
setInterval(time, 2000);
function time(){
  now = new Date();
  if (String(now.getMinutes()).length == 1) {min = `0${now.getMinutes()}`} else min = now.getMinutes();
  if (blink == 0)
  {blink = 1;
  block_time.innerHTML = `${now.getHours()}:${min}`;
  }
  else {blink = 0;
  block_time.innerHTML = `${now.getHours()} ${min}`;
  }

}
//#############################################################################
const wrapper_blockAbout = document.querySelector('.wrapper_blockAbout');
const style_wrapper_blockAbout = getComputedStyle(wrapper_blockAbout);
const circleMove = document.querySelector('.circleMove');
let x, y;
wrapper_blockAbout.addEventListener('mouseout', function(){
    circleMove.style.cssText = `opacity: 0;`
})

wrapper_blockAbout.addEventListener('mousemove', function(event){
  var target = this.getBoundingClientRect();
  x = event.clientX - target.left -25;
  y = event.clientY - target.top -25;
  if (x > parseInt(style_wrapper_blockAbout.width)-50){x -=25;}
  circleMove.style.cssText = `opacity: 0.8;
                              top: ${y}px;
                              left: ${x}px;`;
})
//#############################################################################
const block_photos = document.querySelectorAll('.menu_block_photos img');
const wrapper_blockMenu = document.querySelector('.wrapper_blockMenu');
wrapper_blockMenu.addEventListener('mousemove', function(event){
  var target = this.getBoundingClientRect();
  x = event.clientX - target.left - target.width/2;
  let moveX = x*0.1;
  y = event.clientY - target.top - target.height/2;
  let moveY = y*0.1;
  for (let i = 0; i<block_photos.length; i++){
    if ((x<0)&&(y<0)){block_photos[i].style.cssText = `transform: translate(${moveX}px, ${moveY}px);`}else
    if ((x>0)&&(y<0)){block_photos[i].style.cssText = `transform: translate(${moveX}px, ${moveY}px);`}else
    if ((x<0)&&(y>0)){block_photos[i].style.cssText = `transform: translate(${moveX}px, ${moveY}px);`}else
    if ((x>0)&&(y>0)){block_photos[i].style.cssText = `transform: translate(${moveX}px, ${moveY}px);`};
  }
})
//#############################################################################
const videoPhon = document.querySelector('.wrapper_video_phon video');
const blockAboutText = document.querySelector('.wrapper_blockAbout .container_text');
const blockAboutTextP = document.querySelectorAll('.wrapper_blockAbout .main_container p');
const blockAboutTextH2 = document.querySelector('.wrapper_blockAbout .main_container h2');
const menu_block_photos = document.querySelectorAll('.menu_block_photos div');


let flagForVideo = 0;
document.addEventListener('scroll', function(){
  let scrollYUp = window.pageYOffset;
  let scrollYDown = scrollYUp + window.innerHeight;
  const windowHeight = window.innerHeight;
  if (flagForVideo == 0){
    if (scrollYUp > 700){
      videoPhon.pause();
      flagForVideo = 1;
    }
  }
  if (flagForVideo == 1){
    if (scrollYUp < 700){
    flagForVideo = 0;
    videoPhon.play();
    }
  }

  if (scrollYDown/(windowHeight / 100) > 150){
    for (let i = 0; i<blockAboutTextP.length; i++){blockAboutTextP[i].style.cssText = `opacity: 1; transition-duration: ${i*0.1}s; transition-delay: ${i*0.3}s`}
    blockAboutTextH2.style.cssText = `left: 0px;  opacity: 1;`
    blockAboutText.classList.add('modForBefore');
  }
  if (scrollYDown/(windowHeight / 100) > 250){
    for (let i = 0; i<menu_block_photos.length; i++){
      let dur = i;
      if (i==0) dur = 1.2;
      menu_block_photos[i].style.cssText = `opacity: 1; transition-duration: ${dur*0.4}s; transition-delay: ${i*0.2}s;`;
    }
  }

})
//#############################################################################
const menu_wrapper = document.querySelector('.menu_wrapper');
const menu_item = menu_wrapper.querySelectorAll('div');
const wrapper_blockGroup = document.querySelector('.wrapper_blockGroup');
const wrapper_items = wrapper_blockGroup.querySelectorAll('.wrapper_blockGroup > div');
const item_buttonBack1 = document.querySelector('.item_buttonBack1');
const item_buttonBack2 = document.querySelector('.item_buttonBack2');
const item_buttonBack3 = document.querySelector('.item_buttonBack3');
let j = 0;
let flagForMenu;
let scrollX, tabooY=1;
menu_wrapper.onclick = function(event){
  for (let i=1; i<menu_item.length; i++){
      if(event.target.closest('div') == menu_item[i].closest('div')){
      menu_item[i].classList.add('menu_item_active');
      flagForMenu = i;
      if (i==4){setTimeout(function(){
        for(let i = 0; i<19; i++){galleryNice(i);}
      }, 1000);}

      }
  for (let i=0; i<menu_item.length; i++){
    if (i!=flagForMenu){menu_item[i].classList.remove('menu_item_active');}
  }
    for (let j=0; j<=wrapper_items.length; j++){
      if ((j)==flagForMenu){
        if (j!=1){
        wrapper_items[j-1].style.cssText = `display: block;`;
                            document.body.style.cssText = `overflow-y: hidden;`;
                            document.addEventListener('mousewheel', funScrollX);
                            tabooY = 0;
                            setScroll('True');
                            setTimeout(scrollToTimeOut, 600);
                            function scrollToTimeOut(){scrollTo({left: mainWidth+30, behavior: 'smooth'})}
                            for (let i=0; i<wrapper_items.length; i++){
                              if (i!=(j-1)){
                              wrapper_items[i].style.cssText = `display: none;`};}
                              flagForScroll=0;
                              flagForSerfing=0;
                              if(flagForScroll==0)block_scroll.style.cssText = 'display: none;';
                              if(flagForSerfing==0)call_surfing.style.cssText = 'display: none;';

                          }

        else{
          for (let j=0; j<wrapper_items.length; j++){
            wrapper_items[j].style.cssText = `display: none;`};
          scrollTo({left:0, behavior: 'smooth'})
          tabooY = 1;
          document.removeEventListener('mousewheel', funScrollX);
          document.body.style.cssText = `overflow-y: auto;`;
          document.body.style.cssText = `overflow-x: hidden;`;
          flagForScroll=1;
          flagForSerfing=1;
          if(flagForScroll==1)block_scroll.style.cssText = 'display: block; top: 30px;';
          if(flagForSerfing==1){call_surfing.style.cssText = 'display: flex;';
                                call_surfing.style.cssText = `opacity: 1;`;}
       }
      }
    }
  }
}
item_buttonBack1.onclick = function(){
  scrollTo({left:0, behavior: 'smooth'});
}
item_buttonBack2.onclick = function(){
  scrollTo({left:0, behavior: 'smooth'});
}
item_buttonBack3.onclick = function(){
  scrollTo({left:0, behavior: 'smooth'});
}
function setScroll(top){
  wrapper_blockMenu.scrollIntoView({top, behavior: 'smooth'});
}
// Переделать всё. мб сделать без горизонтального скролла. только скролл вниз
function funScrollX(event){
  if (event.deltaY>0){
    scrollTo({left: mainWidth, behavior: 'smooth'});
  }
}
//#############################################################################
const item4_content_colleg = document.querySelectorAll('.item4_content div');
for (let i = 0; i<item4_content_colleg.length; i++){
  item4_content_colleg[i].innerHTML = ``;
  item4_content_colleg[i].append(document.createElement('img'));
  let image = item4_content_colleg[i].querySelector('img');
  image.src = `img/item4/${i+1}.png`;
}
//#############################################################################
const item4_contentWrap = document.querySelector('.item4_content-wrap');
const item4_content = document.querySelector('.item4_content');
const blockToWatch = document.querySelector('.blockToWatch');
const blockToWatchImage = blockToWatch.querySelector('img');
// console.log(blockToWatchImage);
item4_content.addEventListener('click', function(event){
  // console.log(event.target.closest('div'));
  for (let i = 0; i<item4_content_colleg.length; i++){
    if (event.target.closest('div') == item4_content_colleg[i]){
      blockToWatchImage.src = `img/item4/${i+1}.png`;
      blockToWatch.style.cssText = `display: block;`;
      item4_contentWrap.style.cssText = `filter: brightness(30%) blur(2px);`;
    }
  }
})
blockToWatch.onclick = function(){
  blockToWatch.style.cssText = `display: none;`;
  item4_contentWrap.style.cssText = `filter: brightness(100%) blur(0);`
}
//#############################################################################
const menu_surfing = document.querySelector('.menu_surfing');
const call_surfing = document.querySelector('.call_surfing');
const menu_surfing_ton = document.querySelector('.menu_surfing_ton');
let flagForCloseMenu = 0;
call_surfing.addEventListener('click', function(){
  flagForCloseMenu = 1;
  menu_surfing.style.cssText = `opacity: 1; left: 0px;`;
  menu_surfing_ton.style.cssText = `display: block`;
  call_surfing.style.cssText = `opacity: 0;`;
  call_surfing.classList.remove('call_surfing_Hi');
  // console.log(event.target.closest('div'))
  menu_surfing_ton.addEventListener('click', function(){
    menu_surfing.style.cssText = `opacity: 0; left: -20%;`;
    menu_surfing_ton.style.cssText = `display: none`;
    call_surfing.style.cssText = `opacity: 1;`;
    call_surfing.classList.add('call_surfing_Hi');
  })
  //поставить прослушку на тонировка, при нажатии скрывать меню и тонировку

})
//#############################################################################
const block1_forSurfing = document.querySelector('.wrapper_hello');
const block2_forSurfing = document.querySelector('.wrapper_blockAbout');
const block3_forSurfing = document.querySelector('.wrapper_blockMenu');
const block4_forSurfing = document.querySelector('.wrapper_footer');

const menu_li = menu_surfing.querySelectorAll('li');
let flagForSerfing=1;
menu_surfing.onclick = function(event){
  if (flagForSerfing==1){
    if(event.target == menu_li[0]){
      setScroll('true', block1_forSurfing);
    }
    if(event.target == menu_li[1]){
      setScroll('true', block2_forSurfing);
    }
    if(event.target == menu_li[2]){
      setScroll('true', block3_forSurfing);
    }
    if(event.target == menu_li[3]){
      setScroll('true', block4_forSurfing);
    }
  }

  function setScroll(top, element){
  element.scrollIntoView({top, behavior: 'smooth'});
}
}
//#############################################################################
const item4_content_allDiv = document.querySelectorAll('.item4_content div');
function galleryNice(j){
  setTimeout(function(){item4_content_allDiv[j].style.cssText = `transform: rotateY(0deg);`;}, j*100);
}
//#############################################################################
const contact_block = document.querySelector('.footer_autor-contacts');
const contactsForFooter = document.querySelectorAll('.footer_autor-contacts div');
const success = document.querySelector('.footer_autor-contacts-successfull');
contact_block.addEventListener('click', function(event){
  if(event.target==contactsForFooter[0]){navigator.clipboard.writeText('https://vk.com/shushlyakovnikita'); window.open('https://vk.com/shushlyakovnikita','_blank')};
  if(event.target==contactsForFooter[1]){navigator.clipboard.writeText('https://github.com/WebWorksByNikitaShushlyakov'); window.open('https://github.com/WebWorksByNikitaShushlyakov','_blank')};
  if(event.target==contactsForFooter[2]){navigator.clipboard.writeText('Sr. Amigo#6890'); hiSuccess()};
  if(event.target==contactsForFooter[3]){navigator.clipboard.writeText('amigo7772015@mail.ru'); hiSuccess()};
  function hiSuccess(){
    success.classList.add('success');
    setTimeout(bySuccess, 2500);
  }
  function bySuccess(){
    success.classList.remove('success');
  }
})
//#############################################################################
const menu_surfingPhoto = document.querySelector('.surfing_logo');
let flagForSurfint = 0;
setInterval(animLogoSurfing, 1000);

function animLogoSurfing(){
  if(flagForSurfint==3){flagForSurfint=0}
  if(flagForSurfint==0){setTimeout(function(){menu_surfingPhoto.setAttribute('src', 'img/logo21.png')}, 1000);}
  if(flagForSurfint==1){setTimeout(function(){menu_surfingPhoto.setAttribute('src', 'img/logo22.png')}, 1500);}
  if(flagForSurfint==2){setTimeout(function(){menu_surfingPhoto.setAttribute('src', 'img/logo23.png')}, 1200);}
  flagForSurfint++;
}
//#############################################################################
window.onload = setTimeout(startPage(true), 5000);

function startPage(top){
  wrapperLoad.scrollIntoView({top, behavior: 'smooth'});
  document.body.style.overflow = "hidden";
  setTimeout(function(){window.scrollTo(0, 0);}, 2500)
}
