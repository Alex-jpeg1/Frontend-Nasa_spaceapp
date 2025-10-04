export function typeText(element, delay = 20, text)
{
    element.textContent = '';
    let i = 0;

    const interval = setInterval (() => {
        element.textContent += text[i];
        if(i>= text.length) clearInterval(interval);
    },delay);
}