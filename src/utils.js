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

    typeText(aiText, 20, text);

    titles.forEach((title,idx) => {
        const p = document.createElement('p');
        p.classList.add('LinkBox');

        const a = document.createElement('a');
        a.href = links[idx];

        typeText(a, 20, title);
        a.target = '_blank'; 

        p.appendChild(a);
        divText.appendChild(p);
    });
}

