import foods from "./foods.json";
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
//styles imports
import { Card, Button } from 'antd';
import './App.css';


function App() {

  const [listOfFoods, setListOfFoods] = useState(foods)
  const [listOfFoodsToRender, setListOfFoodsToRender] = useState(foods)

  const addFood = (newFood)=>{
    setListOfFoods([...listOfFoods, newFood])
    setListOfFoodsToRender([...listOfFoodsToRender, newFood])
  }

  const filterFoods = (searchInput)=>{
    console.log(searchInput);
    const foodFilter = listOfFoods.filter((eachFood)=>{
      let minFoodName = eachFood.name.toLowerCase()
      let minSearchInput = searchInput.toLowerCase()
      return minFoodName.includes(minSearchInput)
    })
    console.log(foodFilter);
    setListOfFoodsToRender(foodFilter)
  }

  const deleteFood = (foodIndex) => {
    const clonedFoods = [...listOfFoods];

    clonedFoods.splice(foodIndex, 1);

    setListOfFoods(clonedFoods);
    setListOfFoodsToRender(clonedFoods);
  };

  return (
    <div className="App">
      {/* Add food form */}
      <AddFoodForm addFood={addFood}/>

      {/* Search form */}    
      <Search filterFoods={filterFoods} />
        

      {/* List of foods */}
      <div>
        {listOfFoodsToRender.map((eachFood, index)=>{
          return(
            <Card key={eachFood.name}>
              <FoodBox  eachFood={eachFood}/>  
              <Button onClick={() => {deleteFood(index)}}>Delete</Button>
            </Card>
          )
        })}
      </div>
    </div>
  );
}

export default App;
