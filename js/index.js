// Tooltips bootstrap
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
// Tooltips bootstrap

// Contact

const $form = document.querySelector("#form");
const $modal = document.querySelector(".modal");
const $add = document.querySelector("#add");
const $X = document.querySelector("#X");
const $close = document.querySelector("#close");

$form.addEventListener("submit", subir);
$X.addEventListener("click", () => ($modal.style.display = "none"));
$close.addEventListener("click", () => ($modal.style.display = "none"));
async function subir(event) {
  event.preventDefault();
  const $user = document.querySelector("#user-name").value;
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    mode: "no-cors",
    header: {
      Accept: "application/json",
    },
  });
  if (response.status === 0) {
    $add.innerHTML = `${$user} su menaje se envío correctamente en la brevedad me pondré en contacto con usted`;
    $modal.style.display = "block";
    $form.reset();
  }
}

// Contact

//Arrow Up
const $arrowUp = document.querySelector("#up");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 98) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
});

$arrowUp.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
//Arrow Up
