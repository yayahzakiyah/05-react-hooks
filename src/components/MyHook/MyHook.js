import React from 'react';
import useMyHook from "./UseMyHook";

const MyHook = props => {
    // const [counter, setCounter] = useState(0);
    // const add = () => {
    //     setCounter(counter + 1)
    // }
    // const min = () => {
    //     setCounter(counter - 1)
    // }
    const {result, status, add, min} = useMyHook();
    const ButtonGroup = () => (
        <>
            <button onClick={add}>+</button>
            <button onClick={min}>-</button>
        </>
    )
    console.log(result);
    return (
        <>
            {(status === 'idle' || status === 'failed') && <ButtonGroup/>}
            {status === 'loading' && <div>LOADING</div>}
            {status === 'success' &&
                <div>
                    result : {result}
                    <ButtonGroup/>
                </div>
            }
        </>
    );
};

export default MyHook;