import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import './slider.css';
import {useContext} from 'react';
import BackButton from "./BackButton";

function Settings() {
    const settingsInfo = useContext(SettingsContext);

    return(
        <div style={{textAlign:'left'}}>
            <label>work: {settingsInfo.workMinutes}:00 min.</label>
            <ReactSlider className={'slider'} 
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={90}/>
            <label>break: {settingsInfo.breakMinutes}:00 min.</label>
            <ReactSlider className={'slider'} 
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={90}/>

            <div style={{textAlign:'center', marginTop:'20px'}}>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
            </div>
        </div>
    );
}

export default Settings;