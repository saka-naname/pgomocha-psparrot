import React, { useEffect, useState } from "react"

import Parrot from "../components/Parrot";

const photoshop = require("photoshop");

export const PsParrot = () => {
    const [fillBody, setFillBody] = useState("#3dbfef");
    const [hue, setHue] = useState(220);

    const onForegroundColorChanged = React.useCallback(
        (e, d) => {
            setFillBody("#" + photoshop.app.foregroundColor.rgb.hexValue);
            setHue(photoshop.app.foregroundColor.hsb.hue);
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
            <Parrot fillBody={fillBody} hue={hue}/>
        </>
    )
}
