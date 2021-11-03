const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = modal.querySelector(closeSelector);

    trigger.forEach((item) => {
      item.addEventListener('click', (evt) => {
        if (evt.target) {
          evt.preventDefault();
        }
        modal.style.display = 'block';
        // document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      // document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (evt) => {
      if (evt.target === modal) {
        modal.style.display = 'none';
        // document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
      }
    });
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
  bindModal('.phone_link', '.popup', '.popup_close');
};

export default modals;