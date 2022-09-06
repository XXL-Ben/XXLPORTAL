//Select id polgast from the html and create an event listenener click that opens link in new page

catalogName();



// List of variables holding link to catalog
const altoShaam = 'https://pdf.archiexpo.com/pdf/alto-shaam/product-catalog/10513-200737.html';
const animo = 'https://www.animofrance.com/_files/ugd/f9de02_50d10c659efa494eae119796c4d01702.pdf';
const bartscher = 'https://pdfhost.io/v/L1sjeoHWb_BartscherKatalog2022ENV03'
const benegas = 'https://www.benegas.com/en/catalogue';
const casselin = "http://catalogue.casselin.com/catalogue/2022/";
const combisteel = 'https://viewer.ipaper.io/combi-steel/cobisteel-catalog-februari-2021/combisteel_dealer_catalog_2021/?page=1'
const cuistance = 'https://cuistance-europe.com/skin/default/frontend/pdf/Catalogue_2021.pdf';
const diamond = 'https://www.diamond-eu.com/en/downloads/catalogue/1'
const emga = 'https://emga.turnpages.com/catalogus/en/index_html5.html?init=init_html5.xml&'
const saro = 'https://www.dropbox.com/sh/1lb3549kukl6xjp/AABrp_UA6A4ZQaCrPuePPOKWa/Catalogue%2036%20-%20English?dl=0&preview=Saro+Katalog+Nr+36+GB_V6_04.05.2022.pdf&subfolder_nav_tracking=1';
const polgast = "https://polgast.com.pl/catalog_pl.pdf";
const vermes = 'https://www.yumpu.com/en/embed/view/HsSqE8uitRVXxoJn'


function catalogName() {
    document.querySelectorAll('.catalog').forEach((catalog) => {
        catalog.addEventListener('click', () => {
            link = catalog.id;
            switch (link) {
                case 'altoShaam':
                    window.open(altoShaam, '_blank');
                    break;
                case 'animo':
                    window.open(animo, '_blank');
                    break;
                case 'bartscher':
                    window.open(bartscher, '_blank');
                    break;
                case 'casselin':
                    window.open(casselin, '_blank');
                    break;
                case 'combisteel':
                    window.open(combisteel, '_blank');
                    break;
                case 'cuistance':
                    window.open(cuistance, '_blank');
                    break;
                case 'diamond':
                    window.open(diamond, '_blank');
                    break;
                case 'emga':
                    window.open(emga, '_blank');
                    break;
                case 'polgast':
                    window.open(polgast, '_blank');
                    break;
                case 'saro':
                    window.open(saro, '_blank');
                    break;
                case 'vermes':
                    window.open(vermes, '_blank');
                    break;
                default:
            }
        });
    })

}