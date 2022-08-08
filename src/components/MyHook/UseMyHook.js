import { useEffect, useState } from "react"
import { useDeps } from "../../context/depContext";
import useAsync from "../../shared/UseAsync";

const useMyHook = () => {
    // const [counter, setCounter] = useState(0);
    // const add = () => {
    //     setCounter(counter + 1)
    // }
    // const min = () => {
    //     setCounter(counter - 1)
    // }
    // return {
    //     counter, add, min
    // }

    const [result, setResult] = useState('');
    const [counter, setCounter] = useState(null);

    const {moreEffectiveService} = useDeps();
    const {execute, status, value, error} = useAsync();
    useEffect(() => {
        setResult(value)
        if (status === 'failed') {
            window.alert(error)
        }
        //deps status dibutuhkan untuk kondisi error
    }, [value, status])

    const add = () => {
        setCounter(counter+1)

        //salah
        // setCounter(counter+1)
        // onExec()
        // setResult(value)
    }

    const min = () => {
        setCounter(counter-2)
    }

    const onExec = async () => {
        if (counter != null) {
            await execute(() => moreEffectiveService.doPrint(counter))
        }
    }
    
    return {
        result, status, add, min
    }
}

export default useMyHook