import { useState } from "react"
import useMyHook from "./UseMyHook"

const MyHook = () => {
    // const [counter, setCounter] = useState(0)
    // const add = () => {
    //     setCounter(counter + 1)
    // }
    // const min = () => {
    //     setCounter(counter - 1)
    // }

    const {counter, add, min} = useMyHook()
    return (
        <div>
            result: {counter}
            <button onClick={add}>+</button>
            <button onClick={min}>-</button>
        </div>
    )
}

export default MyHook;