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
        title: "Dashboard - Free Lance",
        image: "./assets/image/dashboard.jpg",
        desc: "Projeto real para gerenciar as entradas e saidas dos produtos e ter melhoria nas vendas baseada no gráfico.",
        tag: ["React JS", "Node JS express", "MySQL"],
        repostory: "https://github.com/matiash26/Projeto-de-estoque-para-gerenciar-entradas-e-saidas",
        site: ""
    },
    {
        title: "CineMovies",
        image: "./assets/image/site.png",
        desc: "Projeto de site de filmes, na qual você precisa logar e fazer uma assinatura pra ter acesso (página toda fake) apenas para treinar.",
        tag: ["Nextjs 13", "TypeScript"],
        repostory: "https://github.com/matiash26/cinemovies",
        site: "https://cinemovies-matiash26.vercel.app/login"
    },
    {
        title: "Mercado não libre",
        image: "./assets/image/mercadonaolivre.jpg",
        desc: "repliquei a tela do mercado livre para testar meu conhecimento em Front-End",
        tag: ["React JS"],
        repostory: "https://github.com/matiash26/Mercado-nao-livre",
        site: "https://mercado-nao-livre.vercel.app/",
    },

]
const interHome = new IntersectionObserver(homeAction)
interHome.observe(home)

const interSection = new IntersectionObserver(sectionAction)
section.forEach(el => interSection.observe(el))
console.log(listProject.map(project => project.repostory))
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
           ${project.site && `<a class="btnProject" href='${project.site}' target="_blank">Acessar</a>`}
        </div>
    </div>
</li>`)
}).join("")

projectElement.innerHTML = projectCard
mobileMenu.children[0].addEventListener("click", clickMenuMobile)
mobileMenu.children[1].addEventListener("click", clickMenuMobile)
