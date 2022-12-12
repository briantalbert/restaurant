import createNavLinks from "./navigation";

export default function buildHomePage() {
    //clear main content
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

    function createMain() {
        let main = document.createElement('div');
        main.classList.add('main');
        main.textContent = 'MAIN CONTENT';
        
        return main;
    }

    function createSidebar() {
        let sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
        sidebar.textContent = 'SIDEBAR CONTENT';

        return sidebar;
    }

    function createFooter() {
        let footer = document.createElement('div');
        footer.classList.add('footer');
        footer.textContent = 'FOOTER CONTENT';

        return footer;
    }

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMain());
    contentDiv.appendChild(createSidebar())
    contentDiv.appendChild(createFooter());
    createNavLinks();
}

