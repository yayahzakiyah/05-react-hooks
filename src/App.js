import './App.css';
import { useState } from 'react';
import { MoreEffect } from './components/MoreEffect';
import { ThemeModifier } from './components/ThemeModifier';
import { DummyView } from './components/DummyView';
import { HookComponent } from './components/HookComponent';

const App = () => {
  // const [pageID, setPageId] = useState(0)
  // return(
  //   pageID === 0 ? <ThemeModifier onNavigate = {() => setPageId()}/>:
  //   <DummyView onNavigate={() => setPageId(0)}/>
  // )

  return (
    <HookComponent/>
  )
}

export default App;