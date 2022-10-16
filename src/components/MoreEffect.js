import { useEffect, useState } from "react"
import { useDeps } from "../context/depContext"

export const MoreEffect = () => {
    const {moreEffectService: {doPrint}} = useDeps()
    // const {doPrint} = MoreEffectService()
    // cara yang salah, result tidak akan tercetal di browser, diperlukan state
    // let result = 'empty';
    // useEffect(() => {
    //     result = doPrint('1')
    //     console.log(result);
    // })
    // return (
    //     <>
    //         <h1>Print:{result}</h1>
    //     </>
    // )

    //Hati2, Backend akan di-flooding dengan request
    //karena useEffect === componentDidMount & ComponentDidUpdate
    // const[result, setResult] = useState('')
    // useEffect(() => {
    //     setResult(doPrint('1'));
    //     console.log('1');
    // }, [])
       
   //Cara yang banyak digunakan
//    const [result, setResult] = useState();
//    useEffect(() => {
//     setResult(doPrint(id));
//     console.log('1');
//    },[]);

//    return (
//     <>
//         <h1>Print:{result}</h1>
//     </>
//    )

    //useEffect akan dipanggil lagi ketika ada perubahan id
    const [result, setResult] = useState('');
    const [id, setId] = useState('')
    useEffect(() => {
        setResult(doPrint(id))
        return () => console.log('1');
    }, [id])

    return (
        <>
            <button onClick={() => setId('12')}>Click</button>
            <h1>Print:{result}</h1>
        </>
    )
}