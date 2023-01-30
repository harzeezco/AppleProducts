const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".pages > div");
const pageNav = document.querySelector(".page-nav");

navLinks.forEach((navlink, i) => {
  navlink.addEventListener("click", () => {
    navLinks.forEach((el, j) => {
      el.lastElementChild.className = "bx bxs-folder";
      pages[j].classList.remove("change");
    });

    navlink.lastElementChild.className = "bx bxs-folder-open";
    pages[i].classList.add("change");

    pages[0].classList.contains("change")
      ? pageNav.classList.add("change")
      : pageNav.classList.remove("change");

    screen.width <= 700 && menu.click();
  });
});

pageNav.addEventListener("click", () => {
  navLinks[0].click();
  screen.width <= 700 && menu.click();
});

const zoom = document.querySelector(".zoom");
const frame = document.querySelector(".frame");
let clickBool = true;

zoom.addEventListener("click", () => {
  if (clickBool) {
    zoom.firstChild.className = "bx bxs-zoom-out";
    frame.classList.add("change");
  } else {
    zoom.firstChild.className = "bx bxs-zoom-in";
    frame.classList.remove("change");
  }
  clickBool = !clickBool;
});

const homeImages = document.querySelectorAll(".home img");

homeImages.forEach((homeImage, i) => {
  homeImage.addEventListener("click", () => {
    navLinks[i + 1].click();
    screen.width <= 700 && menu.click();
  });
});

const macBookBtns = document.querySelectorAll(".macbook-btns a");
const macBookcards = document.querySelectorAll(".macbook-card");

macBookBtns.forEach((macbookBtn, i) => {
  macbookBtn.addEventListener("click", () => {
    macBookcards.forEach((macBookcard, j) => {
      macBookcard.classList.remove("active");
      macBookBtns[j].classList.remove("active");
    });

    macBookcards[i].classList.add("active");
    macbookBtn.classList.add("active");
  });
});

const card1Controls = document.querySelectorAll(".m1-controls a");
const card2Controls = document.querySelectorAll(".m2-controls a");
const card1Imgs = document.querySelectorAll(".m1-imgs img");
const card2Imgs = document.querySelectorAll(".m2-imgs img");
const m1MacBookColor = document.querySelector(".m1-macbook-color");
const m2MacBookColor = document.querySelector(".m2-macbook-color");

const macBookCard = (cardControls, cardImgs, macbookColor) => {
  cardControls.forEach((control, i) => {
    control.addEventListener("click", () => {
      cardImgs.forEach((img, j) => {
        cardControls[j].classList.remove("active");
        img.classList.remove("active");
      });

      control.classList.add("active");
      cardImgs[i].classList.add("active");
      macbookColor.textContent = control.getAttribute("data-color");
    });
  });
};

macBookCard(card1Controls, card1Imgs, m1MacBookColor);
macBookCard(card2Controls, card2Imgs, m2MacBookColor);

const imacImgControls = document.querySelectorAll(".imac-image-controls a");
const imacImgs = document.querySelectorAll(".imac-img img");

imacImgControls.forEach((control) => {
  control.addEventListener("click", () => {
    imacImgs.forEach((img) => {
      img.src = img
        .getAttribute("src")
        .replace(/\/[a-z]+[-]/, `/${control.getAttribute("data-color")}-`);
    });

    imacImgControls.forEach((item) => item.classList.remove("active"));
    control.classList.add("active");
  });
});

const menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
