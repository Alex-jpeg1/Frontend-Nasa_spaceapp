const researchNumber = 550;
const organismsNumber = 85;
const experimentsNumber = 150;

const researchID = document.getElementById('research');
const organismsID = document.getElementById('organisms');
const spaceMissionsID = document.getElementById('space');

async function runTimer(n, currentID) {
    for (let i = 0; i < n; i++) { 
        currentID.textContent = i;
        await new Promise(resolve => setTimeout(resolve, 1));
    }
    currentID.textContent = n + '+';
}
runTimer(researchNumber, researchID);
runTimer(organismsNumber, organismsID);
runTimer(experimentsNumber, spaceMissionsID);
