import React from "react";
import Watch from "../Watch/Watch";
function Display(props) {
    console.log(props)
    return (
        <div>
            <h1>Counter: {props.count}</h1>
            <Watch count={props.count}></Watch>
        </div>
    )
}
export default Display;