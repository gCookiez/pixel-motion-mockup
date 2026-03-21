import { bootstrapRows, bootstrapColumns } from "../recycle/rows-and-columns";
function storeHoursTemplate(obj) {
    const storeHoursContainer = document.createElement("div");
    const hoursTitle = document.createElement("h2");
    const storeHoursList = document.createElement("div");
    
    storeHoursContainer.classList.add("store-hours-group", obj.class ? obj.class : null)
    storeHoursList.classList.add("schedules-list");
    hoursTitle.innerHTML = `${obj.title}`

    for (var [day, timeSlot] of Object.entries(obj.timeSlots)) {
        const row = bootstrapRows(day);
        const dayCol = bootstrapColumns('day')
        const timeCol = bootstrapColumns('sched')


        dayCol.innerHTML = `${day}`;
        timeCol.innerHTML = `${timeSlot}`;
        row.append(dayCol, timeCol);
        storeHoursList.append(row);
    }

    storeHoursContainer.append(hoursTitle, storeHoursList);

    return storeHoursContainer;
}

const dealerInfoContainer = document.createElement("div");
const dealerAddress = document.createElement("div");
const dealerNumber = document.createElement("div");
const dealerOptions = document.createElement("div");
const timeSlotArea = document.createElement("div");

dealerInfoContainer.classList.add('dealer-info-container')
dealerAddress.innerHTML = `17979 Ne Gilsan St, Portland, OR 97230`;
dealerNumber.innerHTML = `503.000.000`;
dealerOptions.innerHTML = `Map & Hours Contact Us`;


const timeSlots = [
    {
        class: "sales-hours",
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
        class: "service-hours",
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
dealerInfoContainer.append(dealerAddress, dealerNumber, dealerOptions, timeSlotArea);

export { dealerInfoContainer }
