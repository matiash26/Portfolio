import { projects } from "./projects.js";
import { lang } from "./lang.js";

const projectElement = document.querySelector(".projectContainer");
const mobileMenu = document.querySelector(".mobileMenu");
const headerColor = document.querySelector("header");
const section = document.querySelectorAll(".hidden");
const menu = document.querySelector(".menuList");
const home = document.querySelector(".welcome");
const menuBtn = document.querySelectorAll(".menuList > li");
const langEl = document.querySelector("#lang");
const langBG = document.querySelector(".langContainer > label");

function clickMenuMobile() {
  menu.classList.toggle("openMenuMobile");
  mobileMenu.children[1].classList.toggle("showExit");
}
function homeAction(entry) {
  if (entry[0].isIntersecting) {
    headerColor.classList.remove("navBlack");
    mobileMenu.classList.remove("navBlack");
    langBG.classList.remove("navBlack");
    return;
  }
  mobileMenu.classList.add("navBlack");
  headerColor.classList.add("navBlack");
  langBG.classList.add("navBlack");
}
function sectionAction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      return;
    }
    entry.target.classList.remove("show");
  });
}
function langChange(event) {
  const getLanguage = event.target.checked ? "en" : "pt";
  const translate = lang[getLanguage];
  const fileName =
    getLanguage === "pt"
      ? "Matheus henrique FrontEnd Jr (pt).pdf"
      : "Matheus henrique FrontEnd Jr (en).pdf";

  const headerMenu = document.querySelectorAll(".menuList > li > a");
  //header
  headerMenu[0].innerText = translate.menu.start;
  headerMenu[1].innerText = translate.menu.about;
  headerMenu[2].innerText = translate.menu.projects;
  headerMenu[3].innerText = translate.menu.contact;

  //about
  const welcomeDesc = document.querySelector(".desc  > p");
  const skillsTitle = document.querySelectorAll(".habilityContent > h1");
  const titleAbout = document.querySelector(".title");
  const descAbout = document.querySelectorAll(".descAbout > p");
  const welcome = document.querySelector(".desc > span");
  const fileDownload = document.querySelector("#donwload");

  fileDownload.href = "./assets/" + fileName;
  welcome.innerText = translate.welcome;
  welcomeDesc.innerText = translate.title;
  descAbout[0].innerText = translate.about.desc[0];
  descAbout[1].innerText = translate.about.desc[2];
  titleAbout.innerText = translate.about.title;

  skillsTitle[0].innerText = translate.frontTitle;
  skillsTitle[1].innerText = translate.backTitle;

  //Projects
  const titleProjects = document.querySelector("#projects .title");
  const descProjects = document.querySelector("#projects > p");
  titleProjects.innerText = translate.project.title;
  descProjects.innerText = translate.project.desc;

  //contacts
  const titleContact = document.querySelector("#contact .title");
  titleContact.innerText = translate.contact.title;
  const contactBtn = document.querySelectorAll(".socialMedia > a > span");
  contactBtn[1].innerHTML = translate.contact.email;
  contactBtn[7].innerHTML = translate.contact.phone;

  //re-render projects
  renderProject(getLanguage);
}
function renderProject(lang = "pt") {
  const projectCard = projects.map((project) => {
    return `
    <li class="ProjectContent">
    <h2>${project.title[lang]}</h2>
    <img src="${project.image}" alt="Projeto Dashboard">
    <div class="descContainer">
        <div class="descProject">
            <h3>${project.descTitle[lang]}</h3>
            <p>${project.desc[lang]}</p>
        </div>
        <div class="tagsProject">
            ${project.tag.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="buttonsProject">
            <a class="btnProject" href="${project.repostory}" target="_blank">${
      project.btn.repo[lang]
    }</a>
           ${
             project.site &&
             `<a class="btnProject" href='${project.site}' target="_blank">${project.btn.access[lang]}</a>`
           }
        </div>
    </div>
</li>`;
  });
  projectElement.innerHTML = projectCard.join("");
}
renderProject();
const interHome = new IntersectionObserver(homeAction);
interHome.observe(home);

const interSection = new IntersectionObserver(sectionAction);
section.forEach((el) => interSection.observe(el));

langEl.addEventListener("click", langChange);
menuBtn.forEach((btn) => btn.addEventListener("click", clickMenuMobile));
mobileMenu.children[0].addEventListener("click", clickMenuMobile);
mobileMenu.children[1].addEventListener("click", clickMenuMobile);
