import React from 'react';

function Filter(props)  {

    
    
    return (
        <div className="filter">
            <form>
                <label htmlFor="filter">Filter book type:</label>
                <select id="filter" name="filter" onChange={e => props.setFilter(e.target.value)}>
                    <option value="None">Select one...</option>
                    <option value="partial">Partial text viewable</option>
                    <option value="full">Full text Viewable</option>
                    <option value="free-ebooks">Free Google Ebooks</option>
                    <option value="paid-ebooks">Paid Google Ebooks</option>
                    <option value="ebooks">All Google Ebooks</option>
                </select>
            </form>
            <form>
                <label htmlFor="print">Print Type:</label>
                <select id="print" name="print" onChange={e => props.setPrint(e.target.value)}>
                    <option value="None">Select one...</option>
                    <option value="all">all</option>
                    <option value="books">books</option>
                    <option value="magazines">magazines</option>
                </select>
            </form>
        </div>
    )
}

export default Filter;