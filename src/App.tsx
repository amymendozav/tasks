import React from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col
                            style={{
                                width: "100%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        >
                            Column 1
                        </Col>
                        <Col
                            style={{
                                width: "50%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        >
                            Column 2
                        </Col>
                        <Col
                            style={{
                                width: "10%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        >
                            Column 3
                        </Col>
                    </Row>
                </Container>
            </div>
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
