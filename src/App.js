import React, {useState} from 'react';
import './App.css';

function App() {
  const [zoomValue, setZoomValue] = useState("")

    // const handleClick = () => {
    //     console.log("button clicked")
    //     // ipcRenderer.send(module.CATCH_ON_MAIN, 'ping')
    // }

    return (
    <div className="App">

      <h1>Everyday Millionaire</h1>
      <img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534285838l/41074642.jpg"
          alt="Book Cover"/>

      <h2>Current Zoom:</h2>

      <br />
      <input
          type="range"
          id="zoom"
          min={1} max={5} step={1}
          value={zoomValue} onChange={evt => setZoomValue(evt.target.value)}/>
      <span id="sizeDetector"> </span>
      {/*<button onClick={handleClick}/>*/}

      <h3>{zoomValue}</h3>
    </div>
    );
}

export default App;
