import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function Header({onDarkModeClick}){
const [isDarkMode, setIsDarkMode] = useState(false);

function toggleDarkMode() {
  setIsDarkMode((isDarkMode) => !isDarkMode);
  if(onDarkModeClick) onDarkModeClick();//call the prop {onDarkModeClick} if provided
}

return (
  <div className={"App " + (isDarkMode ? "dark" : "light")}>
    <header>
      <h2>Shopster</h2>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
    <ShoppingList items={itemData} />
  </div>
);
}
export default Header;