import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../redux/reducer/cart";

export default function ProductCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const list = useSelector((state)=> state.cart.list)
  const element = list.find((item) => item.id === props.id)

  const addToCart = () => {
    dispatch(addItem(props));
    setIsAdded(true);

    // Reset the added state after a brief delay (e.g., 2 seconds)
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className={`card m-2  cursor-pointer ${isAdded ? 'added-to-cart' : ''}`} style={{ width: 300 }}>
      <div className="mt-2">
        <img
          src={props.image_url}
          height="150"
          width="180"
          alt={props.name}
          className="border-radius-9"
        />
      </div>
      <h5 className="card-title mt-2">{props.name}</h5>
      <h6 className="mt-2">Price : {`Rs ${props.price}`}</h6>
      <h6 className="mt-2">{props.description}</h6>
      <div>
        {element?.count > 0 ?<button className="btn btn-outline-warning m-2" onClick={()=> navigate('/cart')}>
          Go to Cart
        </button> :
        <button className="btn btn-success m-2" onClick={addToCart}>
          Add to Cart
        </button>}
        {isAdded && <p className="added-message">Added to Cart!</p>}
      </div>
    </div>
  );
}