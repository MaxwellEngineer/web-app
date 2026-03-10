const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeBtn.textContent = "Включить светлую тему";
    } else {
        themeBtn.textContent = "Включить темную тему";
    }
    
    console.log("Тема изменена!");
});
