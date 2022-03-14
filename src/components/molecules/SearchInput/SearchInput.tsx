import React, { useCallback } from 'react'
import debounce from "lodash.debounce";

interface ISearchInput {
    searchInputHandler: (searchInput: string) => void
}

const i18n = {
    placeholder: 'Search By Name'
}

const timeUntilRequest = 400;

const SearchInput: React.FC<ISearchInput> = ({ searchInputHandler }) => {

    const changeHandler = (event) =>
        searchInputHandler(event.target.value);

    const inputTimeHandler =
        useCallback(debounce(changeHandler, timeUntilRequest), []);

    return <input
        className={'cg-search-input'}
        placeholder={i18n.placeholder}
        onChange={inputTimeHandler}
    />
}
    

export default SearchInput