var search = document.querySelector(".button");    
var popup = document.querySelector(".search-form");

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-close");
});    
