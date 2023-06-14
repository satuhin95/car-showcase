'use client'
import React, { useState } from 'react'
import {SearchButton, SearchManufacturer} from './'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const SearchBar=({setManufacturer, setModel})=> {
  const [searchManufacturer, setsearchManufacturer] = useState('');
  const [searchModul, setSearchModul] = useState('');
  const router = useRouter()
  const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(searchManufacturer === '' && searchModul ===''){
      return alert("Please fill in the search bar")
    }
    setModel(searchModul);
    setManufacturer(searchManufacturer)

  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          seleccted={searchManufacturer}
          setSelected={setsearchManufacturer}
        />
        <SearchButton otherClass='sm:hidden'/>
      </div>
      <div className='searchbar__item'>
        <Image 
          src="/model-icon.png"
          alt="searchModul"
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input 
        type='text'
         name="searchModul"
         value={searchModul}
         placeholder='Tiguan'
         onChange={(e)=>setSearchModul(e.target.value)}
         className='searchbar__input'
         />
         <SearchButton otherClass='sm:hidden'/>
      </div>
         <SearchButton otherClass='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar