    async function handleSearch(search) {

        switchDivs("ANDREI");
        const obj = {
            text: search
        };

        const res = await fetch("https://localhost:5001/api/search", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(obj)}
                    );
    }
    
    const input = document.getElementById('res');
    document.getElementById("searchBtn").addEventListener("click", handleClick);

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

    toShow.textContent = value;
}