const aboutMeNavBtn = document.querySelector("#about-me-btn");
const langsAndToolsNavBtn = document.querySelector("#langs-and-tools-btn");
const projectsNavBtn = document.querySelector("#projects-btn");
const closeModalBtns = document.querySelectorAll(".modal__close-btn");

const aboutMeModal = document.querySelector("#about-me-modal");
const langsAndToolsModal = document.querySelector("#langs-and-tools-modal");

function openModal(modal) {
  modal.classList.add("modal_open");
}

function closeModal(modal) {
  modal.classList.remove("modal_open");
}

aboutMeNavBtn.addEventListener("click", () => {
  openModal(aboutMeModal);
});
langsAndToolsNavBtn.addEventListener("click", () => {
  openModal(langsAndToolsModal);
});

closeModalBtns.forEach((btn) => {
  const modal = btn.closest(".modal");
  btn.addEventListener("click", () => {
    closeModal(modal);
  });
});
