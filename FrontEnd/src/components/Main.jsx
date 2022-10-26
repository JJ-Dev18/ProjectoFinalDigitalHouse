import React from 'react'
import './styles/main.css'
import SearchBlock from './SearchBlock'
import CategoryBlock from './CategoryBlock'



const Main = (props) => {
  return (
    <main>
      <SearchBlock />
      <CategoryBlock /> 
  </main>
  )
}

export default Main