let dropdown_menu = document.getElementById('header__cabinet_dropdown-menu'),
    dropdown_menuToggle1 = document.getElementById('cabinet__text'),
    dropdown_menuToggle2 = document.getElementById('cabinet__link'),
    dropdown_menu_counter1 = 2,
    dropdown_menu_counter2 = 2,

    money_prompt = document.getElementById('profile__left_remove-money-prompt'),
    remove_prompt = document.getElementById('profile__left__remove_prompt'),
    money_promt_counter = 2;


    // функции идут ниже



    dropdown_menuToggle1.onclick = function() {
        if(dropdown_menu_counter1 % 2 == 0) {
            dropdown_menu.style.display = "block"
            dropdown_menu_counter1++
        }
        else {
            dropdown_menu.style.display = "none"
            dropdown_menu_counter1++
        }
    }

    dropdown_menuToggle2.onclick = function() {
        if(dropdown_menu_counter2 % 2 == 0) {
            dropdown_menu.style.display = "block"
            dropdown_menu_counter2++
        }
        else {
            dropdown_menu.style.display = "none"
            dropdown_menu_counter2++
        }
    }





    money_prompt.addEventListener('click', ()=> {
        if(money_promt_counter % 2 == 0) {
            remove_prompt.style.opacity = "1"
            remove_prompt.style.visibility = "visible"
            money_promt_counter++
        }
        else {
            remove_prompt.style.opacity = "0"
            remove_prompt.style.visibility = "hidden"
            money_promt_counter++
        }
    })