import {createAction, props} from "@ngrx/store";
import {Product} from "../model";

export const addProduct = createAction(
  '[Product Component] Add Product',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Product Component] Remove Product',
  props<{ id: number }>()
);
