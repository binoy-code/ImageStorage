
const API_KEY = 'AalBCySIDwTHR6bgb0haa9HHSyPvJJvPkJRYDr8TubuXg3GuYz55K3vE';
const BASE_URL = 'https://api.pexels.com/v1/';
let QUERY = 'fruit'; // Example search query
let myArray=[];
let pages=1;
let button=document.createElement("button");
let select=Array.from(document.querySelector('.select').children);
button.className="loadimage"
button.innerText="LOAD";
const cards=document.createElement('div');
cards.className='cards';
document.querySelector(".second-child-parent").appendChild(cards);

Object.prototype.remove=function(){
  this.array=this;
  for(let remove=this.array.length-1; remove>=0; remove--){
       this.array[remove].remove();
  }
  return this.array;
}
function myturtoria(pages,search="fruit"){
fetch(`https://api.pexels.com/v1/search/?page=${pages}&per_page=15&query=${search}`, {
  headers: {
    Authorization: API_KEY
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
   console.log(data);
   if(myArray.length!=0){
    //previous element remove from the Array;
       myArray=[];
   }
  for(const x in data){
    if(x==='photos'){
      for(const key in data[x]){
       for(const keys in data[x][key]){
          if(keys ==='src'){
             for(const kiy in data[x][key][keys]){
              if(kiy==='tiny'){
                  // data values store into the array
                  myArray.push(data[x][key][keys][kiy]);
              }
             }
          }
       }
      }
    }
  }
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

  if(cards.innerText==="not found"){
    //removes the else statement below 
      cards.removeChild(cards.firstChild);
  }else if(cards.children.length!=0){
    //previous children remove from the cards
       cards.innerHTML="";
  }

 setTimeout(() => {
   if(myArray.length!=0){
    myArray.forEach(myfunction)
     function myfunction(num){
      const image=document.createElement('img');
      image.className="anyitems"
      if(String(num.match('280'))==='280'){
        image.src=num.replace('280','250');
        cards.append(image);
       }
     }
    cards.appendChild(button);
}else{
   cards.innerText="not found";
}
 
 },350);
}
myturtoria(1,'fruit');
//call function in search bar
function video(pages,search="fruit"){
  fetch(`https://api.pexels.com/v1/videos/search/?page=${pages}&per_page=1&query=${search}`,{
      headers:{
        Authorization: API_KEY
      }
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }).then(data =>{
       if(myArray.length!=0){
         //previous array element remove
             myArray=[];
       }
      data.videos[0].video_files.forEach(myfunction)
      function myfunction(num){
        //new element add to the Array
         myArray.push(num);
      }
  }).catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  })
  if(cards.innerText==='not found'){
    cards.removeChild(cards.firstChild);
  }else if(cards.children.length!=0){
    //previous children remove from the card
       cards.innerHTML="";
  }
  setTimeout(() => {
  if(myArray.length!=0){
     myArray.forEach(myfunction)
     function myfunction(num){
      console.log(num);
       const divs=document.createElement('div');
       const divi=document.createElement('div');
       const video=document.createElement("video");
       const source=document.createElement("source");
        divs.className="troll";
        divi.className="trolling"   
        divs.appendChild(video);
        divs.appendChild(divi);
         if(divs.getAttribute("class")!=null){
          const img=document.createElement('img')
              img.setAttribute("src","svg/play.svg");
              img.className="stop"
               divs.appendChild(img);
         }
         if(divi.getAttribute("class")!=null){
          const img=document.createElement('img');
            img.setAttribute("src","svg/play2.svg");
            img.className="stops"
            divi.appendChild(img)
         }
         source.setAttribute('src',`${num.link}`);
         for(const Key in num){
            console.log(num[Key]);
             video.className="editing";
            if(Key==='file_type'||Key=='width'||Key==='height'){
                 if(Key==='width'){
                     video.setAttribute(`${Key}`,`370`);
                  }else if(Key==='height'){
                      video.setAttribute(`${Key}`,`210`);
                  }else{
                     video.setAttribute(`${Key}`,`${num[Key]}`);
                 }
            }
            video.appendChild(source);
            video.load();
         }
         cards.appendChild(divs);
     }
     cards.appendChild(button);
     const event=Array.from(document.querySelectorAll(".stop"))
     const videos=Array.from(document.querySelectorAll(".editing"));
     const events=Array.from(document.querySelectorAll(".stops"));
      event.forEach(clickfunction)
      function clickfunction(num,index){
         num.addEventListener("click",(e)=>{
             e.stopPropagation();
          function checkfunction(nums){
                if(nums.paused!=true){
                   return nums
                }
             }
              if(videos.findIndex(checkfunction)!=-1&&videos.findIndex(checkfunction)!=index){
                events[videos.findIndex(checkfunction)].setAttribute("src","svg/play2.svg")
                event[videos.findIndex(checkfunction)].setAttribute("src","svg/play.svg");
                videos[videos.findIndex(checkfunction)].pause();   
              }
              if(event[index].getAttribute("src").includes("play")){
                 event[index].setAttribute("src","svg/pause.svg");
                 events[index].setAttribute("src","svg/pause2.svg")
                 videos[index].play();
              }else{
                event[index].setAttribute("src","svg/play.svg")
                events[index].setAttribute("src","svg/play2.svg")
                 videos[index].pause()
              }
         },false)
            videos[index].addEventListener("ended",(u)=>{
              u.stopPropagation();
            num.setAttribute("src","svg/play.svg");
             events[index].setAttribute("src","svg/play2.svg")
           })
      }
      events.forEach(clickfunction)
      function myhover(nums){
         nums.addEventListener('mouseover',(odd)=>{
             odd.stopPropagation();
             odd.currentTarget.style.opacity="0.8";
         },false)
         nums.addEventListener('mouseout',(even)=>{
             even.stopPropagation();
             if(even.currentTarget.hasAttribute("style")){
                    even.currentTarget.removeAttribute("style");
             }
         },false)
      }  
        event.forEach(myhover);
        const trolling=Array.from(document.querySelectorAll(".trolling"));
        const troll=Array.from(document.querySelectorAll(".troll"));
        trolling.forEach(myinsertfunction)
        function myinsertfunction(num,index){
           const dibs=document.createElement("div");
            dibs.appendChild(dibs.cloneNode(true));
            dibs.firstElementChild.className="point"
            dibs.className="sikbhe"
            num.appendChild(dibs);
               num.parentElement.addEventListener('mouseover',(e)=>{
                e.stopPropagation();
                trolling[index].classList.add("bottom-up");
                troll[index].lastElementChild.classList.add("values");
            },false)
            num.parentElement.addEventListener('mouseout',(e)=>{
                e.stopPropagation();
                 trolling[index].classList.remove("bottom-up");
                 troll[index].lastElementChild.classList.remove("values");
            },false)
        }
        const force=Array.from(document.querySelectorAll(".point"));
        
       videos.forEach(timeupdatefunction)
       //seconds convert into Hour
       function settimehour(seconds){
        if(seconds>3599&&seconds<216000){
           seconds=parseInt(3600/3600);
           if(String(parseInt(seconds)).length===1){
                return`0${parseInt(seconds)}`;
           }else if(String(parseInt(seconds)).length===2){
               return `${parseInt(seconds)}`;
           }
        }else{
           return`00`
        }
     }
     //seconds convert into Minute
     function settimeMinute(seconds){
       if(seconds>=3600){
         seconds=(seconds%3600);
       }
      if(seconds>60&&seconds<3600){
          seconds=parseInt(seconds/60);
         if(String(parseInt(seconds)).length===1){
              return`0${parseInt(seconds)}`;
         }else if(String(parseInt(seconds)).length===2){
             return `${parseInt(seconds)}`;
         }
      }else{
         return`00`
      }
   }
     // seconds count
     function settimeSeconds(seconds){
      if(seconds>=60){
        seconds=(seconds%3600)%60;
      }
     if(seconds>-1&&seconds<60){
        if(String(parseInt(seconds)).length===1){
             return`0${parseInt(seconds)}`;                           
        }else if(String(parseInt(seconds)).length===2){
            return `${parseInt(seconds)}`;
        }
     }else{
        return`00`
     }
  }
       function timeupdatefunction(num,index){
             const binos=document.createElement("div");
             binos.className="binos";
             document.querySelectorAll(".sikbhe")[index].appendChild(binos);
             let toilet;
           num.addEventListener("durationchange",(eve)=>{
                eve.stopPropagation();
               document.querySelectorAll(".binos")[index].innerHTML=`${settimehour(parseInt(eve.currentTarget.currentTime))}:${settimeMinute(parseInt(eve.currentTarget.currentTime))}:${settimeSeconds(parseInt(eve.currentTarget.currentTime))}-${settimehour(parseInt(eve.currentTarget.duration))}:${settimeMinute(parseInt(eve.currentTarget.duration))}:${settimeSeconds(parseInt(eve.currentTarget.duration))}`; 
               const fixedvalue=document.createElement("div");
                fixedvalue.className="value"
                 if(num.parentNode.lastElementChild.getAttribute("class").slice(0,5)!="value"){
                  num.parentNode.appendChild(fixedvalue);
                 }
                  num.parentNode.lastElementChild.innerHTML=`${settimehour(parseInt(eve.currentTarget.currentTime))}:${settimeMinute(parseInt(eve.currentTarget.currentTime))}:${settimeSeconds(parseInt(eve.currentTarget.currentTime))}-${settimehour(parseInt(eve.currentTarget.duration))}:${settimeMinute(parseInt(eve.currentTarget.duration))}:${settimeSeconds(parseInt(eve.currentTarget.duration))}`;
           },false)

          num.addEventListener("timeupdate",(e)=>{
             e.stopPropagation();
            let duration=100/e.currentTarget.duration;
            if(force[index].getAttribute("style")===null){
              force[index].style.left="0%"
            }else if(parseInt(e.currentTarget.currentTime)!=toilet){
                  //video current time count kor bo;
                 toilet=parseInt(e.currentTarget.currentTime);
                 // eda 0 taika 100 percent feejon tou jai bo
                 force[index].style.left=`${parseFloat(force[index].getAttribute("style").substring(6,force[index].getAttribute("style").length))+duration}%`;
                 //time count hoibo and time duration is length
                 document.querySelectorAll(".binos")[index].innerHTML=`${settimehour(parseInt(e.currentTarget.currentTime))}:${settimeMinute(parseInt(e.currentTarget.currentTime))}:${settimeSeconds(parseInt(e.currentTarget.currentTime))}-${settimehour(parseInt(e.currentTarget.duration))}:${settimeMinute(parseInt(e.currentTarget.duration))}:${settimeSeconds(parseInt(e.currentTarget.duration))}`;
                 // time count for grey card bar[00:00:00-00:00:15];
                 let value=document.querySelectorAll(".value");
                    value[index].innerHTML=`${settimehour(parseInt(e.currentTarget.currentTime))}:${settimeMinute(parseInt(e.currentTarget.currentTime))}:${settimeSeconds(parseInt(e.currentTarget.currentTime))}-${settimehour(parseInt(e.currentTarget.duration))}:${settimeMinute(parseInt(e.currentTarget.duration))}:${settimeSeconds(parseInt(e.currentTarget.duration))}`;
                }
          },false) 
          videos[index].addEventListener("ended",(s)=>{
              s.stopPropagation();
              force[index].removeAttribute("style");
              toilet=undefined;
          },false)
       }   
     
  }else{
     cards.innerText='not found';
  }
  }, 350);
}
 
select.forEach(myselecting);

function foundindex(index){
  return index.getAttribute("class")==='active'
}
function myselecting(num){
  num.addEventListener('click',(e)=>{
     if(e.currentTarget.id==='Images'){
       if(select[select.findIndex(foundindex)].getAttribute("class")!=e.currentTarget.getAttribute("class")){ 
        select[select.findIndex(foundindex)].removeAttribute("class")
       }
       e.currentTarget.className="active";
       myturtoria(1,'fruit');
     }else{
      if(select[select.findIndex(foundindex)].getAttribute("class")!=e.currentTarget.getAttribute("class")){
        select[select.findIndex(foundindex)].removeAttribute("class");
      }
      e.currentTarget.className="active";
      video(1,'fruit');
     }
  })
}
  for(let selecting=0; selecting<select.length; selecting++){
       select[selecting].addEventListener('mouseover',(e)=>{
            if(!(e.currentTarget.hasAttribute("class"))){
                e.currentTarget.setAttribute('class','hover');
            }
       })
       select[selecting].addEventListener("mouseout",(e)=>{
        if(e.currentTarget.getAttribute("class")==="hover"){
             e.currentTarget.removeAttribute("class");
        }
    })
  }
document.querySelector(".svg").addEventListener('click', (e)=>{
  e.preventDefault();
  if(select[select.findIndex(foundindex)].getAttribute('id')==='Images'){
    pages=1;
    QUERY=document.querySelector("input").value;
    myturtoria(pages,QUERY)
  }else{
    pages=1;
    QUERY=document.querySelector("input").value;
    video(pages,QUERY)
  }
})

button.addEventListener('click',(e)=>{
   e.preventDefault();
   e.stopPropagation()
   if(select[select.findIndex(foundindex)].getAttribute('id')==='Images'){
    //call for images element
     QUERY=document.querySelector("input").value;
     myturtoria(++pages,QUERY);
  }else{
    // call for video element
    QUERY=document.querySelector("input").value;
     video(++pages,QUERY);
  }
})





 










 