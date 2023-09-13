import React, { useEffect, useState } from "react"

import Parrot from "../components/Parrot";

const photoshop = require("photoshop");

export const PsParrot = () => {
    const [fillBody, setFillBody] = useState("#3dbfef");

    const onForegroundColorChanged = React.useCallback(
        (e, d) => {
            console.log(photoshop.app.foregroundColor.rgb.hexValue);
            setFillBody("#" + photoshop.app.foregroundColor.rgb.hexValue);
        },
        [photoshop.app.foregroundColor]
    );

    useEffect(() => {
        const intervalId = setInterval(onForegroundColorChanged, 1000/30);
        return () => {
            clearInterval(intervalId);
        }
    });

    return (
        <>
            <Parrot fillBody={fillBody}/>
        </>
    )
}
