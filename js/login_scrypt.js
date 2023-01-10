navigator.geolocation.getCurrentPosition(function (position) {
    console.log("широта", position.coords.latitude);
    console.log("довгота", position.coords.longitude);
});

document.querySelector(".unit").addEventListener("click", () => {
    history.back();
});
document.innerHTML = console.log(
    "Screen Width: " + screen.width,
    "Screen Hight: " + screen.height
);