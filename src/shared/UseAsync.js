import { useState } from "react";

export const useAsync = () => {
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState(null)
    const [error, setError] = useState(null)

    const execute = async (asyncFn) => {
        setStatus("Loading")
        setValue(null);
        setError(null);
        try{
            const response = await asyncFn()
            setValue(response);
            setValue("success")
        } catch (e) {
            setError(e.message);
            setStatus("failed")
        }
    }
    return {execute, status, value, error}
}

export default useAsync