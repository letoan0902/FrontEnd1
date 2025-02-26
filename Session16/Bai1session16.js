console.log("Hello World")

document.write("Hello World")

alert("Hello World")


let tabSwitchCount = 0;
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {

        console.log("Bạn đã rời khỏi tab.");
    } else {

        tabSwitchCount++;
        document.write("Số lần bạn chuyển tab: " + tabSwitchCount);
        console.log("Số lần bạn chuyển tab: " + tabSwitchCount);
    }
});
