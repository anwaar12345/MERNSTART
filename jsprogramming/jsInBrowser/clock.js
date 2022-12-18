// setInterval(() => {
//     document.body.firstElementChild.innerHTML = new Date().toTimeString()
// }, 1000); easy way

setInterval(() => {
    let datetime = new Date();
    let hours = datetime.getHours();
    let minutes = datetime.getMinutes();
    let seconds = datetime.getSeconds()
    // console.log(hours,minutes,seconds)

    let meridiem = (hours >= 12) ?  'PM' : 'AM';
    if (hours > 12) {
        hours -= 12;
     }
    if (hours == 0) {
        hours = 12;
     }
    let min = (minutes < 10) ? `0${minutes} minute` : `${minutes} minutes`;
    seconds = (seconds < 10) ? `0${seconds} seconds` : `${seconds} seconds`
    document.body.firstElementChild.innerHTML = `${hours} hour :${min}:${seconds} ${meridiem}`;
    
},1000)

