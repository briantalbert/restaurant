import createNavLinks from "./navigation";

export default function buildContactPage() {
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
    function createContactInfo() {
        let contact = document.createElement('div');
        contact.classList.add('contact')

        let address = document.createElement('div');
        address.classList.add('address');
        
        let phone = document.createElement('div');
        phone.classList.add('phone');

        let email = document.createElement('div');
        email.classList.add('email');

        let addressText = document.createElement('p');
        addressText.textContent = "193 St. Michael Way";
        let cityStateText = document.createElement('p');
        cityStateText.textContent = "Newport News, VA 23602";
        

        let phoneText = document.createElement('p');
        phoneText.textContent = "434.555.5944";

        let emailText = document.createElement('p');
        emailText.textContent = "BrianLTalbert@gmail.com";

        let addressLabel = document.createElement('p');
        addressLabel.classList.add('addresslabel');
        addressLabel.textContent = "Address:"

        let phoneLabel = document.createElement('p');
        phoneLabel.classList.add('phonelabel');
        phoneLabel.textContent = "Phone Number:"

        let emailLabel = document.createElement('p');
        emailLabel.classList.add('emaillabel');
        emailLabel.textContent = "E-mail Address:"

        address.appendChild(addressText);
        address.appendChild(cityStateText);
        phone.appendChild(phoneText);
        email.appendChild(emailText);

        contact.appendChild(address);
        contact.appendChild(phone);
        contact.appendChild(email);
        contact.appendChild(addressLabel);
        contact.appendChild(phoneLabel);
        contact.appendChild(emailLabel);

        return contact;
    }

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createFooter());
    contentDiv.appendChild(createContactInfo());
    createNavLinks();
}