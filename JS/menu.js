const btn_menu = document.querySelector(".btn-menu"),
      menu_options = document.querySelector(".menu-options");

btn_menu.onclick = () => {
    menu_options.classList.toggle("active");
}

