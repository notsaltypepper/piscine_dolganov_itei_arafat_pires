import React from 'react';
import {MdSearch} from 'react-icons/md'

const Search =({handelSearchNote}) =>{
    return <div className='search'>
        <MdSearch className='search-icons' size='1.3em'/>
        <input type="text"  onChange={(e) => handelSearchNote(e.target.value)}  placeholder='type to search...'/>
    </div>

}

export default Search