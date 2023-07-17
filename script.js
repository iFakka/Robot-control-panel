// Function to show the pop-up window
function showPopup(content) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    popupContent.innerText = content;
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
}

// Function to open a new window and display the letter
function openNewWindow(letter) {
    const newWindow = window.open("", "_blank");
    newWindow.document.write("<h1>" + letter + "</h1>");
}

// Function to send data to PHP file
function sendDataToPHP(letter) {
    const xhttp = new XMLHttpRequest();
    const url = "process.php?letter=" + encodeURIComponent(letter);
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log("Data sent successfully");
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

// Event listener for button clicks
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            const buttonText = buttons[i].innerText;
            const firstLetter = buttonText.charAt(0);
            showPopup(firstLetter);
            openNewWindow(firstLetter);
            sendDataToPHP(firstLetter);
        });
    }
});
