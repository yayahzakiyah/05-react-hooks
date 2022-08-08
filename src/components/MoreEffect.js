import { useEffect, useState } from "react"
import { useDeps } from "../context/depContext"

export const MoreEffect = () => {
    const {MoreEffectService: {doPrint}} = useDeps()

    const [result, setResult] = useState('')
    const [id, setId] = useState('10')

    useEffect( () => {
        setResult(doPrint(id));
        // console.log('1');
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

        return (() => console.log('call'))
       
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