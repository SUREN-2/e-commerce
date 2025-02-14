import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getProductByChildrenCategory, getProductByParentCategory } from "../../fakeData/Products";
import { getProductByName ,getProductByChildrenCategory,getProductByParentCategory} from "../../lib/api";

// Async Thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "search/fetchProducts",
  async ({ path, value }) => {
    let products;
    if (path === "query") {
      products = await getProductByName(value);
    } else {
      products =
        value.includes("--")
          ? await getProductByParentCategory(value.split("--").join(" & "))
          : await getProductByChildrenCategory(value.split("-").join(" "));
    }
    return products;
  }
);

// Initial State
const initialState = {
  value: null,
  path: null,
  product: [],
  status: "idle",
  error: null,
};

// Slice
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      state.path = action.payload.path;
      state.value = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// ✅ Wrapper function to maintain old `searchAction` name
export const searchAction = (payload) => (dispatch) => {
  dispatch(setSearchParams(payload));
  dispatch(fetchProducts(payload));
};

// Export actions and reducer
export const { setSearchParams } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
