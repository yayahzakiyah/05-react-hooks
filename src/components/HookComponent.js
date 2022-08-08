import { useDispatch, useSelector } from "react-redux"
import { updateHook } from "../redux/hookAction";
import { hookSelector } from "../redux/hookSelector";

export const HookComponent = () => {
    //ketika ada action yang di-dispatch, useSelectore akan melakukan prev state dengan current state
    //apabila berbeda akan dilakukan re-render
    const num = useSelector(hookSelector);
    const dispatch = useDispatch();
    return(
        <>
            <div>{num}</div>
            <button onClick={()=> dispatch(updateHook(`${Number(num)+1}`))}>
                Update
            </button>
        </>
    )
}