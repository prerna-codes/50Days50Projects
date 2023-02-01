const hoursE1 =document.getElementById('hour');
const minutesE1=document.getElementById('minute');
const secondsE1= document.getElementById('second');
const toggle=document.getElementById('toggle');
const dateE1=document.getElementById('date');
const timeE1=document.getElementById('time');

toggle.addEventListener('click' , () => {
    const html= document.querySelector('html');
    if (html.classList.contains('dark')){
        html.classList.remove('dark');
        toggle.innerHTML='Dark Mode'
    } else{
        html.classList.add('dark');
        toggle.innerHTML='Light Mode'
    }
})

const days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday', 'Saturday']

const months=['Jan','Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']

setInterval(() => {

const time= new Date();
const day = time.getDay();
const date =time.getDate();
const month= time.getMonth();
const hour=time.getHours();
const hourIn12Hour = hour % 12;
const minutes = time.getMinutes();
const seconds= time.getSeconds();
const ampm = hour > 12 ? 'PM' : 'AM';

dateE1.innerText = `${days[day]} , ${date} ${months[month]}`

timeE1.innerText=`${hour}:${minutes < 10 ?`0${minutes}`: minutes} ${ampm}`

hoursE1.style.transform =` translate(-50%, -100%) rotate(${hour *30}deg)`

minutesE1.style.transform = `translate(-50%, -100%) rotate(${minutes *6}deg)`

secondsE1.style.transform = `translate(-50%, -100%) rotate(${seconds *6}deg)`
})
setInterval(() =>{
     
}, 1000)