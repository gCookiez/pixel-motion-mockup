const imagesContext = import.meta.glob('../../../public/*.jpg', { eager: true, import: 'default' });

const trimmedModules = Object.fromEntries(
  Object.entries(imagesContext).map(([path, module]) => [
    path.slice(path.lastIndexOf('/') + 1, -3).split('_').join(" ").toUpperCase().replace('.', ''), // Trims './dir/' and '.js'
    module
  ])
);

function motorItemTemplate(obj) {
    const motorFrame = document.createElement('div');
    const img = document.createElement('img')
    const productName = document.createElement('span');
    const productPrice = document.createElement('span');
    const productSerial = document.createElement('span');
    const viewDetails = document.createElement('a');

    console.log(obj.imgPath); 


    img.setAttribute('src', obj.imgPath);
    productName.innerHTML = `${obj.name}`;
    productPrice.innerHTML = `Price: ${obj.price}`;
    productSerial.innerHTML = `Stock#: ${obj.serial}`;
    viewDetails.innerHTML = `View Details`;

    motorFrame.classList.add('motor-frame', `frame-${obj.iter}`);

    motorFrame.append(img, productName, productPrice, productSerial, viewDetails);
    return motorFrame;
}

const featuredVehicleContainer = document.createElement('div');
const featuredVehiclesCarousel = document.createElement('div');
featuredVehiclesCarousel.classList.add('vehicle-carousel');
const featuredTitle = document.createElement('h2');
const products = [
    {
        imgPath: trimmedModules["USED 2018 TRIUMPH STREET TRIPLE R"],
        name: "Used 2018 Triumph STREET TRIPLE R",
        price: "$6,895",
        serial: "TCR297B"
    },
    {
        imgPath: trimmedModules["TRIUMPH STREET TRIPLE R 01"],
        name: "New 2024 Triumph STREET TRIPLE R",
        price: "$9,445",
        serial: "TCR271"
    },
    {
        imgPath: trimmedModules["TRIUMPH STREET TRIPLE R 02"],
        name: "New 2024 Triumph STREET TRIPLE R",
        price: "$9,695",
        serial: "TCR270"
    },
    {
        imgPath: trimmedModules["TRIUMPH STREET TRIPLE R 02"],
        name: "New 2024 Triumph STREET TRIPLE R",
        price: "$9,695",
        serial: "TCR277"
    },
]
featuredTitle.innerHTML = 'FEATURED VEHICLES';



for (var [i, obj] of Object.entries(products)) {
    obj.iter = i;
    const product = motorItemTemplate(obj);
    featuredVehiclesCarousel.append(product);
}

featuredVehicleContainer.classList.add('featured-vehicle-area');
featuredVehicleContainer.append(featuredTitle, featuredVehiclesCarousel);

export { featuredVehicleContainer };
