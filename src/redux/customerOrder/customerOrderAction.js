export function addOrder(newOrder) {
    return {
        type: 'add_order',
        payload: {
            order: newOrder
        }
    }
}