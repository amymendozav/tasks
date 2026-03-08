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

        // <div className="App">
        //     <header className="App-header">
        //         UD CISC275 with React Hooks and TypeScript - Amy Mendoza
        //     </header>

        //     <p>
        //         Edit <code>src/App.tsx</code> and save. This page will
        //         automatically reload.
        //     </p>
        //     <p>
        //         Hello World!
        //     </p>
        // </div>
    );
}

export default App;
