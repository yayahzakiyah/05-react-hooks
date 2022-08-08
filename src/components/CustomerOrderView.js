import { useDispatch, useSelector } from "react-redux"
import { addOrder } from "../redux/customerOrder/customerOrderAction"
import { selectSubtotal, selectTax, selectTotal, selectTotalItems} from "../redux/customerOrder/customerOrderSelector"

export const CustomerOrderView = () => {
    const subTotal = useSelector(selectSubtotal)
    const tax = useSelector(selectTax)
    const total = useSelector(selectTotal)
    const totalItems = useSelector(selectTotalItems)
    const dispatch = useDispatch()

    return(
        <>
            <div>Subtotal: {subTotal}</div>
            <div>Tax:{tax}</div>
            <div>Total: {total}</div>
            <div>Total Items: {totalItems}</div>
            <button onClick={() => dispatch(addOrder({
                menuName: 'Nasi Goreng',
                price: 12000
            }))}>Add Order</button>
        </>
    )

}