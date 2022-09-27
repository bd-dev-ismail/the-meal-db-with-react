
import { faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { showDetails } from '../Details/Details';
import './MealItem.css';
const MealItem = ({meal, order, setOrder}) => {
    const { strMealThumb, strMeal, strInstructions, idMeal } = meal;
    const handalOrder = () => {
    const info = {
      strMealThumb,
      strMeal,
      strInstructions,
      idMeal,
      price: 200
    };
    if(order){
        setOrder([...order, info]);
        return;
    }
    else{
      setOrder([info]);
      return;
    }
   }
   const handalBookmark = () => {
    const info = {
      strMealThumb,
      strMeal,
      strInstructions,
      idMeal,
      quantiy: 1,
      bookmark: 'true',
    };
    const prevBookmark = localStorage.getItem("bookmark");
    const oldBookmark = JSON.parse(prevBookmark);
    if(oldBookmark){
      const isExist = oldBookmark.find(item => item.idMeal === idMeal);
      if(isExist){
        const updateQuantity = parseInt(isExist.quantiy);
        const newQuantity = updateQuantity + 1;
        isExist.quantiy = newQuantity;
        localStorage.setItem("bookmark",JSON.stringify(oldBookmark));
      }
      else{
        localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]));
      }
    }else{
      localStorage.setItem("bookmark", JSON.stringify([info]));
    }
   };
    return (
      <div>
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
          <figure>
            <img
              src={strMealThumb ? strMealThumb : "No Image Found"}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{strMeal}</h2>
            <p>Product Id: {idMeal}</p>
            <p className="text-start">{strInstructions.slice(0, 60)}</p>
            {/* <div
              onClick={showDetails}
              htmlFor="my-modal-3"
              class="badge  cursor-pointer badge-warning text-white"
            >
              Details
            </div> */}
            <label onClick={()=>showDetails} htmlFor="my-modal-3" className="btn modal-button">
              open modal
            </label>
            <div className="card-actions justify-end">
              <button onClick={handalOrder} className="btn btn-sm btn-primary">
                Order Now
                <FontAwesomeIcon className="ml-1" icon={faPlus} />
              </button>
              <button
                onClick={handalBookmark}
                className="btn btn-secondary btn-sm"
              >
                Bookmark
                <FontAwesomeIcon
                  className="ml-1"
                  icon={faBookmark}
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MealItem;