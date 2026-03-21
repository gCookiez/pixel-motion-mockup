
function motorItemTemplate(obj) {
    const motorFrame = document.createElement('div');
    const productName = document.createElement('span');
    const productPrice = document.createElement('span');
    const productSerial = document.createElement('span');
    const viewDetails = document.createElement('a');

    productName.innerHTML = `${obj.name}`;
    productPrice.innerHTML = `Price: ${obj.price}`;
    productSerial.innerHTML = `Stock#: ${obj.serial}`;
    viewDetails.innerHTML = `View Details`;

    motorFrame.classList.add('motor-frame');

    motorFrame.append(productName, productPrice, productSerial, viewDetails);
    return motorFrame;
}

const featuredVehicleContainer = document.createElement('div');
const featuredVehiclesCarousel = document.createElement('div');
featuredVehiclesCarousel.classList.add('vehicle-carousel');
const featuredTitle = document.createElement('h2');
const products = [
    {
        name: "Used 2018 Triumph STREET TRIPLE R",
        price: "$6,895",
        serial: "TCR297B"
    },
    {
        name: "New 2024 Triumph STREET TRIPLE R",
        price: "$9,445",
        serial: "TCR271"
    },
    {
        name: "New 2024 Triumph STREET TRIPLE R",
        price: "$9,695",
        serial: "TCR270"
    },
    {
        name: "New 2024 Triumph STREET TRIPLE R",
        price: "$9,695",
        serial: "TCR277"
    },
]
featuredTitle.innerHTML = 'FEATURED VEHICLES';



for (var obj of products) {
    const product = motorItemTemplate(obj);
    featuredVehiclesCarousel.append(product);
}

featuredVehicleContainer.classList.add('featured-vehicle-area');
featuredVehicleContainer.append(featuredTitle, featuredVehiclesCarousel);

export { featuredVehicleContainer };
