function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}
function modal({ triggerSelector, modalSelector }) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);
  modalTrigger.forEach((item) => {
    item.addEventListener("click", () => {
      openModal(modalSelector);
    });
  });
  modal.addEventListener("click", (e) => {
    if (
      (e.target && e.target.classList.contains("modal")) ||
      e.target.getAttribute("data-close") == ""
    ) {
      closeModal(modalSelector);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });
  function showByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector);
    } else {
      window.removeEventListener("scroll", showByScroll);
    }
  }
  window.addEventListener("scroll", showByScroll);
}
export default modal;
export {openModal, closeModal}