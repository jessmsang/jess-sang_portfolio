const aboutMeNavBtn = document.querySelector("#about-me-btn");
const langsAndToolsNavBtn = document.querySelector("#langs-and-tools-btn");
const projectsNavBtn = document.querySelector("#projects-btn");
const closeModalBtns = document.querySelectorAll(".modal__close-btn");

const aboutMeModal = document.querySelector("#about-me-modal");
const langsAndToolsModal = document.querySelector("#langs-and-tools-modal");
const modals = document.querySelectorAll(".modal");

function openModal(modal) {
  modal.classList.add("modal_open");
  document.addEventListener("keyup", closeModalEsc);
}

function closeModal(modal) {
  modal.classList.remove("modal_open");
  document.removeEventListener("keyup", closeModalEsc);
}

function closeModalEsc(evt) {
  modals.forEach((modal) => {
    if (modal.classList.contains("modal_open") && evt.key === "Escape") {
      closeModal(modal);
    }
  });
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

modals.forEach((modal) => {
  modal.addEventListener("click", function (evt) {
    if (
      modal.classList.contains("modal_open") &&
      evt.target.classList.contains("modal")
    ) {
      closeModal(modal);
    }
  });
});
