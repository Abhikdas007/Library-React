import { useState } from "react";

import Model from "./Components/Model";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Heading from "./Components/Heading";
import Card from "./Components/Card";

export default function App() {
  const [list, setList] = useState([]);
  const [showModel, setShowModel] = useState(false);

// add item
  function addItem(event, data) {
    setList((preValue) => {
      return [...preValue, data];
    });
  }

  // Remove Item 

  function deletItem(id){
    setList((preValue)=>{
      return preValue.filter((item, index)=>{
        return index != id;
      })
    })
  }

  return (
    <div className="app">
      <Navbar />
      <Heading setShowModel={setShowModel} />
      {showModel && <Model setShowModel={setShowModel} addItem={addItem} />}
      <div className="item-container">
        {list.map((item, index) => {
          return (
            <Card
              key={index}
              id={index}
              name={item.name}
              author={item.author}
              pages={item.pages}
              isRead={item.isRead}
              deletItem={deletItem}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
