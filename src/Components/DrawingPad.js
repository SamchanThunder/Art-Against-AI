import React, { useState, useEffect, useRef } from 'react';

function DrawingPad(){

    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.scale(2,2);
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
    }, [])

    const Start = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const Stop = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const Draw = ({nativeEvent}) => {
        if (!isDrawing){
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    return(<canvas 
        onMouseDown={Start}
        onMouseUp={Stop}
        onMouseMove={Draw}
        ref={canvasRef}
    />);
}

export default DrawingPad;