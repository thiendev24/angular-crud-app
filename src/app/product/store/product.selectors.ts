import {createFeatureSelector} from "@ngrx/store";
import {Product} from "../model";

export const productState = createFeatureSelector<Product[]>('productStore');
