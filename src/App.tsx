import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div>
            <header className="App-header">
                <h1>UDCISC275 with Reach Hooks and Types by Amy Mendoza</h1>
            </header>
            <hr></hr>
            <Counter></Counter>
            
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday> 
            <hr />
        </div>
    );
}

export default App;
