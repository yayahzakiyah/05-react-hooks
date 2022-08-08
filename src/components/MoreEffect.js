import { useEffect, useState } from "react"
import { MoreEffectService } from "../services/MoreEffectService"

export const MoreEffect = () => {
    const {doPrint} = MoreEffectService()
    // //cara 1
    // const [result, setResult] = useState()

    //useEffect itu dipanggil ketik ada perubahan (id)
    // //useEffect
    // useEffect( () => {
    //     setResult(doPrint('1'))
    //     console.log('1');
    // }, [])
    // return (
    //     <>
    //         <h1>Print : {result}</h1>
    //     </>
    // )

    const [result, setResult] = useState('')
    const [id, setId] = useState('10')

    useEffect( () => {
        setResult(doPrint(id));
        console.log('1');
        //deps => penting, mengatur kapan use effect dijalankan
        //jika tidak ada akan terus dijalankan, useEffect dipanggil terus
        //useState akan merender ketika terjadi perubahan tapi jika tidak ada perubahan state tidak akan merender
        //beda kasusnya kalo kita pakai doPrint diganti Math.Random akan dijalankan terus karena Math.Random terus berubah
        //array dikosong dideps akan dijalankan sekali di didMount dan 
        /*
            Deps kosong = any changes
            Deps [] = didMount only
            Deps [value] = didUpdate when value change 
        */
       
    }, [id]) //semua tergantung deps, ini menandakan perubahan berdasarkan id
    return (
        <>
            <input type='type' value={id} onChange={(e) => {
                setId(e.target.value)}}/>
            {/* <button onClick={() => setId('10')}>Click</button> */}
            <h1>Print : {result}</h1>
        </>
    )
}