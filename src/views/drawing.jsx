import React, { useRef, useEffect, useState} from 'react'
import paper_texture from '../img/paper_texture.png';
import { useDrawingStore } from '../store';

export function Drawing(){
  const [dataURL, saveDataURL, loadDataURL] = useDrawingStore(state => [state.dataURL, state.saveDataURL, state.loadDataURL]);
  
  const handleSave = (url) => {
    saveDataURL(url);
  }
  const handleLoad = () => {
    
    const src = loadDataURL();
    console.log(src);
  }


  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const divWidth = 512;
  const divHeight = 640;

  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = divWidth * 2;
    canvas.height = divHeight * 2;
    canvas.style.width = `${divWidth}px`;
    canvas.style.height = `${divHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2,2);
    context.lineCap = 'round';
    context.strokeStyle = '#002e2d';
    context.lineWidth = 2;
    contextRef.current = context;
  },[]);
  
  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  }
  const endDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  }
  const draw = ({nativeEvent}) => {
    if(!isDrawing){return};
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  }

  return (
    <>
    <div style = {{
      backgroundImage:`url(${paper_texture})`,
      position:'relative',
      top:'50px',
      margin:'0 auto',
      width: divWidth,
      height: divHeight,
      boxShadow: '4px 4px 16px rgba(128,128,128,90)'
      }}>
    <canvas
    onMouseDown = {startDrawing}
    onMouseUp = {endDrawing}
    onMouseMove = {draw}
    ref = {canvasRef}
    />
    <button onClick={()=>{
      handleSave(canvasRef.current.toDataURL());
    }}>Save</button>
    <input type='text' value={loadDataURL()}></input>
    </div>
    </>
  )
}