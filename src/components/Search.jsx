// import { Divider } from 'antd';
// import Input from 'antd/es/input/Input';
import { useState } from 'react';

function Search(props) {
    const [searchInput, setSearchInput] = useState("")
    const handleSearch = (event)=>{
        setSearchInput(event.target.value)
        props.filterFoods(event.target.value)
    }
  return (
    <div>
        <label htmlFor="">Search Food</label>
        <br />
        <input type="text" name="search" value={searchInput} onChange={handleSearch}/>
    </div>
  )
}

export default Search