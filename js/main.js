import { Projects } from "./projects.js";

const projectElement = document.querySelector(".projectContainer");
const mobileMenu = document.querySelector(".mobileMenu");
const headerColor = document.querySelector("header");
const section = document.querySelectorAll(".hidden");
const menu = document.querySelector(".menuList");
const home = document.querySelector(".welcome");
const listProject = Projects();
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
