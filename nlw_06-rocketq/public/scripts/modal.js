export default function Modal() {

  const modalWrapper = document.querySelector('.modal-wrapper')

  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open(){

    //funcionalidade que habilita a class active
    modalWrapper.classList.add('active');
  }
  function close(){

    //funcionalidade que retura a class active
    modalWrapper.classList.remove('active');

  }

  return {
    open,
    close
  }
}
