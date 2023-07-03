import {createReducer, on} from "@ngrx/store";
import {Product} from "../model";
import * as productActions from "./product.actions";

export const initialState: readonly Product[] = [];

export const productReducer = createReducer(
  initialState,

  on(productActions.addProduct, (state, {product}) => (
    [...state, product]
  )),

  on(productActions.removeProduct, (state, {id}) => (
    state.filter(product => product.id !== id)
  ))
)
