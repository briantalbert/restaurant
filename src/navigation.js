import buildHomePage from "./home";
import buildMenuPage from "./menu";

export default function createNavLinks() {
    let links = document.querySelectorAll('li');
    links.forEach(link => {
        link.addEventListener('click', () => {
            switch (link.getAttribute('id')) {
                case 'home':
                    buildHomePage();
                    break;

                case 'menu':
                    buildMenuPage();
                    break;

                case 'contact':
                    buildContactPage();
                    break;

                default:
                    break;
            }
        })
    });
}