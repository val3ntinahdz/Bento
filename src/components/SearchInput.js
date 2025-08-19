export const SearchInput = (element) => {
    const searchInput = document.createElement('input');
    searchInput.className = "search-input";
    searchInput.setAttribute('type', 'search'); // sse type="search" for semantic meaning and built-in clear button
    searchInput.setAttribute('id', 'mySearchInput');
    searchInput.setAttribute('placeholder', 'Search by client name or company');

    element.appendChild(searchInput);
    return searchInput;
}

export const searchItems = (element) => {
    let principalDiv = document.querySelector(".principal-div");
    const noResultsMsg = createNoResultsMsg(principalDiv);


    element.addEventListener("keyup", (e) => {
        const results = document.querySelectorAll(".result");
        const searchTerm = e.target.value.toLowerCase().trim();
    
        let matchCount = 0;
        // console.log("The event target value is: ", e.target.value);

        if (searchTerm) {
            
            results.forEach(row => {
                const name      = row.cells[1].textContent.toLowerCase();
                const company   = row.cells[4].textContent.toLowerCase();
    
                const matches = name.includes(searchTerm) || company.includes(searchTerm);

                if (matches) {
                    row.classList.remove("hidden");
                    matchCount++
                } else {
                    row.classList.add("hidden");
                }
            });

            if (matchCount === 0) {
                principalDiv.querySelector("table").classList.add("hidden");
                noResultsMsg.classList.remove("hidden");
            }

        } else {
            noResultsMsg.classList.add("hidden");
        }
    })
    
}

const createNoResultsMsg = (div) => {
    const message = document.createElement("h1");
    message.textContent = "No results for your search!";
    message.classList.add("hidden");
    div.appendChild(message)

    return message;
}
