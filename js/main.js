/* интерактивные элементы на страницах сайта */
let loginLink = document.getElementById('user-login');
let howToGet = document.getElementById('how-to-get');
let howToFind = document.getElementById('how-to-find');

/* модальние окна/диалоговые окна */
let modalLogin = document.getElementById('modal-login');
let modalMap = document.getElementById('modal-map');
/* кнопки закрывающие модальне окна */
let closeModalMap = document.getElementById('close-modal-map');
let closeModalLogin = document.getElementById('close-modal-login');
/* модалка входа/авторизации */
let form = modalLogin.querySelector('form');
/* поля ввода внутри формы логина */
let loginArea = modalLogin.querySelector('[name=login]');
let passwordArea = modalLogin.querySelector('[name=password]');
/* картинка из Mortal Combat */
let toasty = document.getElementById('toasty');

/* показать или скрыть модальное окно логина */
loginLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalLogin.classList.add('modal-show');

  loginArea.focus();
});
/* закрыть модальное окно логина */
closeModalLogin.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove('modal-show');
  modalLogin.classList.remove('modal-error');
  toasty.classList.remove('modal-show');
});
/* проверка полей формы на ввод данных */
form.addEventListener('submit', function (evt) {
  if (!loginArea.value || !passwordArea.value) {
    evt.preventDefault();

    modalLogin.classList.remove('modal-error');
    modalLogin.offsetWidth = modalLogin.offsetWidth; /* Вставляем костыль, для реализации бесконечного повтора анимации при ошибке заполнения формы - перезаписываем ширину окна на то же самое значение */
    modalLogin.classList.add('modal-error');

    toasty.classList.add('modal-show');
  }

});
