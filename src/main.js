import { displayInformation} from "./utils.js";

    async function handleSearch(search) {
            
        const obj = {
            text: search
        };
        
        const res = await fetch("https://localhost:5001/api/query", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj)}
        );
        if(res.ok)
        {
            const ans = await res.json();
            switchDivs();
            displayInformation(ans, toShow);
        }
        else 
        {
            throw new Error("Eroare server: ${res.status}");
            
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
        
        toShow.innerHTML = '';
        toShow.style.display = 'block';
    }



    