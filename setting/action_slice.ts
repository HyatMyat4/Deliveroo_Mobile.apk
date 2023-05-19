import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  Title: string;
  ImageURL: string;
  Short_description: string;
  Price: number;
  Quantity?: number;
  userInfo: {};
}

export interface CounterState {
  clickId: string;
  UserCart: Cart[];
  userInfo: {};
}

const initialState: CounterState = {
  clickId: "",
  UserCart: [],
  userInfo: {},
};

export const action_Slice = createSlice({
  name: "actionslice",
  initialState,
  reducers: {
    clickById: (state, action: PayloadAction<string>) => {
      state.clickId = action.payload;
    },
    userInfoEngin: (state, action: any) => {
      state.userInfo = action.payload;
    },
    UserCartEngin: (state: any, action: PayloadAction<Cart>) => {
      const itemsindex = state.UserCart.findIndex(
        (item: Cart) => item.Title === action.payload.Title
      );

      if (itemsindex >= 0) {
        state.UserCart[itemsindex].Quantity += 1;
      } else {
        const temp = { ...action.payload, Quantity: 1 };
        state.UserCart.push(temp);
      }
    },
    RemoveItemDcreased: (state: any, action: PayloadAction<Cart>) => {
      const itemsindex = state.UserCart.findIndex(
        (item: Cart) => item.Title === action.payload.Title
      );

      if (state.UserCart[itemsindex].Quantity > 0) {
        state.UserCart[itemsindex].Quantity -= 1;
      }
      if (state.UserCart[itemsindex].Quantity === 0) {
        const temp = state.UserCart.filter(
          (items: Cart) => items.Title !== action.payload.Title
        );
        state.UserCart = temp;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { clickById, UserCartEngin, RemoveItemDcreased, userInfoEngin } =
  action_Slice.actions;

export const clickIdC = (state: any) => state.actionslice.clickId;
export const userCartC = (state: any) => state.actionslice.UserCart;
export const userInfoC = (state: any) => state.actionslice.userInfo;
export const TotalPriceC = (state: any) =>
  state.actionslice.UserCart.reduce(
    (total: any, items: Cart | any) =>
      total + Number(items.Price) * items.Quantity,
    0
  );
export const TotalItems = (state: any) =>
  state.actionslice.UserCart.reduce(
    (total: any, items: Cart | any) => total + items.Quantity,
    0
  );

export default action_Slice.reducer;
