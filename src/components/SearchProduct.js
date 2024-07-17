import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchProduct({ data }) {
  const myState = useSelector((state) => state.changeTheNumber);

  const { filters } = myState;

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      dispatch({
        type: "FILTER",
        payload: {
          ...filters,
          searchTerm: event.target.value,
        }
      });
    } else {
      dispatch({
        type: "ADD_DATA",
        filter_products: data.map((v) => ({
          ...v,
          likes: 0,
          isIncrement: false,
        })),
      });
    }    
  };

  return (
    <div className="form">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Search Products"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SearchProduct;
