import { Product, ProductGroup } from './../model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCountProducts = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    return state.length;
  }
);

export const selectTotalPrice = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    let totalPrice = 0;
    state.forEach((product) => (totalPrice += product.price));
    return totalPrice;
  }
);

export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Product[]) => {
    const map: Map<number, ProductGroup> = new Map();
    state.forEach((p) => {
      map.get(p.id)
        ? (map.get(p.id) as ProductGroup).count++
        : map.set(p.id, { product: p, count: 1 });
    });
    const sortMap = new Map([...map.entries()].sort());
    return Array.from(sortMap.values());
  }
);
