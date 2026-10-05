//your JS code here. If required.
const form = document.querySelector("form");

const fontSize = document.getElementById("fontsize");
const fontColor = document.getElementById("fontcolor");


// Apply saved preferences when the page loads
window.addEventListener("load", function () {

    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");

    if (savedFontSize) {
        fontSize.value = parseInt(savedFontSize);
        document.documentElement.style.setProperty(
            "--fontsize",
            savedFontSize
        );
    }

    if (savedFontColor) {
        fontColor.value = savedFontColor;
        document.documentElement.style.setProperty(
            "--fontcolor",
            savedFontColor
        );
    }
});


// Save preferences
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const size = fontSize.value + "px";
    const color = fontColor.value;

    // Save in cookies
    document.cookie = "fontsize=" + size + "; path=/";
    document.cookie = "fontcolor=" + color + "; path=/";

    // Apply immediately
    document.documentElement.style.setProperty(
        "--fontsize",
        size
    );

    document.documentElement.style.setProperty(
        "--fontcolor",
        color
    );
});


// Get cookie value
function getCookie(name) {

    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {

        const [key, value] = cookie.split("=");

        if (key === name) {
            return value;
        }
    }

    return null;
}