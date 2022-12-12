import createNavLinks from "./navigation";
import getMenuItems from "./menuitems";

export default function buildMenuPage() {
    let contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = "";

    function createHeader() {
        //name of restaurant
        let header = document.createElement('div');
        header.classList.add('header');
        header.textContent = "kevin's taco hut";

        //navigation links
        let navList = document.createElement('ul');
        navList.classList.add('navlist');
        let navLinks = ['home', 'menu', 'contact'];
        for (let i = 0; i < navLinks.length; i++) {
            let link = document.createElement('a');
            let nav = document.createElement('li');
            nav.textContent = navLinks[i];
            nav.setAttribute('id', navLinks[i]);
            link.appendChild(nav);
            navList.appendChild(link);
        }

        header.appendChild(navList);
        return header;
    }
    
    function createFooter() {
        let footer = document.createElement('div');
        footer.classList.add('footer');
        footer.textContent = 'FOOTER CONTENT';

        return footer;
    }

    function createMenu() {
        let menu = document.createElement('div');
        menu.classList.add('menu')
        
        let menuitems = getMenuItems();
        menuitems.forEach(item => {
            let menuItemCard = document.createElement('div');
            menuItemCard.classList.add('menuitemcard');
            menuItemCard.textContent = item;
            menu.appendChild(menuItemCard);
        });

        return menu
    }

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createFooter());
    contentDiv.appendChild(createMenu());
    createNavLinks();
}