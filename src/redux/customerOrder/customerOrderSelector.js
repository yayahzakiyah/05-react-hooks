import {createSelector} from 'reselect';

export const customerOrderSelector = state => {
    return state.customerOrderReducer.orders
}
export const selectTotalItems = createSelector(
    customerOrderSelector,
    (items) => items.length
)

export const selectSubtotal = createSelector(
    customerOrderSelector,
    (items) => items.reduce((subtotal, item) => subtotal + item.price, 0)
)
export const selectTax = createSelector(
    selectSubtotal,
    (total) => total * 0.1
)
export const selectTaxAll = createSelector(
    (state) => state.customerOrderReducer.orders.reduce((subtotal, item) => subtotal + item.price, 0),
    (_, tax) => tax,
    (subtotal, tax) => {
        console.log('...', subtotal, tax)
        return subtotal + subtotal * (tax / 100)
    }
)
export const selectTotal = createSelector(
    selectSubtotal,
    selectTax,
    (subtotal, tax) => {
        return subtotal + tax
    }
)