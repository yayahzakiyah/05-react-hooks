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

    // const {counter, add, min} = useMyHook()
    // return (
    //     <div>
    //         result: {counter}
    //         <button onClick={add}>+</button>
    //         <button onClick={min}>-</button>
    //     </div>
    // )

    const {result, status, add, min} = useMyHook();
    const ButtonGroup =() => (
        <>
            <button onClick={add}>+</button>
            <button onClick={min}>-</button>
        </>
    )

    return(
        <>
            {(status === 'idle' || status==='failed') && <ButtonGroup/>}
            {status === "loading" && <div>Loading</div>}
            {status === 'succes' &&
                <div>
                    result: {result}
                    <ButtonGroup/>  
                </div>}

        </>
    )
}

export default MyHook;