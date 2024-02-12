// set Variables


const startStopBtn=document.querySelector('#startStop');

const reset=document.querySelector('#reset');


//Variables for timer

let seconds=0;
let minutes=0;
let hours=0;

let leadingSecond=0;
let leadingMinute=0;
let leadingHour=0;

// setinterval & timerstatus
let timerInterval=null;
let timerStatus="stopped";


//stop watch btn

function stopWatch(){
    seconds++
    if(seconds/60===1){
        seconds=0;
        minutes++;


        if(minutes/60===1){
            minutes=0;
            hours++;

        }
    }
    
    if(seconds<10){
        leadingSecond="0"+seconds.toString();
    }else{
        leadingSecond=seconds;
    }
    
    if(minutes<10){
        leadingMinute="0"+minutes.toString();
    }else{
        leadingMinute=minutes;
    }
    
    if(hours<10){
        leadingHour="0"+hours.toString();
    }else{
        leadingHour=hours;
    }
    let displayTimer=document.getElementById('timer').innerText=leadingHour + ":" +leadingMinute + ":"+leadingSecond;
    
}


startStopBtn.addEventListener('click',()=>{
  if(timerStatus==="stopped"){
    timerInterval=window.setInterval(stopWatch,1000);
    document.getElementById("startStop").innerHTML=`<i class="fa-solid fa-play" id="play">1</i>`;

    timerStatus="started"
  }else{
    window.clearInterval(timerInterval);
    document.getElementById('reset').innerHTML=`  <i class="fa-solid fa-arrow-rotate-left" id="reset">0</i>`;
    timerStatus="stopped";
  }
  




});

 reset.addEventListener('click',()=>{
    window.clearInterval(timerInterval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('timer').innerHTML="00:00:00";
 })

 //fetcc data from json file


 const func=async()=>{
    try {
  const req=await fetch("data.json");
  const res=await req.json();
  

  const arr=res.users;

   arr.map(user=>{
     user.contact==null? "present":"absent";
   }
    )




        
    } catch (error) {
       console.log(error) 
    }

 }

 func();