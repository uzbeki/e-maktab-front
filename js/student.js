const trigger = (check) => {
    const a = document.querySelector("#menu");
    const menu = document.querySelector("#menu-inside");

    a.addEventListener('change', () => {
        if (check.checked) {
            menu.classList.add('show')
        } else {
            menu.classList.remove('show')
        }
        // menu.classList.toggle('show')
    })

}
