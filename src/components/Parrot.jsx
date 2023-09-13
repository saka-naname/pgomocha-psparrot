import React, { memo } from "react";

const sinDeg = (deg) => {
    return Math.sin(deg * 0.01745329251994329576923690768489);
}

const cosDeg = (deg) => {
    return Math.cos(deg * 0.01745329251994329576923690768489);
}

const mat1 = (xPos, deg) => {
    return xPos * (1 - (cosDeg(deg - 40) + 1) / 2.7);
}

const mat2 = (xPos, deg, adj) => {
    return xPos + 65 * (0 + (cosDeg(deg - 60) + 1) / 1.2) + adj * (cosDeg(deg - 60) + 1) / 0.7;
}

const mat3 = (xPos, deg) => {
    return xPos + 83 * (0 + (cosDeg(deg - 55) + 1) / 1.2);
}

const mat4 = (xPos, deg) => {
    return xPos * (1 - (cosDeg(deg - 40) + 1) / 3);
}

const mat5 = (xPos, deg) => {
    return xPos * (1 - (cosDeg(deg - 40) + 1) / 30);
}

const mat6 = (xPos, deg, adj) => {
    return xPos + adj * (cosDeg(deg - 60) + 1) * 0.15;
}

const mat7 = (yPos, deg) => {
    return yPos - Math.abs(yPos) * ((0 + sinDeg(deg - 45)) / 18);
}

const mat8 = (yPos, deg) => {
    return yPos - 400 * ((0 + sinDeg(deg - 45)) / 18);
}


const Parrot = memo((props) => {
    const { fillBody, hue } = props;
    const fillNose = "#7b8c68";
    console.log(sinDeg(hue));

    return (
        <>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 480 480" enableBackground="new 0 0 480 480" xmlSpace="preserve" width={200} height={200}>
                <style>.eye`&lbrace`fill:#000`&rbrace`</style>
                <path d={`M${448 + sinDeg(hue - 40) * 20} 430.5c ${mat1(-2.6, hue)} ${mat7(-2.9, hue)} ${mat1(-6.4, hue)} ${mat7(-7.1, hue)} ${mat1(-11.3, hue)} ${mat7(-12, hue)} ${mat1(-27.1, hue)}${mat7(-27, hue)} ${mat1(-52.4, hue)} ${mat7(-41.3, hue)} ${mat1(-64.7, hue)} ${mat7(-48.7, hue)} ${mat1(-19, hue)} ${mat7(-11.4, hue)} ${mat1(-45.3, hue)} ${mat7(-29.2, hue)} ${mat1(-76, hue)} ${mat7(-57.3, hue)} ${mat4(1.3, hue)} ${mat7(-7.3, hue)} ${mat4(2.3, hue)} ${mat7(-15.6, hue)} ${mat4(2.7, hue)} ${mat7(-24.7, hue)} ${mat4(0.6, hue)} ${mat7(-15.7, hue)} ${mat4(1.3, hue)} ${mat7(-29.5, hue)} ${mat4(-3, hue)} ${mat7(-40.6, hue)} ${mat4(-1.3, hue)} ${mat7(-4.7, hue)} ${mat4(-4, hue)} ${mat7(-12, hue)} ${mat4(-9.7, hue)} ${mat7(-19.4, hue)} ${mat4(-7.3, hue)} ${mat7(-9.5, hue)} ${mat4(-15.9, hue)} ${mat7(-14.4, hue)} ${mat4(-20.7, hue)} ${mat7(-16.7, hue)} ${mat4(-0.4, hue)} ${mat7(-2.2, hue)} ${mat4(-0.9, hue)} ${mat7(-4.4, hue)} ${mat4(-1.3, hue)} ${mat7(-6.7, hue)} ${mat4(-2.2, hue)} ${mat7(-10.8, hue)} ${mat4(-4.5, hue)} ${mat7(-21.5, hue)} ${mat5(-7, hue)} ${mat7(-31.9, hue)} ${mat4(-5.2, hue)} ${mat7(-9.2, hue)} ${mat5(-22.3, hue)} ${mat7(-36.8, hue)} ${mat5(-57.7, hue)} ${mat7(-51.4, hue)} ${mat5(-5.8, hue)} ${mat7(-2.4, hue)} ${mat5(-45.6, hue)} ${mat7(-18.2, hue)} ${mat5(-88, hue)} ${mat7(-.7, hue)}C${mat2(89.4, hue, 13.8)} ${mat8(129.6, hue)} ${mat2(75.6, hue, 11.3)} ${mat8(143.9, hue)} ${mat2(70, hue, 11.3)} ${mat8(149.9, hue)} ${mat2(58.2, hue, 8.7)} ${mat8(162.4, hue)} ${mat2(52, hue, 8.7)} ${mat8(174.2, hue)} ${mat2(43.3, hue, 6.7)} ${mat8(190.5, hue)} c${mat6(-6.7, hue, 12.7)} ${mat7(12.7, hue)} ${mat6(-13.8, hue, 0)} ${mat7(28.3, hue)} ${mat6(-20, hue, 46.7)} ${mat7(46.7, hue)} ${mat6(-1.9, hue, -1.1)} ${mat7(1.1, hue)} ${mat6(-6, hue, -3.7)} ${mat7(3.7, hue)} ${mat6(-9, hue, -8.8)} ${mat7(8.8, hue)} ${mat6(-3.4, hue, -5.8)} ${mat7(5.8, hue)} ${mat6(-3.4, hue, -11.3)} ${mat7(11.3, hue)} ${mat6(-3.3, hue, -13.5)} ${mat7(13.5, hue)} ${mat6(-.1, hue, -8.8)} ${mat7(8.8, hue)} ${mat6(.5, hue, -19.3)} ${mat7(19.3, hue)} ${mat6(2.5, hue, -31)} ${mat7(31, hue)} ${mat6(1.6, hue, -9.1)} ${mat7(9.1, hue)} ${mat6(3.7, hue, -17.1)} ${mat7(17.1, hue)} ${mat6(6, hue, -24)} ${mat7(24, hue)} ${mat6(2.4, hue, -5.4)} ${mat7(5.4, hue)} ${mat6(5, hue, -9)} ${mat7(9.1, hue)} ${mat6(7, hue, -11.5)} ${mat7(11.5, hue)} ${mat6(1.3, hue, -1.6)} ${mat7(1.6, hue)} ${mat6(2.3, hue, -2.6)} ${mat7(2.6, hue)} ${mat6(3.5, hue, -4.5)} ${mat7(4.5, hue)} ${mat6(2.3, hue, -3.7)} ${mat7(3.7, hue)} ${mat6(3, hue, -7.4)} ${mat7(7.4, hue)} ${mat6(3.3, hue, -10)} ${mat7(10, hue)} C ${mat2(10.1, hue, 3)} 380 ${mat2(8, hue, 2)} 360 15 430.5H${448 + sinDeg(hue - 40) * 20}z`} fill={fillBody} stroke="#000" strokeWidth={14} strokeLinejoin="round" strokeMiterlimit={10} />
                <path d={`M${mat2(32.8, hue, 4.5)} ${mat8(350.6, hue) * 0.98}c21.9 22.2 42.9 35.2 54.4 39.5 8.9 3.3 18.6 5.4 18.6 5.4 5.6 1.2 10.6 1.9 14.5 2.4 4.2 0 11.9.5 19.5 5 2.5 1.5 4.5 3.1 6.1 4.6`} fill="none" stroke="#000" strokeWidth={12} strokeLinecap="round" strokeMiterlimit={10} />
                <ellipse className="eye" cx={mat3(111, hue)} cy={mat8(188.3, hue)} rx="13" ry="21"/>
                <ellipse className="eye" cx={mat3(234, hue)} cy={mat8(188.3, hue)} rx="13" ry="21"/>
                <path d={`M${mat3(181.7, hue)} ${mat8(323.8, hue)}c-.9-.3-1.7-.6-2.6-.9-2.2-1-4.2-2.3-5.9-3.9-4.3-5.8-8.4-12-11.9-18.3-5-8.8-9.3-18.2-12.7-27.8-1.8-12.2-2.8-24.6-3.2-36.7-.1-4.6-.1-6.2 0-10.1.1-3.2.2-8.1.3-17.3 0-2.5.1-6.7.9-12.1.2-1.4.5-2.9.8-4.3.6-.4 1.3-.8 2-1.1 1.7-.7 3.2-.8 4.3-.9 5.4-.3 11.3-.5 17-.7h29.2c3 2.5 5.6 5.4 7.8 8.6 2 3.1 3.6 6.4 4.8 9.9.5 4.5.8 8.9.9 13.2v4.6c0 1.5-.1 2.9 0 5.9.1 1.9.2 3.5.3 4.8.2 2.5.3 3.9.1 6.2-.2 2-.5 4-1 6-3.3 6.6-6.3 13.3-8.9 20-1.9 5-3.5 8.9-4.9 14.4-.8 3.2-1.2 5.2-1.5 7.1-.3 1.7-.6 3.4-1.2 5.9l-.2.9c-.7 3.1-1.9 8.2-4 12.5-2.7 5.3-6.2 10-10.4 14.1z`} fill={fillNose} stroke="#000" strokeWidth={12} strokeLinecap="round" strokeMiterlimit={10} /></svg>
        </>
    );
});

export default Parrot;
