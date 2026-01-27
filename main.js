const badges = document.querySelectorAll(".badge");

badges.forEach(badge => {
    if (localStorage.getItem(badge.id) === "done") {
        badge.classList.add("done")
    }

    badge.addEventListener("click", function () {
        badge.classList.toggle("done")

        if (badge.classList.contains("done")) {
            localStorage.setItem(badge.id, "done")
        } else {
            localStorage.removeItem(badge.id)
        }
    })
})