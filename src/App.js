import React from 'react';
import './App.css';
import Settings from './Settings';
import Timer from "./Timer";
import {useState} from "react";
import SettingsContext from './SettingsContext';

function App() {
    const [showSettngs, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(25);
    const [breakMinutes, setBreakMinutes] = useState(5);

    return (
    <main>
        <SettingsContext.Provider value={{
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
        }}>
        {showSettngs ? <Settings/> : <Timer />}
        </SettingsContext.Provider>
    </main>
  );
}

export default App;
