import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <> 
    <div className='rod'></div>
      <div className='lightsBox'> 
        <div
          onClick={() => setColor("red")}
          className={`red ${color === "red" ? "shine" : ""}`}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={`yellow ${color === "yellow" ? "shine" : ""}`}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={`green ${color === "green" ? "shine" : ""}`}
        ></div>
      </div>
       
    </>
  );
};

export default TrafficLight;