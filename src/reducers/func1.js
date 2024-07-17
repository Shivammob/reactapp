const initialState = {
  sorting_value: "lowest",
  products: [],
  filter_products: [],
  grid_view: true,
  searchTerm: '',
  rangePrice: 0,
  minPrice: 0,
  maxPrice: 0,
};

const changeTheNumber = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case "ADD_DATA":
      const maxPrice = Math.max(...action.filter_products.map(p => p.price));
      return { 
        ...state, 
        filter_products: action.filter_products, 
        products: action.filter_products, 
        maxPrice,
        filter: {
          ...state.filter,
          maxPrice
        }
      };

    case "FILTER":
      const { searchTerm, color, rangePrice, sorting_value } = action.payload;
     
      let filteredProducts = [...state.products];
      console.log(filteredProducts, "search")
      // Apply search term filter
      if (searchTerm) {
        console.log(searchTerm, "search")
        filteredProducts = filteredProducts.filter(
          v => v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               v.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Apply color filter
      if (color && color !== "all") {
        filteredProducts = filteredProducts.filter(v => v.color.includes(color));
      }

      // Apply price range filter
      if (rangePrice) {
        filteredProducts = filteredProducts.filter(
          product => product.price >= state.minPrice && product.price <= rangePrice
        );
      }

      // Apply sorting
      switch (sorting_value) {
        case "lowest":
          filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "highest":
          filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "a-z":
          filteredProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "z-a":
          filteredProducts = filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }

      return {
        ...state,
        filter_products: filteredProducts,
        filter: {
          ...state.filter,
          searchTerm,
          color,
          rangePrice,
        },
        sorting_value,
      };

    case "grid_view":
      return {
        ...state,
        grid_view: true,
      };

    case "list_view":
      return {
        ...state,
        grid_view: false,
      };

    case "INCREMENT":
      return {
        ...state,
        filter_products: state.products.map((product) => {
          if (product.id === action.key) {
            return {
              ...product,
              likes: product.likes + 1,
              isIncrement: true,
            };
          }
          return product;
        }),
      };

    case "DECREMENT":
      return {
        ...state,
        filter_products: state.products.map((product) => {
          if (product.id === action.key) {
            return {
              ...product,
              likes: product.likes - 1,
              isIncrement: false,
            };
          }
          return product;
        }),
      };

    case "CLEARFILTER":
      return {
        ...state,
        filter_products: state.products,
        filter: {
          ...state.filter,
          searchTerm: "",
          color: "all",
          rangePrice: state.maxPrice,
        },
        sorting_value: "lowest",
      };

    default:
      return state;
  }
};

export default changeTheNumber;




dispatch({
  type: "FILTER",
  payload: {
    searchTerm: 'example',
    color: 'red',
    rangePrice: 100,
    sorting_value: 'lowest'
  }
});