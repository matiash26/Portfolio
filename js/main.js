const projectElement = document.querySelector(".projectContainer");
const mobileMenu = document.querySelector(".mobileMenu");
const headerColor = document.querySelector("header");
const section = document.querySelectorAll(".hidden");
const menu = document.querySelector(".menuList");
const home = document.querySelector(".welcome");

function clickMenuMobile() {
  menu.classList.toggle("openMenuMobile");
  mobileMenu.children[1].classList.toggle("showExit");
}
function homeAction(entry) {
  if (entry[0].isIntersecting) {
    headerColor.classList.remove("navBlack");
  } else {
    headerColor.classList.add("navBlack");
  }
}
function sectionAction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}
const listProject = [
  {
    title: "Lang - Projeto Pessoal",
    image: "./assets/image/lang.ico",
    desc: "Projeto para evoluir e criar um ambiente divertido no seu aprendizado de idiomas, utilize filmes e séries favoritas para aprender.",
    tag: ["TypeScript", "Electron", "Reactjs"],
    repostory: "https://github.com/matiash26/Lang",
    site: "https://github.com/matiash26/Lang/releases/tag/1.0.0",
  },
  {
    title: "Community - Free Lance",
    image: "./assets/image/community.png",
    desc: "Projeto estilo a comunidade do twitter na qual será realizado postagem e usuários com permissão poderão validar se irá publicar ou não.",
    tag: ["TypeScript", "Nextjs 13", "NextAuth", "Mysql", "Nodejs"],
    repostory: "https://github.com/matiash26/Community",
    site: "",
  },
  {
    title: "Dashboard - Free Lance",
    image: "./assets/image/dashboard.jpg",
    desc: "Projeto real para gerenciar as entradas e saidas dos produtos e ter melhoria nas vendas baseada no gráfico.",
    tag: ["React JS", "Node JS express", "MySQL"],
    repostory:
      "https://github.com/matiash26/Projeto-de-estoque-para-gerenciar-entradas-e-saidas",
    site: "",
  },
];
const interHome = new IntersectionObserver(homeAction);
interHome.observe(home);

const interSection = new IntersectionObserver(sectionAction);
section.forEach((el) => interSection.observe(el));
console.log(listProject.map((project) => project.repostory));
const projectCard = listProject
  .map((project) => {
    return `
    <li class="ProjectContent">
    <h2>${project.title}</h2>
    <img src="${project.image}" alt="Projeto Dashboard">
    <div class="descContainer">
        <div class="descProject">
            <h3>Descrição</h3>
            <p>${project.desc}</p>
        </div>
        <div class="tagsProject">
            ${project.tag.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="buttonsProject">
            <a class="btnProject" href="${
              project.repostory
            }" target="_blank">Repositório</a>
           ${
             project.site &&
             `<a class="btnProject" href='${project.site}' target="_blank">Acessar</a>`
           }
        </div>
    </div>
</li>`;
  })
  .join("");

projectElement.innerHTML = projectCard;
mobileMenu.children[0].addEventListener("click", clickMenuMobile);
mobileMenu.children[1].addEventListener("click", clickMenuMobile);
