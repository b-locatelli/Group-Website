var welcomePage = document.querySelector("#welcome-page");
var nextPage = document.querySelector("#next-page");
var searchButtonA = document.querySelector("#search-btn-init");
var searchAgain = document.querySelector("#search-again");

searchAgain.addEventListener("click", function () {
    welcomePage.style.display = "block";
    nextPage.style.display = "none";
});

// this one doesn't quite work - only flashes
searchButtonA.addEventListener("click", function() { 
    welcomePage.style.display = "none";
    nextPage.style.display = "block";
}); 