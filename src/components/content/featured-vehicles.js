import { carouselFiller } from '@recycle/carousel';
import { trimmedModules } from '@recycle/trimmed-filenames';

const imagesContext = import.meta.glob('@public/moto-carousel/*.jpg', { eager: true, import: 'default' });

const trimmedModule = trimmedModules(imagesContext);

function motorItemTemplate(obj) {
    const motorFrame = document.createElement('div');
    const img = document.createElement('img')
    const productDetailsCont = document.createElement('div');
    const productName = document.createElement('span');
    const productPrice = document.createElement('span');
    const productSerial = document.createElement('span');
    const viewDetails = document.createElement('div');
    const viewDetailsText = document.createElement('span');


    img.setAttribute('src', obj.imgPath);
    productDetailsCont.classList.add('product-details-cont', 'mt-3', 'mb-3')
    productName.innerHTML = `${obj.name}`;
    productPrice.innerHTML = `Price: ${obj.price}`;
    productSerial.innerHTML = `Stock#: ${obj.serial}`;
    viewDetails.classList.add('view-details-btn', 'p-1', 'ps-3', 'pe-3')
    viewDetailsText.innerHTML = `View Details`;


    viewDetails.append(viewDetailsText);
    motorFrame.classList.add('motor-frame', 'pt-1');
    productDetailsCont.append(productName, productPrice, productSerial)
    motorFrame.append(img, productDetailsCont, viewDetails);
    return motorFrame;
}

// create carousel function

const featuredVehicleContainer = document.createElement('div');
const featuredVehiclesCarousel = document.createElement('div');
featuredVehiclesCarousel.classList.add('vehicle-carousel');
const {list, carouselModule} = new carouselFiller();
const featuredTitle = document.createElement('h2');



const products = [
    {
        imgPath: trimmedModule["USED 2018 TRIUMPH STREET TRIPLE R"],
        name: "Used 2018 Triumph STREET TRIPLE R",
        price: "$6,895",
        serial: "TCR297B"
    },
    {
        imgPath: trimmedModule["TRIUMPH STREET TRIPLE R 01"],
        name: "New 2024 Triumph STREET TRIPLE R",
        price: "$9,445",
        serial: "TCR271"
    },
    {
        imgPath: trimmedModule["TRIUMPH STREET TRIPLE R 02"],
        name: "New 2024 Triumph STREET TRIPLE R",
        price: "$9,695",
        serial: "TCR270"
    },
    {
        imgPath: trimmedModule["TRIUMPH STREET TRIPLE R 02"],
        name: "New 2024 Triumph STREET TRIPLE R",
        price: "$9,695",
        serial: "TCR277"
    },
]


featuredTitle.innerHTML = 'FEATURED VEHICLES';
featuredTitle.classList.add('mt-5', 'mb-3')


for (var [i, obj] of Object.entries(products)) {
    const product = motorItemTemplate(obj);
    carouselModule.addSlide(product, i)
    
}
// carouselModule.nextSlide();
featuredVehiclesCarousel.append(list);


featuredVehicleContainer.classList.add('featured-vehicle-area');
featuredVehicleContainer.append(featuredTitle, featuredVehiclesCarousel);

export { featuredVehicleContainer };
