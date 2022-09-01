/* eslint-disable array-callback-return */
import { useState } from "react";
import Cards from "./Components/Cards/Cards";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";

import { items } from "./data";

function App() {
  const [itemsData, setItemsData] = useState(items);

  // All Categories
  const allCategories = ["الكل", ...new Set(items.map((i) => i.category))];

  // Filter By Category
  const filterByCategory = (category) => {
    if (category === "الكل") {
      setItemsData(items);
    } else {
      const newArray = items.filter((item) => item.category === category);
      setItemsData(newArray);
    }
  };

  // Filter By Search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArray = items.filter((item) => item.title === word);
      setItemsData(newArray);
    } else {
      setItemsData(items);
    }
  };

  const al = (w) => {
    if (w !== "") {
      const newArr = [];
      items.map((i) => {
        if (i.title.includes(w)) {
          newArr.push(i);
        }
      });
      setItemsData(newArr);
    } else {
      setItemsData(items);
    }
  };

  return (
    <div className="App">
      <NavBar filterBySearch={filterBySearch} al={al} />
      <div className="container">
        <Header />
        <Category
          allCategories={allCategories}
          filterByCategory={filterByCategory}
        />
        <Cards itemsData={itemsData} />
      </div>
    </div>
  );
}

export default App;
