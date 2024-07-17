import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useSelector, useDispatch } from "react-redux";

function Sidebar({ sizeFilter, setSizeFilter, data }) {
  const myState = useSelector((state) => state.changeTheNumber);

  const { products, filters } = myState;
  const dispatch = useDispatch();

  const getColor = (color) => {
    dispatch({
      type: "FILTER",
      payload: {
        ...filters,
        color: color,
      },
    });
  };

  const slider = (event) => {
    dispatch({
      type: "FILTER",
      payload: {
        ...filters,
        rangePrice: event,
      },
    });
  };

  const clearFilter = (event) => {
    event.preventDefault();
    dispatch({
      type: "CLEARFILTER",
    });
  };

  return (
    <div className="sidebar mb-4">
      <ol className="breadcrumb mb-3">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Watches
        </li>
      </ol>
      <h4 className="d-flex align-items-center mb-4">
        Watches <span className="watchcount ms-4">(1150 items)</span>
      </h4>
      <div className="filter border-end pe-3">
        <ul className="filter-btn d-flex justify-content-between mb-2">
          <li>
            <Tippy content="Filter">
              <a href="/" className="text-reset">
                <i className="fa fa-filter me-2" aria-hidden="true"></i>Filter
              </a>
            </Tippy>
          </li>
          <li>
            <a
              href="/"
              className="text-reset text-decoration-underline"
              onClick={(e) => clearFilter(e)}
            >
              Clear All
            </a>
          </li>
        </ul>
        <h6 className="font-600 mb-3">Case Size</h6>
        <ul className="case-size border-bottom d-flex flex-wrap mb-3">
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk1"
              name="chk1"
              checked={sizeFilter.includes("<17")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "<17"]
                    : sizeFilter.filter((v) => v !== "<17")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk1">
              <i className="fa fa-angle-left me-1" aria-hidden="true"></i>17mm
            </label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk2"
              name="chk2"
              value="value2"
              checked={sizeFilter.includes("17-19")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "17-19"]
                    : sizeFilter.filter((v) => v !== "17-19")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk2">17 - 19mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk3"
              name="chk3"
              value="value3"
              checked={sizeFilter.includes("20-22")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "20-22"]
                    : sizeFilter.filter((v) => v !== "20-22")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk3">20 - 22mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk4"
              name="chk4"
              value="value4"
              checked={sizeFilter.includes("23-25")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "23-25"]
                    : sizeFilter.filter((v) => v !== "23-25")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk4">23 - 25mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk5"
              name="chk5"
              value="value5"
              checked={sizeFilter.includes("26-28")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "26-28"]
                    : sizeFilter.filter((v) => v !== "26-28")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk5">26 - 28mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk6"
              name="chk6"
              value="value6"
              checked={sizeFilter.includes("29-31")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "29-31"]
                    : sizeFilter.filter((v) => v !== "29-31")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk6">29 - 31mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk7"
              name="chk7"
              value="value7"
              checked={sizeFilter.includes("32-34")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "32-34"]
                    : sizeFilter.filter((v) => v !== "32-34")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk7">32 - 34mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk8"
              name="chk8"
              value="value8"
              checked={sizeFilter.includes("34-36")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "34-36"]
                    : sizeFilter.filter((v) => v !== "34-36")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk8">34 - 36mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk9"
              name="chk9"
              value="value9"
              checked={sizeFilter.includes("37-38")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "37-38"]
                    : sizeFilter.filter((v) => v !== "37-38")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk9">37 - 38mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk10"
              name="chk10"
              value="value10"
              checked={sizeFilter.includes("39-40")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "39-40"]
                    : sizeFilter.filter((v) => v !== "39-40")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk10">39 - 40mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk11"
              name="chk11"
              value="value11"
              checked={sizeFilter.includes("41-42")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "41-42"]
                    : sizeFilter.filter((v) => v !== "41-42")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk11">41 - 42mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk12"
              name="chk12"
              value="value12"
              checked={sizeFilter.includes("51-52")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "51-52"]
                    : sizeFilter.filter((v) => v !== "51-52")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk12">51 - 52mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk13"
              name="chk13"
              value="value13"
              checked={sizeFilter.includes("61-62")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "61-62"]
                    : sizeFilter.filter((v) => v !== "61-62")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk13">61 - 62mm</label>
          </li>
          <li className="me-2 mb-3">
            <input
              type="checkbox"
              id="chk14"
              name="chk14"
              value="value14"
              checked={sizeFilter.includes("63-64")}
              onChange={(e) =>
                setSizeFilter(
                  e.target.checked
                    ? [...sizeFilter, "63-64"]
                    : sizeFilter.filter((v) => v !== "63-64")
                )
              }
              className="form-check-input me-2"
            />
            <label htmlFor="chk14">63 - 64mm</label>
          </li>
        </ul>
        <div className="availablity mb-3">
          <h6 className="font-600 mb-3">Colors Available</h6>
          <ul className="d-flex align-items-center color-palette">
            <li className="me-3" onClick={() => getColor("all")}>
              All
            </li>
            {products.map((v, index) => {
              const color = Array.from(
                new Set(products.map((product) => product.color))
              );
              {
                /* console.log(color[index], "a") */
              }
              return (
                <li
                  className="me-3"
                  key={index}
                  style={{ backgroundColor: color[index] }}
                  onClick={() => getColor(v.color)}
                >
                  {/* { v.color} */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="gender mb-3">
          <h6 className="font-600 mb-3">Gender</h6>
          <ul className="custom-check border-bottom">
            <li className="mb-3">
              <input
                type="checkbox"
                id="men"
                name="men"
                value="men"
                className="form-check-input me-2"
              />
              <label htmlFor="men">Men</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="women"
                name="women"
                value="women"
                className="form-check-input me-2"
              />
              <label htmlFor="women">Women</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="unisex"
                name="unisex"
                value="unisex"
                className="form-check-input me-2"
              />
              <label htmlFor="unisex">Unisex</label>
            </li>
          </ul>
        </div>
        <div className="brands mb-3 border-bottom pb-3">
          <h6 className="font-600 mb-3">Brands</h6>
          <ul className="custom-check">
            <li className="mb-3">
              <input
                type="checkbox"
                id="rolex"
                name="rolex"
                value="rolex"
                className="form-check-input me-2"
              />
              <label htmlFor="rolex">Rolex</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="apple"
                name="apple"
                value="apple"
                className="form-check-input me-2"
              />
              <label htmlFor="apple">Apple</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="aspen"
                name="aspen"
                value="aspen"
                className="form-check-input me-2"
              />
              <label htmlFor="aspen">Aspen</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="armaniExchange"
                name="armaniExchange"
                value="armaniExchange"
                className="form-check-input me-2"
              />
              <label htmlFor="armaniExchange">Armani Exchange</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="ball"
                name="ball"
                value="ball"
                className="form-check-input me-2"
              />
              <label htmlFor="ball">Ball</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="hugo"
                name="hugo"
                value="hugo"
                className="form-check-input me-2"
              />
              <label htmlFor="hugo">Hugo Boss</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="chanel"
                name="chanel"
                value="chanel"
                className="form-check-input me-2"
              />
              <label htmlFor="chanel">Chanel</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="hublot"
                name="hublot"
                value="hublot"
                className="form-check-input me-2"
              />
              <label htmlFor="hublot">Hublot</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="cartier"
                name="cartier"
                value="cartier"
                className="form-check-input me-2"
              />
              <label htmlFor="cartier">Cartier</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="guess"
                name="guess"
                value="guess"
                className="form-check-input me-2"
              />
              <label htmlFor="guess">Guess</label>
            </li>
          </ul>
          <a href="/" className="text-orange text-decoration-underline font-12">
            View All
          </a>
        </div>
        {/* <div className="price mb-3">
          <h6 className="font-600 mb-3">Price</h6>
          <ul className="custom-check border-bottom">
            <li className="mb-3">
              <input
                type="checkbox"
                id="ten"
                name="ten"
                value="ten"
                className="form-check-input me-2"
              />
              <label htmlFor="ten">Under ₹10000</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="twenty"
                name="twenty"
                value="twenty"
                className="form-check-input me-2"
              />
              <label htmlFor="twenty">Under ₹20000</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="thirty"
                name="thirty"
                value="thirty"
                className="form-check-input me-2"
              />
              <label htmlFor="thirty">₹25000 - ₹30000</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="fifty"
                name="fifty"
                value="fifty"
                className="form-check-input me-2"
              />
              <label htmlFor="fifty">₹35000 - ₹50000</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="lakh"
                name="lakh"
                value="lakh"
                className="form-check-input me-2"
              />
              <label htmlFor="lakh">₹50000 - ₹100000</label>
            </li>
            <li className="mb-3">
              <input
                type="checkbox"
                id="aboveLakh"
                name="aboveLakh"
                value="aboveLakh"
                className="form-check-input me-2"
              />
              <label htmlFor="aboveLakh">Above ₹100000</label>
            </li>
          </ul>
        </div> */}
        <div className="price">
          <h5 className="mb-4">Price</h5>
          <h6>₹{filters.rangePrice}</h6>
          <input
            type="range"
            className="w-100"
            value={filters.rangePrice}
            onChange={(e) => slider(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
