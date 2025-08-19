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
    // const searchInput = document.querySelector("mySearchInput");
    // console.log("this is the search input", searchInput);
    
    element.addEventListener("keyup", (e) => {
        console.log("The event target value is: ", e.target.value);
        const results = document.querySelectorAll(".result");

        const searchTerm = e.target.value.toLowerCase().trim();
        
        results.forEach(row => {
            const name      = row.cells[1].textContent.toLowerCase();
            const company   = row.cells[4].textContent.toLowerCase();

            const matches = name.includes(searchTerm) || company.includes(searchTerm);
            matches ? row.classList.remove("hidden") : row.classList.add("hidden");
            
        });
    })
}
