'use client'
import React, { useState } from 'react'
import {SearchManufacturer} from './'

function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch=()=>{

  }
  return (
    <form className='serachbar' onSubmit={handleSearch}>
      <div className='serachbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar