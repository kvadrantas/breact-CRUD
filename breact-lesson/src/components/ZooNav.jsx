import { useState } from "react";

function ZooNav({ types, filter, reset, search}) {

    const [filterValue, setFilterValue] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const selectFilter = e => {
        setFilterValue(e.target.value);
        filter(e.target.value)
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
                <legend>Filter</legend>
                <div className="filter">
                    <label>By type</label><br></br>
                    <select onChange={selectFilter} value={filterValue} >
                        <option value="default"  hidden>Select animal...</option>
                        {
                            types.map(t => <option key={t.type} value={t.type}>{t.type}</option>)
                        }
                    </select>
                    <button className="form-button" onClick={resetHandler}>Reset</button>
                </div>
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