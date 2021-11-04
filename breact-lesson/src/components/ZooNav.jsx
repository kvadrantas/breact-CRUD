import { useState } from "react";

function ZooNav({ types, filter, reset, search, sort}) {

    const [filterValue, setFilterValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
    }

    const selectSort = e => {
        setSortValue(e.target.value);
        sort(e.target.value)
    }

    const handleSearchValue = e => {
        // console.log(e)
        if(!e.target.value) reset();
        setSearchValue(e.target.value);
        search(e.target.value)
    }

    const resetHandler = () => {
        reset();
        setFilterValue('');
    }

    return (
        <div className="zoo-nav">
            <fieldset>
                <fieldset>
                    <legend>Filter</legend>
                    <div className="filter">
                        <label>By type</label><br></br>
                        <select onChange={selectFilter} value={filterValue} >
                            <option value="default"  hidden>Select animal...</option>
                            {
                                types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)
                            }
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Sort</legend>
                    <div className="sort">
                        <label>Select sort criteria</label><br></br>
                        <select onChange={selectSort} value={sortValue} >
                            <option value="default"  hidden>Select sorting...</option>
                            <option value="text-asc">By name - AZ</option>
                            <option value="text-desc">By name - ZA</option>
                            <option value="number-asc">By weight - 19</option>
                            <option value="number-desc">By weight - 91</option>
                        </select>
                    </div>
                </fieldset>
                <button className="form-button" onClick={resetHandler}>Reset</button>
            </fieldset>
            <fieldset>
                <legend>Search</legend>
                <div className="search">
                    <label>Type search text</label>
                    <input onChange={handleSearchValue} value={searchValue}></input>
                </div>
            </fieldset>
        </div>
    )
}

export default ZooNav;