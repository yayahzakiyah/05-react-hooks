import { useEffect, useState } from "react"

export const ThemeModifier = (props) => {
    const [dark, setDark] = useState(false)

    //sama dengan componentDidMount dan componentDidUpdate
    useEffect( () => {
        document.title = `Theme ${dark ? 'black' : 'white'}`

        //ketiika tidak diberikan apa2 (effect) aakan selalu dipanggil
        //kketika diberikan array kosong use effect hanya sekali dijalankan saat render pertama
        //ketika diberi array dengan state value, useeffect dijalankan ketika state berubah
        return () => {
            console.log('component will unmount');
        }         
    })

    return (
        <div style={{backgroundColor: dark? 'black' : 'white' }}>
            <p style={{color: dark ? 'white': 'black'}}>Color : {dark?'black' : 'white'} </p>
            <button onClick={() => setDark(!dark)}>
                set Theme {dark ? 'white' : 'black'}
            </button>
            <button onClick={props.onNavigate}>go to dummy view</button>
        </div>
  );
}