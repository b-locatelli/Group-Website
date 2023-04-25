var welcomePage = document.querySelector("#welcome-page");
var nextPage = document.querySelector("#next-page");
var searchButton = document.querySelector("#search-btn");


searchButton.addEventListener("click", function() { 
    welcomePage.style.display = "none";
    nextPage.style.display = "block";
}); 