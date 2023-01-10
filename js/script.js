let button = document.querySelector(".btn");

button.addEventListener("click", () => getVal());
button.addEventListener("click", () => login());

function login(e) {
    e.preventDefault();
}

function getVal() {
    let email = document.querySelector("#exampleInputEmail1").value;
    let pas = document.querySelector("#exampleInputPassword1").value;
    console.log("User email: " + email);
    console.log("User password: " + pas);
}

function login() {
    document.querySelector("form").style.display = "none";
    document.querySelector(".loader").style.display = "block";
    link = () => {
        document.location.assign("./profile.html");
    };
    setTimeout(link, 6700);
}

document.getElementById('history-button').addEventListener('click', () => {
    history.back();
});

