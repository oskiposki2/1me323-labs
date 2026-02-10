const container = document.querySelector("main");

// const h1 = document.createElement("h1");
// h1.textContent = "Min första createElement";

// const paragraph = document.createElement("p");
// paragraph.classList.add("description");
// paragraph.textContent = "Hej på dig!"

// const btn = document.createElement("button");
// btn.textContent = "Klicka mig!";

// console.log(h1, paragraph, btn)

// container.append(h1)
// container.after(btn)
// container.after(paragraph)

// btn.addEventListener("click", () => {
//     const p = document.createElement("p");
//     p.textContent = "Hej igen!";
//     container.prepend(p)
// })

function createCard(title, description) {
    const article = document.createElement("article");
    article.classList.add("card");

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = description;

    article.append(h3, p);
    return article;
}

const renderCard = createCard("Hej!", "Hur är läget?");
container.append(renderCard)

function createCardinnerHTML(title, description) {
    const article = document.createElement('article');
    article.classList.add('card');

    article.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
  `;
    return article;
}

// const renderCardInnerHTML = createCardinnerHTML("InnerHTML test", "Detta funkade också bra!");
// container.after(renderCardInnerHTML)






const users = [
    { name: 'Anna', role: 'Admin' },
    { name: 'Erik', role: 'User' },
    { name: 'Maria', role: 'User' }
];

function renderUsers(users) {
    const container = document.querySelector('#user-list');

    // Rensa befintligt innehåll
    container.innerHTML = '';

    for (const user of users) {
        const button = document.createElement("button");
        button.textContent = "Ta bort!"
        button.addEventListener("click", () => {
            div.remove()
        })

        const div = document.createElement('div');
        div.classList.add('user-card');

        const name = document.createElement('h3');
        name.textContent = user.name;

        const role = document.createElement('span');
        role.textContent = user.role;
        role.classList.add('role', user.role.toLowerCase());

        div.append(name, role, button);
        container.append(div);
    }
}

renderUsers(users);

function renderToDoList() {
    const ul = document.createElement("ul");

    
}