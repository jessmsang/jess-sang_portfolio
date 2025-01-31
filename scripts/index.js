const aboutMeNavBtn = document.querySelector("#about-me-btn");
const langsAndToolsNavBtn = document.querySelector("#langs-and-tools-btn");
const projectsNavBtn = document.querySelector("#projects-btn");
const closeModalBtns = document.querySelectorAll(".modal__close-btn");

const aboutMeModal = document.querySelector("#about-me-modal");

function openModal(modal) {
  modal.classList.add("modal_open");
}

function closeModal(modal) {
  modal.classList.remove("modal_open");
}

aboutMeNavBtn.addEventListener("click", () => {
  openModal(aboutMeModal);
});

closeModalBtns.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => {
    closeModal(modal);
  });
});
