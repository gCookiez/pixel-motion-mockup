import { multipleClassList } from "../recycle/class-list";
import { bootstrapRows, bootstrapColumns } from "../recycle/rows-and-columns";
function storeHoursTemplate(obj) {
    const storeHoursContainer = document.createElement("div");
    const hoursTitle = document.createElement("h2");
    const storeHoursList = bootstrapRows('schedules-list');


    
    storeHoursContainer.classList.add("store-hours-group")

    multipleClassList(obj.class, (result) => {
        storeHoursContainer.classList.add(...result)
    })

    hoursTitle.innerHTML = `${obj.title}`

    for (var [day, timeSlot] of Object.entries(obj.timeSlots)) {
        const row = bootstrapRows(day);
        const dayCol = bootstrapColumns('day col-7 col-sm-8')
        const timeCol = bootstrapColumns('sched ps-4 pe-0 col-5 col-sm-4')


        dayCol.innerHTML = `${day}`;
        timeCol.innerHTML = `${timeSlot}`;
        row.append(dayCol, timeCol);
        storeHoursList.append(row);
    }

    storeHoursContainer.append(hoursTitle, storeHoursList);

    return storeHoursContainer;
}

const dealerInfoContainer = document.createElement("div");
const dealerFirstInfo = bootstrapRows('dealer-first-row m-0 mt-3 p-0 pb-3 mb-3'); 
const dealerAddress = document.createElement("h4");
const dealerNumber = document.createElement("h2");
const dealerOptions = bootstrapRows('dealer-options row');
const mapNHours = document.createElement('span');
const contactUs = document.createElement('span');
const timeSlotArea = bootstrapRows('timeslot-area mt-3 row')

dealerInfoContainer.classList.add('dealer-info-container', 'p-4', 'pt-5', 'pb-5')
dealerAddress.innerHTML = `17979 Ne Gilsan St, Portland, OR 97230`;
dealerNumber.innerHTML = `503.000.000`;
mapNHours.innerHTML = "Map & Hours"
contactUs.innerHTML = "Contact Us"


dealerAddress.classList.add('dealer-address', 'p-0');
dealerNumber.classList.add('dealer-number', 'p-0');
dealerFirstInfo.append(dealerAddress, dealerNumber);
dealerOptions.append(mapNHours, contactUs);
mapNHours.classList.add("sub-link");
contactUs.classList.add("sub-link");


const timeSlots = [
    {
        class: "sales-hours pe-0",
        title: 'SALES HOURS',
        timeSlots: {
            MONDAY: 'CLOSED',
            TUESDAY: '8:30AM - 5:00PM',
            WEDNESDAY: '8:30AM - 5:00PM',
            THURSDAY: '8:30AM - 5:00PM',
            FRIDAY: '8:30AM - 5:00PM',
            SATURDAY: '8:30AM - 4:00PM',
            SUNDAY: 'CLOSED',
        }
    },
    {
        class: "service-hours pe-0",
        title: 'SERVICE HOURS',
        timeSlots: {
            MONDAY: 'CLOSED',
            TUESDAY: '8:30AM - 5:00PM',
            WEDNESDAY: '8:30AM - 5:00PM',
            THURSDAY: '8:30AM - 5:00PM',
            FRIDAY: '8:30AM - 4:00PM',
            SATURDAY: '8:30AM - 4:00PM',
            SUNDAY: 'CLOSED'
        }
    }
]

for (var type of timeSlots) {
    const slot = storeHoursTemplate(type);
    timeSlotArea.append(slot);
}

dealerInfoContainer.append(dealerFirstInfo, dealerOptions, timeSlotArea);

export { dealerInfoContainer }
