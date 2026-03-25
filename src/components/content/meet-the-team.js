import { carouselFiller } from '../recycle/carousel';
import { containerTemplate } from '../recycle/class-list';
import { bootstrapRows, bootstrapColumns} from '../recycle/rows-and-columns'
import {shopButtons} from '../recycle/non-standard-buttons';

function teamMemberHeads() {
    const staffHead = document.createElement('div');
    staffHead.classList.add('staff-head')
    staffHead.innerHTML = 'TEMP';
    return staffHead;
}

const teamContainer = document.createElement('div');
const teamtitleMeetCluster = bootstrapRows('team-title-meet-cluster p-3');
const teamTitle = document.createElement('h1');
const teamMeet = shopButtons('meet-team-btn', 'MEET OUR STAFF');
const teamCarousel = document.createElement('div');
const {list, carouselModule} = new carouselFiller();

const cloneDivHead = document.createElement('div')

const teamSize = 3;


//add additional container for padding
teamContainer.classList.add('team-container');
teamCarousel.classList.add('team-carousel');
teamTitle.classList.add('team-title', 'pt-3','pb-1');
teamMeet.classList.add('meet-team-btn');

teamTitle.innerHTML = `Meet Our Team`;

teamtitleMeetCluster.append(teamTitle,teamMeet)


// var tempClone = cloneDivHead.cloneNode(true);
var tempClone = null;
var counter = 0;

for (var i = 0; i < teamSize; i++) {
    if (tempClone != null && i % 2 == 0) {
        carouselModule.addSlide(tempClone, counter);
        counter++;
        tempClone = null;
    }

    if (tempClone == null) {
      tempClone = cloneDivHead.cloneNode(true);
      tempClone.classList.add('flex-team');  
    } 
    tempClone.append(teamMemberHeads());

    if (i === teamSize - 1) {
        carouselModule.addSlide(tempClone, counter);
        counter++;
        tempClone = null;
    }
}


teamCarousel.append(list);
teamContainer.append(teamtitleMeetCluster, teamCarousel)

export { teamContainer };





