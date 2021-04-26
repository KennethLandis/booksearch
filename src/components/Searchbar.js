import React from 'react';

function Searchbar(props){
    return (
        <div className="js-search">
            <form>
                <input type="text" id="search"></input>
                <input type="submit" value="search" onClick=''></input>
            </form>
        </div>
    )
}

export default Searchbar;