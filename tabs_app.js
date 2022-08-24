// .content.active
// .tab-btn.active

const btnContainer = document.querySelector(".btn-container");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

btnContainer.addEventListener("click", function (e) {
    btns.forEach((btn) => {
        btn.classList.remove("active");

    articles.forEach((article) => {
        article.classList.remove("active");

    const dataId = e.target.dataset.id;
    const id = article.id
    const element = document.getElementById(id);

    if (dataId === id) {
        e.target.classList.add("active");
        element.classList.add("active");
    }
})
})
});