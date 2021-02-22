/* Основные переменные для работы с кнопками и модалками */
var buttonLogin = document.getElementById('user-login'); /* кнопка вызова модального окна авторизации*/
var modalLogin = document.getElementById('modal-login'); /* Объявляем переменную и присваиваем ей значение -выбираем элемент в документе - модальное окно с формой */
var closeBtn = document.getElementById('close-modal-login'); /* Объявляем переменную и присваиваем ей значение - выбираем кнопку закрытия окна в разметке */

/* Улучшаем нашу форму */
var loginInput = modalLogin.querySelector('[name=login]'); /* Объявление переменной. присваивание значения - поле ввода имени в модальном окне */
var passwordInput = modalLogin.querySelector('[name=password]'); /* Объявление переменной. присваивание значения - поле ввода электропочты в модальном окне */
var loginForm = modalLogin.querySelector('form'); /* Объявление переменной. присваивание значения - форма в модальном окне */
var storage = localStorage.getItem('loginInput');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('loginInput');
} catch (err) {
  isStorageSupport = false;
}

/* Обработчик на открытие модального окна с контактной формой */
buttonLogin.addEventListener('click', function (evt) {
  evt.preventDefault(); /* отменяем действие по умолчанию - 'переход по ссылке при клике' */
  modalLogin.classList.add('modal-show'); /* добавляем к модалке дополнительный класс, для того что бы форма отобразилась на странице */
  if (storage) {
    loginInput.value = storage;
    passwordInput.focus(); /* вызываем метод 'Фокус' в поле ввода имени? но только ЕСЛИ у нас подставилось имя пользователя из Локального хранилища (Local Storage) в поле ввода имени */
  } else {
    loginInput.focus(); /* вызываем метод 'Фокус' в поле ввода имени, если оно ранее не подставилось из локального хранилища */
  }

});

/* Обработчик на закрытие модального окна с формой */
closeBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove('modal-show');
  modalLogin.classList.remove('modal-error');
});

/* Обработчик отправки с условиями проверки */
loginForm.addEventListener('submit', function (evt) {
  if (!loginInput.value || !passwordInput.value) {
    evt.preventDefault();
    modalLogin.classList.remove('modal-error');
    modalLogin.offsetWidth = modalLogin.offsetWidth; /* Вставляем костыль, для реализации бесконечного повтора анимации при ошибке заполнения формы - перезаписываем ширину окна на то же самое значение */
    modalLogin.classList.add('modal-error');

  } else {
    if (isStorageSupport) {
      localStorage.setItem('loginInput', loginInput.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains('modal-show')) {
      evt.preventDefault();
      modalLogin.classList.remove('modal-show');
      modalLogin.classList.remove('modal-error');
    }
  }
});

/* Модалка с картой  */
var howToFind = document.getElementById('how-to-find');

var modalMap = document.getElementById('modal-map');
var closeMap = document.getElementById('close-modal-map');

howToFind.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});
if(document.getElementById('how-to-get')) {
  var howToGet = document.getElementById('how-to-get');
  howToGet.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalMap.classList.add('modal-show');
  });
}




closeMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains('modal-show')) {
      evt.preventDefault();
      modalMap.classList.remove('modal-show');
    }
  }
});
