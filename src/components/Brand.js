import React, { useEffect, useReducer, useState } from "react";
import watch from "./assets/images/watch.png";
import Product from "./Product";
import ListView from "./ListView";
import whatsapp from "./assets/images/whatsapp.jpg";
import { useSelector, useDispatch } from "react-redux";
import changeTheNumber from "../reducers/func";
import Productredux from "./Productredux";
import SearchProduct from "./SearchProduct";

// const initialState = {
//   sorting_value: "relevance",
//   filter_products: [],
// };

// const filterReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_DATA":
//       return { ...state, filter_products: action.filter_products };

//     case "GET_SORT_VALUE":
//       return {
//         ...state,
//         sorting_value: action.data,
//         filter_products: action.filter_products,
//       };

//     default:
//       return state;
//   }
// };

function Brand({ sizeFilter, setSizeFilter, data }) {
  // const [state, dispatch] = useReducer(changeTheNumber, state);

  const myState = useSelector((state) => state.changeTheNumber);
  //  console.log(myState, "mystat")
  const dispatch = useDispatch();

  // console.log("MSD:", myState.filter_products)

  useEffect(() => {
    dispatch({
      type: "ADD_DATA",
      filter_products: data.map((v) => ({
        ...v,
        likes: 0,
        isIncrement: false,
      })),
    });
  }, [data]);

  // const sorting = (value) => {
  //   if (value === "a-z") {
  //     dispatch({
  //       type: "GET_SORT_VALUE",
  //       data: value,
  //       filter_products: [...data].sort((a, b) => a.name.localeCompare(b.name)),
  //     });
  //   } else if (value === "z-a") {
  //     dispatch({
  //       type: "GET_SORT_VALUE",
  //       data: value,
  //       filter_products: [...data].sort((a, b) => b.name.localeCompare(a.name)),
  //     });
  //   } else if (value === "lowest") {
  //     dispatch({
  //       type: "GET_SORT_VALUE",
  //       data: value,
  //       filter_products: [...data].sort((a, b) => a.price1 - b.price1),
  //     });
  //   } else if (value === "highest") {
  //     dispatch({
  //       type: "GET_SORT_VALUE",
  //       data: value,
  //       filter_products: [...data].sort((a, b) => b.price1 - a.price1),
  //     });
  //   }
  // };

  return (
    <div className="brand ps-md-3">
      <div className="banner mb-4">
        <img src={watch} alt="watch" className="img-fluid ps-2 ps-lg-5" />
        <div className="banner-desc">
          <h1 className="mb-3 lh-1">The Great Luxury Watch Sale</h1>
          <p className="mb-4">Upto 70% off* + 40% Additional Retail</p>
          <a
            href="/"
            className="text-reset font-500 text-decoration-underline text-position-under"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="grid mb-3">
          <button
            className={myState.grid_view ? "active me-3" : "me-3"}
            onClick={(e) => dispatch({ type: "grid_view" })}
          >
            <i className="fa fa-border-none"></i>
          </button>
          <button
            className={!myState.grid_view ? "active" : ""}
            onClick={(e) => dispatch({ type: "list_view" })}
          >
            <i className="fa-solid fa-list"></i>
          </button>
        </div>
        <SearchProduct data={data} />
      </div>
      <div className="product-count">
        {myState.products.length} products available
      </div>
      <div className="sort d-flex align-items-center justify-content-end mb-4">
        <p className="text-black-50 me-2">Sort by:</p>
        <select
          name="sort"
          id="sort"
          className="border-none"
          onChange={(e) => {
            dispatch({
              type: "FILTER",
              payload: {
                ...myState.filters,
                sorting_value: e.target.value,
              },
            });
          }}
        >
          {/* <option value="relevance">Relevance</option> */}
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
        </select>
      </div>
      {myState.grid_view ? (
        <Productredux
          sizeFilter={sizeFilter}
          setSizeFilter={setSizeFilter}
          data={myState.products}
        />
      ) : (
        <ListView data={myState.products} />
      )}
      <a href="/" className="whatsapp d-flex align-items-center text-reset">
        <img src={whatsapp} alt="whatsapp" className="img-fluid w-25 me-1" />
        <span className="font-12">
          Whatsapp <span className="d-block">Connect</span>
        </span>
      </a>
    </div>
  );
}

export default Brand;
