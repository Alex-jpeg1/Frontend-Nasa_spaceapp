    async function handleSearch(search) {

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
            const data = await res.json();
            const ans = JSON.parse(data);
            
            switchDivs();
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

    function switchDivs(value)
    {
        toHide.style.display = 'none';
        toShow.style.display = 'block';
    }

    const information = document.getElementById('information');

    function displayInformation(ans)
    {
        information.textContent = ans.text;
    } 
    