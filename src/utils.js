function typeText(element, delay = 20, text)
{
    element.textContent = '';
    let i = 0;

    const interval = setInterval (() => {
        element.textContent += text[i++];
        if(i>= text.length) clearInterval(interval);
    },delay);
}

export function displayInformation(ans, currId)
{
    const text = ans.Answer;
    const titles = ans.Sources.map(source => source.Title);
    const links = ans.Sources.map(source => source.Link);

    const divText = document.createElement('div');
    divText.classList.add('ResponseBox');
    
    const aiText = document.createElement('p');
    aiText.classList.add('aiText');

    divText.appendChild(aiText);
    currId.appendChild(divText);

    typeText(aiText, 20, "Banane");
}

