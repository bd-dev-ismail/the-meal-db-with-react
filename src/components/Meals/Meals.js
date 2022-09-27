import React, { useEffect, useState } from 'react';
import MealItem from '../MealsItem/MealItem';
import './Meals.css';
const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
        .then((res)=> res.json())
        .then(data => setMeals(data.meals));
    },[])
    return (
      <div className="meals-container container mx-auto my-8">
        <div className="meals-items grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <MealItem meal={meal} key={meal.idMeal}></MealItem>
          ))}
        </div>
        <div className="cart-meals">
          <h3>This is seleceted meals</h3>
        </div>
      </div>
    );
};

export default Meals;