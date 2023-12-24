import React from "react";

export default function ProductListItem(props) {
  return (
    <div className="d-flex m-2 align-items-center justify-content-center text-center">
      <img
        src={props.image_url}
        height="150"
        width="180"
        alt={props.name}
        className="border-radius-9 me-4"
      />
      <div>
        <h5 className="card-title mt-2">{props.name}</h5>
        <h6 className="mt-2">Price: {`Rs ${props.price}`}</h6>
        
        <div className="d-flex align-items-center">
          <button className="btn btn-danger m-2" onClick={props.decrementItem}>-</button>
          <h6 className="mt-3 mx-2">Quantity: {props.count}</h6>
          <button className="btn btn-danger m-2" onClick={props.incrementItem}>+</button>
        </div>

        <button className="btn btn-danger m-2" onClick={props.removeItem}>Remove</button>
      </div>
    </div>
  );
}