window.onload = function () {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    var positionSpan = document.querySelector("h1 span");
    var currentPosition = parseInt(positionSpan.textContent, 10);
    positionSpan.textContent = (currentPosition + 4).toString();
}