let hourHand = document.getElementById("hourID")
let minHand = document.getElementById("minID")
let secHand = document.getElementById("secID")
let hour = document.getElementById('h')
let min = document.getElementById('m')
let AMPM = document.getElementById('status')
let month = document.getElementById('month')
let date = document.getElementById('date')
let day = document.getElementById('day')

/// hands are 180 deg ahead so add 180 offset

setInterval(() => {
    mainDate = new Date()
    let hours = mainDate.getHours()
    let mins = mainDate.getMinutes()
    let secs = mainDate.getSeconds()
    
    let status = getStatus(hours)

    //////convert in 12 hour format ////////
    if (status === "PM") {
        hours = hours - 12
    }

    ////////// sec //////////////
    setSec(secs)

    ////////// minutes ////////////
    setMins(mins,secs)

    ///////// Hour ///////////////
    setHours(hours,mins)

    /////////set time///////////////
    hour.innerHTML = hours.toString()
    min.innerHTML = mins.toString().padStart(2, '0')
    AMPM.innerHTML = status
    /////////set date////////////////
    
    let dateInfo = mainDate.toDateString().split(" ")
    //["Tue", "Aug", "10", "2021"]


    month.innerHTML = dateInfo[1]
    date.innerHTML = dateInfo[2]
    day.innerHTML = dateInfo[0]

    console.log(dateInfo);
    console.log(hours,mins,secs);
}, 1000);

function getStatus(hours) {
    if (hours > 12) {
        return "PM"
    }
    return "AM"
}


function setSec(secs) {
    let secAngle = secs * 6 + 180
    secHand.style.transform = `rotate(${secAngle.toString()}deg)`
}

function setMins(mins,secs) {
    let minAngle = mins * 6 + 180
    minHand.style.transform = `rotate(${minAngle.toString()}deg)`
}

function setHours(hours, mins) {
    
    let hourAngle = hours * 30 + 180 + (mins / 2)
    hourHand.style.transform = `rotate(${hourAngle.toString()}deg)`
}