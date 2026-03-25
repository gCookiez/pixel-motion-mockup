import { carouselFiller } from '../recycle/carousel';
import { containerTemplate } from '../recycle/class-list';
import { bootstrapRows, bootstrapColumns} from '../recycle/rows-and-columns'
import {shopButtons} from '../recycle/non-standard-buttons';
import defIcon from '../../../public/pic.png';

function teamMemberHeads() {
    const staffHeadCont = document.createElement('div');
    const staffHead = document.createElement('div');
    const staffImg = document.createElement('img');
    
    staffImg.setAttribute('src', defIcon)
    staffHead.classList.add('staff-head', 'd-flex', 'justify-content-center', 'align-items-center')
    staffHead.append(staffImg);
    staffHeadCont.classList.add('staff-head-cont', 'justify-content-center', 'd-flex');
    staffHeadCont.append(staffHead);
    return staffHeadCont;
}

const teamContainer = document.createElement('div');
const teamtitleMeetCluster = bootstrapRows('team-title-meet-cluster p-3 ps-5');
const teamTitle = document.createElement('h1');
const teamMeet = shopButtons('meet-team-btn', 'MEET OUR STAFF');
const teamCarousel = document.createElement('div');
const {list, carouselModule} = new carouselFiller(true);

const cloneDivHead = document.createElement('div');
cloneDivHead.classList.add('team-group', 'd-flex', 'justify-content-around', 'ps-5', 'pe-5', 'pb-4');

const teamSize = 5;


//add additional container for padding
teamContainer.classList.add('team-container');
teamCarousel.classList.add('team-carousel', 'mt-4', 'pb-5');
teamTitle.classList.add('team-title', 'pt-3','pb-1');
teamMeet.classList.add('meet-team-btn');

teamTitle.innerHTML = `Meet Our Team`;

teamtitleMeetCluster.append(teamTitle,teamMeet)


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





