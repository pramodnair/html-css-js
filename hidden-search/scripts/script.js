const icon = document.getElementById("search-icon");
const searchBox = document.querySelector(".search-box");

icon.addEventListener("click", () => {
    if(searchBox.classList.contains("hide-search")) {
        searchBox.classList.remove("hide-search");
    }
    else {
        searchBox.classList.add("hide-search");
    }
})