//show menu function
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

//removing menu option
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

//modal image
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("click", function (e) {
    let ImgSrc = e.target.src;
    modal.style.display = "block";
    modalImg.src = ImgSrc;
  });
});

modal.addEventListener("click", (e) => {
  modal.style.display = "none";
});
