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
        
        return main;
    }

    function createSidebar() {
        let sideText = `Welcome to Kevin's Taco Hut! Kevin has been making tacos since 1986, and his taco hut has been a fixture
                        on these city streets for over 30 years. With homemade tortillas, deliciousy tender meat, and fresh
                        toppings, once you have a fresh Kevin taco, you won't go anywhere else!`
        let sidebar = document.createElement('div');
        let sideBarTextContainer = document.createElement('div');
        sideBarTextContainer.textContent = sideText;
        sidebar.classList.add('sidebar');
        sidebar.appendChild(sideBarTextContainer);

        return sidebar;
    }

    function createFooter() {
        let footerText = `Page made by Brian Talbert. Unfortunately, Kevin's Taco Hut does not exist. Yet.`
        let footer = document.createElement('div');
        let footerTextContainer = document.createElement('div');
        footerTextContainer.textContent = footerText;
        footer.classList.add('footer');
        footer.appendChild(footerTextContainer);

        return footer;
    }

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMain());
    contentDiv.appendChild(createSidebar())
    contentDiv.appendChild(createFooter());
    createNavLinks();
}

