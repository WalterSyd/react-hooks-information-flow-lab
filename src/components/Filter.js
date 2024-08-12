import React from 'react'
import { useState } from 'react';

function filterByCategory(category) {
    console.log(category);
}

function  Filter(){
    const handleCategoryChange = (event) => {
        filterByCategory(event.target.value)
    }
  return (
    <select name="filter" onChange={handleCategoryChange}>
    <option value="All">Filter by category</option>
    <option value="Produce">Produce</option>
    <option value="Dairy">Dairy</option>
    <option value="Dessert">Dessert</option>
  </select>
  )
}

export default Filter;