import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import MealItem from '../MealsItem/MealItem';
import './Meals.css';
const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
        .then((res)=> res.json())
        .then(data => setMeals(data.meals));
    },[]);
    const handalDelete = (id) =>{
      const updateOrder = order.filter((product) => product.idMeal !== id);
      setOrder(updateOrder);
    }
    return (
      <div className="meals-container container mx-auto my-8 ">
        <div className="meals-items grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <MealItem
              meal={meal}
              key={meal.idMeal}
              order={order}
              setOrder={setOrder}
            ></MealItem>
          ))}
        </div>
        <div className="cart-meals sticky top-0">
          <h3 className="text-2xl text-center font-bold text-primary">
            Ordered Food
          </h3>
          <div className="p-4">
            {order?.map((item) => (
              <Cart
                item={item}
                handalDelete={handalDelete}
                key={item.idMeal}
              ></Cart>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Meals;