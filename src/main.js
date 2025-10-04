    async function handleSearch(search) {

        const obj = {
            search_index: search
        };

        const res = await fetch("https://localhost:5001/search", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(obj)}
                    );

    }
    const input = document.getElementById('input');

     async function handleInput(value){
        try 
        {
            const res = await handleSearch(value);
            console.log("Raspuns: ", res);
        }
        catch(err)
        {
            console.log("Eroare:", err);
        }
    }
    function handleClick()
    {
        const value = input.value;
        handleSearch(value); 
    }