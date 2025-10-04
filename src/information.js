const toHide = document.getElementById('toHide');
const toShow = document.getElementById('toShow');

function swtchDivs(value)
{
    toHide.style.display = 'none';
    toShow.style.display = 'block';

    toShow.textContent = value;
}