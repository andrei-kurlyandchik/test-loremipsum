import $ from 'jquery';
import {TweenMax} from "gsap/all";
import AOS from "aos";

// Mobile menu
$(`.header__toggle-btn`).on(`click`, function () {
  // eslint-disable-next-line no-invalid-this
  $(this).toggleClass(`active`);
  $(`html`).toggleClass(`overflow-h`);
  $(`.menu__mobile`).toggleClass(`menu__mobile_open`);
  $(`.header`).toggleClass(`header_color_black`);
});
// End Mobile menu


// // Parallax
// const parallax = document.getElementById(`parallax`);
//
// window.addEventListener(`scroll`, function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.7 + `px`;
// });
// // End Parallax


// Text animation
const text1 = document.getElementById(`animation-text-1`);
const text2 = document.getElementById(`animation-text-2`);

const splitText = (el) => {
  el.innerHTML = el.textContent.replace(/(\S*)/g, (m) => {
    return `<div class="word">` +
      m.replace(/(-|#|@)?\S(-|#|@)?/g, `<div class='letter'>$&</div>`) +
      `</div>`;
  });
  return el;
};

const split1 = splitText(text1);
const split2 = splitText(text2);

function random(min, max) {
  return (Math.random() * (max - min)) + min;
}
// End Text animation

// Range
let slider = document.getElementById(`form-range__range`);
let output = document.getElementById(`form-range__value`);

output.innerHTML = slider.value;

// This function input current value in span and add progress colour in range
slider.oninput = function () {

  output.innerHTML = this.value;
};
// End Range

// Add File
let inputs = document.querySelectorAll(`.form-file__input`);
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling;
  let labelVal = label.querySelector(`.form-file__button-text`).innerText;

  input.addEventListener(`change`, function () {
    let countFiles = ``;
    // eslint-disable-next-line no-invalid-this
    if (this.files && this.files.length >= 1) {
      // eslint-disable-next-line no-invalid-this
      countFiles = this.files.length;
    }

    if (countFiles) {
      label.querySelector(`.form-file__button-text`).innerText = `Выбрано файлов: ` + countFiles;
    } else {
      label.querySelector(`.form-file__button-text`).innerText = labelVal;
    }
  });
});
// End Add File

// Select
$(`.default_option`).click(function () {
  // eslint-disable-next-line no-invalid-this
  $(this).parent().toggleClass(`active`);
});

$(`.select_ul li`).click(function () {
  // eslint-disable-next-line no-invalid-this
  let currentele = $(this).html();
  $(`.default_option li`).html(currentele);
  // eslint-disable-next-line no-invalid-this
  $(this).parents(`.select-wrapper`).removeClass(`active`);
});
// End Select

// device check
const devices = new RegExp(`Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini`, `i`);
const expression = /(iPhone|iPod|iPad)/i;

if (devices.test(navigator.userAgent)) {
  $(`.desktop-device`).hide();
  $(`.mobile-device`).show();
  // eslint-disable-next-line no-console
  console.log(`Мобиле`);
} else if (expression.test(navigator.platform)) {
  $(`.desktop-device`).hide();
  $(`.mobile-device`).show();
  // eslint-disable-next-line no-console
  console.log(`мобиле`);
} else {
  $(`.desktop-device`).show();
  $(`.mobile-device`).hide();
  // eslint-disable-next-line no-console
  console.log(`Декстоп`);
}
//

// Preloader
window.onload = function () {
  let preloader = document.getElementById(`preloader`);
  preloader.classList.add(`hide-preloader`);
  setInterval(function () {
    preloader.classList.add(`preloader-hidden`);
  }, 200);

  // Text animation init
  Array.from(split1.querySelectorAll(`.letter`)).forEach((el, idx) => {
    TweenMax.from(el, 2.0, {
      opacity: 0,
      scale: 0.1,
      x: random(-300, 300),
      y: random(-300, 300),
      z: random(-300, 300),
      delay: idx * 0.01,
      repeat: 0,
    });
  });

  Array.from(split2.querySelectorAll(`.letter`)).forEach((el, idx) => {
    TweenMax.from(el, 1.5, {
      opacity: 0,
      scale: 0.1,
      x: random(-500, 500),
      y: random(-500, 500),
      z: random(-500, 500),
      delay: idx * 0.1,
      repeat: 0,
    });
  });
  // End Text animation init

  // AOS
  // eslint-disable-next-line no-undef
  AOS.init();
  //  End AOS
};
