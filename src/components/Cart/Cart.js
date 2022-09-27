import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';
const Cart = ({ item, handalDelete }) => {
  return (
    <div className="flex justify-around items-center py-2">
      <p className="text-xl">{item.strMeal}</p>
      <button
        onClick={() => handalDelete(item.idMeal)}
        className="btn btn-sm btn-secondary"
      >
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Cart;