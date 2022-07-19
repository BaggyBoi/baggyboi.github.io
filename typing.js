let txt = "Welcome to my absolute garbage website!"
let txtArr = txt.split('')
let displayString = "";
let i = 0
setTimeout(() => {
    $("#wlcmD").click(function () {
        $("#wlcmD").text(txt);
        clearInterval(typeInterval)

    });
    let typeInterval = setInterval(() => {
        displayString = displayString + txtArr[i]
        $("#wlcmD").text(displayString);
        i++
        if (i == txtArr.length) {
            clearInterval(typeInterval)
        }
    }, 25);
}, 100);
