import React, { useRef, useEffect} from 'react'

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

class Dot {
  static dots = [];
  constructor(){
    this.uid = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.x = (window.innerWidth/2) + (Math.floor(Math.random() * 201) -100);
    this.y = (window.innerHeight/2) + (Math.floor(Math.random() * 201) -100);
    this.size = (Math.floor(Math.random() * 100));
    this.color = random_rgba();
  }
}

export function Secret(){
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2,2);
    context.fillStyle = '#ffffff';
    contextRef.current = context;

    const updateFrame = () => {
      Dot.dots.push(new Dot);
      let i = -1;
      Dot.dots.forEach((dot)=>{
        i++;
        if(dot.size <= 1){
          Dot.dots.splice(i, 1);
          return
        };
        dot.size -= 0.55;
        if(dot.x > window.innerWidth/2){
          dot.x += 2;
        }else {dot.x -= 2;}
        if(dot.y > window.innerHeight/2){
          dot.y += 2;
        }else {dot.y -= 2;}
      });
    };

    let requestID;
    const renderFrame = () => {
      updateFrame();
      contextRef.current.clearRect(0,0,canvas.width,canvas.height);
      Dot.dots.forEach((dot)=>{
        contextRef.current.fillStyle = dot.color;
        contextRef.current.beginPath();
        contextRef.current.arc(dot.x,dot.y,dot.size,0, 2 * Math.PI);
        contextRef.current.fill();
      });
      requestID = requestAnimationFrame(renderFrame);
    };

    renderFrame();
    
    return () => {
      cancelAnimationFrame(requestID);
    };

  },[]);
  
  return (
    <canvas ref = {canvasRef} style={{backgroundColor:'black'}}/>
  )
}