import {openModal, closeModal} from './modal'
import {postData} from '../server/server'
function form(formSelector) {
  // Form
  const form = document.querySelector(formSelector);
  bindPostData(form)
  const msg = {
    loading: "/imgs/double_balls.svg",
    success: "Thank's for submitting our form",
    failure: "Something went wrong",
  };

  
  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Message creating
      const statusMessage = document.createElement("img");
      statusMessage.src = msg.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      postData("http://localhost:3000/request", json)
        .then((data) => {
          console.log(data.name);
          console.log(data.phone);
          console.log(data);
          showThanksModel(msg.success);

          statusMessage.remove();
        })
        .catch(() => {
          showThanksModel(msg.failure);
        })
        .finally(() => form.reset());
    });
  }
  function showThanksModel(message) {
    const prevModalDialog = document.querySelector(".modal_content");
    prevModalDialog.classList.add("hide");
    openModal('.modal');
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal_content");
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div data-close class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal('.modal');
    }, 4000);
  }
}
export default form