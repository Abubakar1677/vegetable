function timeFrame(){
    let datetime= new Date();
    let hrs = datetime.getHours();
    let min = datetime.getMinutes();
    let sec = datetime.getSeconds();
    let session = document.getElementById("sessions")

    if(hrs>=12){
        sessions.innerHTML="PM"
    }else{
        sessions.innerHTML="AM"
    }

    document.getElementById('hours').innerHTML= hrs;
    document.getElementById('minutes').innerHTML= min;
    document.getElementById('seconds').innerHTML= sec;

}
setInterval(timeFrame, 10)