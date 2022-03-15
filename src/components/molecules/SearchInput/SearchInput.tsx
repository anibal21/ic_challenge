import React, { useCallback } from 'react'
import debounce from "lodash.debounce";

interface ISearchInput {
    searchInputHandler: (searchInput: string) => void
}

const i18n = {
    placeholder: 'Search By Name'
}

const timeUntilRequest = process.env.REACT_APP_SEARCH_INPUT_RESPONSE_TIME;

const SearchInput: React.FC<ISearchInput> = ({ searchInputHandler }) => {

    const changeHandler = (event) =>
        searchInputHandler(event.target.value);

    const inputTimeHandler =
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useCallback(debounce(changeHandler, timeUntilRequest), []);

    return <input
        className={'cg-search-input'}
        placeholder={i18n.placeholder}
        onChange={inputTimeHandler}
    />
}
    

export default SearchInput