

import { Card, Col, Button } from 'antd';



function FoodBox(props) {
    
  return (
    <div>
        <Col>
            <Card
                title={props.eachFood.name}>
                <img src={props.eachFood.image} height={60} alt="food" />
                <p>Calories: {props.eachFood.calories}</p>
                <p>Servings: {props.eachFood.servings}</p>
                <p>
                    <b>Total Calories: {props.eachFood.calories * props.eachFood.servings} </b> kcal
                </p>
                
            </Card>
        </Col>
    
    </div>
  )
}

export default FoodBox
