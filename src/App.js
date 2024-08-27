import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${word}`);
  }, [word]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input type="text" onChange={
            (e) => {setTemp(e.target.value)}}
            placeholder="Enter text to encode" />
          <button className="button" 
            onClick={handleClick}>
            Generate
          </button>
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}

export default App;
