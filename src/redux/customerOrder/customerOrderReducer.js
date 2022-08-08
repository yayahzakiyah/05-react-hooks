const orderInitialState = {
    orders: []
}

export function customerOrderReducer(state=orderInitialState, action) {
    switch (action.type) {
        case 'add_order':
            return {orders: [...state.orders, action.payload.order]};
        default:
            return state
    }
}