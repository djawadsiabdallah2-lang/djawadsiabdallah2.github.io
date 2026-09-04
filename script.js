// ========================================
// 🌙☀️ نظام الوضع الليلي / الفاتح
// ========================================

const themeButton = document.getElementById("theme-button");

const savedTheme = localStorage.getItem("theme");


// تطبيق الوضع المحفوظ
if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    if (themeButton) {
        themeButton.textContent = "🌙";
    }

} else {

    if (themeButton) {
        themeButton.textContent = "☀️";
    }

}


// تغيير الوضع عند الضغط
if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");


        if (document.body.classList.contains("light-mode")) {

            themeButton.textContent = "🌙";

            localStorage.setItem("theme", "light");

        } else {

            themeButton.textContent = "☀️";

            localStorage.setItem("theme", "dark");

        }

    });

}

