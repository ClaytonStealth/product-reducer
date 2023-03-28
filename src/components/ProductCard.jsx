import React, { useState } from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  const [editBtn, setEditBtn] = useState(false);
  const [editProductState, setEditProductState] = useState({
    id: props.id,
    title: props.title,
    publisher: props.publisher,
    genre: props.genre,
    price: props.price,
  });
  //editProduct
  //returns {key: uuidv4(),
  // id: 1,
  // title: "Hogwarts Legacy",
  // publisher: "Warner Bros.",
  // genre: "Adventure",
  // price: 59.99,
  // }
  const editProductFunc = () => {
    //full manual
    // props.editProduct({
    //   key: editProductState.key,
    //   id: editProductState.id,
    //   title: editProductState.title,
    //   publisher: editProductState.publisher,
    //   genre: editProductState.genre,
    //   price: editProductState.price,
    // })
    //assuming state does not include key or id partial deconstruction
    // props.editProduct({
    //   key: props.key,
    //   id: props.id,
    //   ...editProductState
    // })
    //works only if all varlues are in edittProductState
    props.editProduct(editProductState);
  };
  return (
    <div className='product-card'>
      <h2>
        <u>{props.title}</u>
      </h2>
      <p>Publisher: {props.publisher}</p>
      <p>Genre: {props.genre}</p>
      <p>Price: ${props.price}</p>
      {editBtn ? <p>true:edit</p> : <p>false: No Edit</p>}
      {/* onClick should should trigger props.deleteProduct */}
      <button onClick={() => props.deleteProduct(props.id)}>Delete!</button>
      <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
    </div>
  );
};

export default ProductCard;
