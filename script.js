const header = document.querySelector('#header');
const homePage = document.querySelector('.main-page');
const homePageContent = document.querySelector('.main-page .container .content');
const homePagePicture = document.querySelector('.main-page .container .picture');
const pricePageTitle = document.querySelector('.price-page .container > .title');
const cardPanelOne = document.querySelector('.price-page .container .cards .card-panel.one');
const cardPanelTwo = document.querySelector('.price-page .container .cards .card-panel.two');
const companiesOne_comp = document.querySelector('.companies-one .container .companies');
const companiesOne = document.querySelector('.companies-one');
const infoPageHeader = document.querySelector('.info-page .container > .header');
const infoPageContent = document.querySelector('.info-page .container .content');
const trustedTitle = document.querySelector('.trusted-companies .title');
const trustedLogos = document.querySelector('.trusted-companies .logos');
const footer = document.querySelector('footer');
const footerContent = document.querySelector('footer .container');
const footerPicture = document.querySelector('footer .picture');

window.onload = () => {
    checkScroll();
}

let companiesStyleArr = ["left: -140px;", "left: -50px;", "left: 70px;", "left: 190px;", "left: 330px;", "left: 500px;", "right: 400px; z-index: -1;", "right: 255px; z-index: -2;", "right: 130px; z-index: -3;", "right: 10px; z-index: -4;", "right: -90px; z-index: -5;"];
function checkScroll() {
    if (window.scrollY <= (header.offsetTop + header.offsetHeight) - 30) {
        header.style = 'opacity: 1; transform: none;';
        homePageContent.style = 'opacity: 1; transform: none;';
        homePagePicture.style = 'opacity: 1; transform: none;';
    }
    if (window.scrollY <= (homePage.offsetTop + homePage.offsetHeight - 100)) {
        homePageContent.style = 'opacity: 1; transform: none;';
        homePagePicture.style = 'opacity: 1; transform: none;';
    }
    if ((window.scrollY + window.screen.height) >= (pricePageTitle.offsetTop + 200) &&
        window.scrollY <= (pricePageTitle.offsetTop)) {
        pricePageTitle.style.opacity = '1';
    }
    if ((window.scrollY + window.screen.height) >= (cardPanelOne.offsetTop + 300) &&
        window.scrollY <= (cardPanelOne.offsetTop + cardPanelOne.offsetHeight - 100)) {
        cardPanelOne.style = 'opacity: 1; transform: none;';
    }
    if ((window.scrollY + window.screen.height) >= (cardPanelTwo.offsetTop + 300) &&
        window.scrollY <= (cardPanelTwo.offsetTop + cardPanelTwo.offsetHeight - 100)) {
        cardPanelTwo.style = 'opacity: 1; transform: none;';
    }
    if ((window.scrollY + window.screen.height) >= (companiesOne_comp.offsetTop + 300) &&
        window.scrollY <= (companiesOne_comp.offsetTop + companiesOne_comp.offsetHeight - 200) &&
        window.screen.width > 1300 && window.screen.width >= 1342) {

        for (let i = 0; i < companiesOne_comp.children.length; i++) {
            companiesOne_comp.children[i].style = companiesStyleArr[i];
        }
    } else if ((window.scrollY + window.screen.height) >= (companiesOne.offsetTop + 300) &&
    window.scrollY <= (companiesOne.offsetTop + companiesOne.offsetHeight - 200) &&
    window.screen.width < 1300) {
        companiesOne.style.opacity = '1';
    }
    if ((window.scrollY + window.screen.height) >= (infoPageHeader.offsetTop + 200) &&
        window.scrollY <= (infoPageHeader.offsetTop + infoPageHeader.offsetHeight - 100)) {
            infoPageHeader.style = 'opacity: 1; transform: none;';
    }
    if ((window.scrollY + window.screen.height) >= (infoPageContent.offsetTop + 200) &&
        window.scrollY <= (infoPageContent.offsetTop + infoPageContent.offsetHeight - 100)) {
            infoPageContent.style = 'transform: none;';
    }
    if ((window.scrollY + window.screen.height) >= (trustedTitle.offsetTop + 300) &&
        window.scrollY <= (trustedTitle.offsetTop + trustedTitle.offsetHeight - 50)) {
            trustedTitle.style = 'opacity: 1;';
    }
    if ((window.scrollY + window.screen.height) >= (trustedLogos.offsetTop + 300) &&
        window.scrollY <= (trustedLogos.offsetTop + trustedLogos.offsetHeight - 50)) {
            trustedLogos.style = 'opacity: 1;';
    }
    if ((window.scrollY + window.screen.height) >= (footer.offsetTop + 400) &&
        window.scrollY <= (footer.offsetTop + footer.offsetHeight)) {
            footerContent.style = 'opacity: 1;';
    }
    if ((window.scrollY + window.screen.height) >= (footer.offsetTop + 400) &&
        window.scrollY <= (footer.offsetTop + footer.offsetHeight)) {
            footerPicture.style = 'right: -200px;';
    }
}




window.addEventListener('scroll', () => {
    checkScroll();
});