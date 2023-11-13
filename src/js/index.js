//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";
import { faL } from "@fortawesome/free-solid-svg-icons";

//const [pause, setPause] = useState(false);

let pause = false;
let stop = false;

let counter = 0;

let objetc = {};
let listDigits = [];

const handlePause = () => {
    pause = true;
}

const handleResume = () => {
    pause = false;
}

const handleStop = () => {
    console.log(stop)
    stop = true;
}

setInterval(() => {

    if (!pause && !stop) {
        const six = Math.floor((counter / 100000) % 10);
        const five = Math.floor((counter / 10000) % 10);
        const four = Math.floor((counter / 1000) % 10);
        const three = Math.floor((counter / 100) % 10);
        const two = Math.floor((counter / 10) % 10);
        const one = Math.floor((counter / 1) % 10);
        counter++;

        objetc.six = six;
        objetc.five = five;
        objetc.four = four;
        objetc.three = three;
        objetc.two = two;
        objetc.one = one;

        listDigits = [...Object.entries(objetc)];

        ReactDOM.render(<SecondsCounter
            listDigits={listDigits}
            pause={pause}
            handlePause={handlePause}
            handleResume={handleResume}
            handleStop={handleStop}
        />,
            document.querySelector("#app"));
    } else if (stop) {

        counter = 0;
        stop = false;
        pause = false;

    } 

}, 1000);

