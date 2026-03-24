
function teamMemberHeads() {
    const staffHead = document.createElement('div');
    staffHead.classList.add('staff-head')
    staffHead.innerHTML = 'TEMP';
    return staffHead;
}

const teamContainer = document.createElement('div');
const teamTitle = document.createElement('h1');
const teamMeet = document.createElement('div');
const teamCarousel = document.createElement('div');

const teamSize = 3;


//add additional container for padding
teamContainer.classList.add('team-container');
teamMeet.classList.add('meet-team-btn');
teamCarousel.classList.add('team-carousel');

teamTitle.innerHTML = `Meet Our Team`;
teamMeet.innerHTML = 'MEET OUR STAFF';


for (var i = 0; i < teamSize; i++) {
    teamCarousel.append(teamMemberHeads());
}

teamContainer.append(teamTitle, teamMeet, teamCarousel)

export { teamContainer };





