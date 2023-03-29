const projectElement = document.querySelector(".projectContainer")
const mobileMenu = document.querySelector(".mobileMenu")
const headerColor = document.querySelector("header")
const section = document.querySelectorAll(".hidden")
const menu = document.querySelector(".menuList")
const home = document.querySelector(".welcome")


function clickMenuMobile() {
    menu.classList.toggle("openMenuMobile")
    mobileMenu.children[1].classList.toggle("showExit")
}
function homeAction(entry) {
    if (entry[0].isIntersecting) {
        headerColor.classList.remove("navBlack")
    } else {
        headerColor.classList.add("navBlack")
    }
}
function sectionAction(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
}
const listProject = [
    {
        title: "Dashboard",
        image: "./assets/image/dashboard.jpg",
        desc: "Projeto real para gerenciar as entradas e saidas dos produtos e ter melhoria nas vendas baseada no gráfico.",
        tag: ["React JS", "Node JS express", "MySQL"],
        repostory: "https://github.com/matiash26/Projeto-de-estoque-para-gerenciar-entradas-e-saidas",
        site: "https://localhost/"
    },
    {
        title: "Desafio-interface-Dio",
        image: "./assets/image/interface.jpg",
        desc: "Desafio da web.dio - para recriação da plataforma, fiz no formato Reactjs e na página atualizada em React JS.",
        tag: ["React JS"],
        repostory: "https://github.com/matiash26/Desafio-interface-Dio/",
        site: "https://desafio-interface-ew54f6pln-matiash26.vercel.app/"
    },
    {
        title: "Desafio-WikiHub",
        image: "./assets/image/wikihub.png",
        desc: "Desafio da web.dio - para consumir API do Github, fiz o projeto todo estilo (to do list) com save no localstorage e consumir API no front.",
        tag: ["React JS"],
        repostory: "https://github.com/matiash26/Desafio-WikiHub",
        site: "https://desafio-wiki-gdoz8d47f-matiash26.vercel.app/"
    }
]
const interHome = new IntersectionObserver(homeAction)
interHome.observe(home)

const interSection = new IntersectionObserver(sectionAction)
section.forEach(el => interSection.observe(el))

const projectCard = listProject.map(project => {
    return (`
    <li class="ProjectContent">
    <h2>${project.title}</h2>
    <img src="${project.image}" alt="Projeto Dashboard">
    <div class="descContainer">
        <div class="descProject">
            <h3>Descrição</h3>
            <p>${project.desc}</p>
        </div>
        <div class="tagsProject">
            ${project.tag.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <div class="buttonsProject">
            <a class="btnProject" href="${project.repostory}" target="_blank">Repositório</a>
            <a class="btnProject" href="${project.site}" target="_blank">Acessar</a>
        </div>
    </div>
</li>`)
}).join("")

projectElement.innerHTML = projectCard
mobileMenu.children[0].addEventListener("click", clickMenuMobile)
mobileMenu.children[1].addEventListener("click", clickMenuMobile)