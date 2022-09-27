
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MealItem.css';
const MealItem = ({meal}) => {
    const { strMealThumb, strMeal, strInstructions } = meal;
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
            <p className="text-start">{strInstructions.slice(0, 60)}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Order Now
                <FontAwesomeIcon className='ml-1' icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MealItem;