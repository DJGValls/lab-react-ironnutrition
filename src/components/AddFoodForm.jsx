import { useState } from "react"


function AddFoodForm(props) {

    const [nameInput, setNameInput] = useState("")
    const [caloriesInput, setCaloriesInput] = useState(0) 
    const [servingsInput, setServingsInput] = useState(0)
    const [imageInput, setImageInput] = useState("")

    const handleNameChange = (event)=>{
        const realInput = event.target.value
        setNameInput(realInput)
        // console.log(realInput);
    }

    const handleCaloriesChange = (event)=>{
        const realInput = event.target.value
        setCaloriesInput(realInput)
        // console.log(realInput);
    }

    const handleServingsChange = (event)=>{
        const realInput = event.target.value
        setServingsInput(realInput)
        // console.log(realInput);
    }

    const handleImageChange = (event)=>{
        const realInput = event.target.value
        setImageInput(realInput)
        // console.log(realInput);
    }

    const handleSubmitForm = (event)=>{
        event.preventDefault()
        const newFood = {
            name: nameInput,
            calories: caloriesInput,
            servings: servingsInput,
            image: imageInput,
        }
        props.addFood(newFood)
        // console.log(newFood);

    }

  return (
    <div>AddFoodForm
    
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" value={nameInput} onChange={handleNameChange}/>
            <br />
            <label htmlFor="">Calories:</label>
            <input type="number" name="calories" value={caloriesInput} onChange={handleCaloriesChange}/>
            <br />
            <label htmlFor="">Servings:</label>
            <input type="number" name="servings" value={servingsInput} onChange={handleServingsChange}/>
            <br />
            <label htmlFor="">Image:</label>
            <input type="text" name="image" value={imageInput} onChange={handleImageChange}/>
            <br />
            <button>Add Food</button>
        </form>
    
    </div>
  )
}

export default AddFoodForm


