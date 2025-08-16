export const SearchInput = (element) => {
    const searchInput = document.createElement('input');
    searchInput.className = "search-input";
    searchInput.setAttribute('type', 'search'); // sse type="search" for semantic meaning and built-in clear button
    searchInput.setAttribute('id', 'mySearchInput');
    searchInput.setAttribute('placeholder', 'Search...');

    element.appendChild(searchInput);
    return searchInput;
}