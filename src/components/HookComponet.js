import { useDispatch, useSelector } from "react-redux"
import { hookSelector } from "../redux/hookSelector"

export const HookComponent = () => {
    // Ketika ada action yang di-dispatc, useSelector akan melakukan compare prev state dengan curret state
    // Apabila berbeda, akan dilakukan re-render
    const num = useSelector(hookSelector)
    const dispatch = useDispatch()
    return (
        <>
            <div>{num}</div>
            <button onClick={ () => dispatch(updateHook(`${Number(num) + 1}`))}>Update</button>
        </>
    )
}