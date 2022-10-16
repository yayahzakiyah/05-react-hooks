import './App.css';
import { useState } from 'react';
import { MoreEffect } from './components/MoreEffect';
import ThemeModifier from './components/ThemeModifier';
import DummyView from './components/DummyView';

const App = () => {
  //pakai sebelum return untuk inisialisai
  // const [dark, setDark]= useState(false)

  // return (
  //   <div style={{backgroundColor: dark? 'black' : 'white' }}>
  //     <p style={{color: dark ? 'white': 'black'}}>Color : {dark?'black' : 'white'} </p>
  //     <button onClick={() => setDark(!dark)}>
  //       set Theme {dark ? 'white' : 'black'}
  //     </button>
  //   </div>
  // );

  // Berikut contoh penggunaan sederhana useEffect
  const [pageId, setPageId] = useState(0);
  return (
      pageId === 0 ? <ThemeModifier onNavigate={() => setPageId(1)}/> : <DummyView onNavigate={() => setPageId(0)}/>
  )

  // return(
  //   <>
  //     <MoreEffect/>
  //   </>
  // )
}

export default App;