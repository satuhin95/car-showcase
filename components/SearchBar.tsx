'use client'
import React, { useState } from 'react'
import {SearchButton, SearchManufacturer} from './'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter()
  const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(manufacturer === '' && model ===''){
      return alert("Please fill in the search bar")
    }
    updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase());
  }
  const updateSearchParams =(model:string, manufacturer:string)=>{
    const searchParams = new URLSearchParams(window.location.search);
    if(model){
      searchParams.set('model',model)
    }else{
      searchParams.delete('model')
    }
    if(manufacturer){
      searchParams.set('manufacturer',manufacturer)
    }else{
      searchParams.delete('manufacturer')
    }
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClass='sm:hidden'/>
      </div>
      <div className='searchbar__item'>
        <Image 
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input 
        type='text'
         name="model"
         value={model}
         placeholder='Tiguan'
         onChange={(e)=>setModel(e.target.value)}
         className='searchbar__input'
         />
         <SearchButton otherClass='sm:hidden'/>
      </div>
         <SearchButton otherClass='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar