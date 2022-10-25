let timeHtml = document.getElementsByName("time")

window.addEventListener('load', () => {
    console.log('ok👍')
})
setInterval(getTime, 1000)

function getTime() {
    let date = new Date()
    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let now_time = `${hour}:${mins}:${secs}`
    //console.log(now_time)
    timeHtml.innerHTML = "now_time";
}

//essa porra não funciona




