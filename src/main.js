import { typeText } from "./utils.js";

    async function handleSearch(search) {
        switchDivs();

        const obj = {
            text: search
        };
        
        const res = await fetch("https://localhost:5001/api/search", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj)}
        );
        
        if(res.ok)
        {
            const ans = await res.json();
            
            displayInformation(ans);
        }
    }

    const input = document.getElementById('res');
    document.getElementById("searchBtn").addEventListener("click", handleClick);
    document.getElementById("homeBtn").addEventListener("click", () => {
        location.reload();
    });    
    
    function handleClick()
    {
        const value = input.value;
        handleSearch(value); 
    }
    const toHide = document.getElementById('toHide');
    const toShow = document.getElementById('toShow');

    function switchDivs()
    {
        toHide.style.display = 'none';
        toShow.style.display = 'block';

        typeText(toShow,20,"ANDREI ARE MERE SI PORTOCALE");
    }

    function displayInformation(ans)
    {
        toShow.textContent = ans.text;
        const titles = ans.most_relevant_title.split('|');
        const links = ans.most_relevant_links.split('|');


    } 
    