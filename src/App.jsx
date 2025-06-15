import React, {useState} from 'react'
import './App.css'

const QrGenerator = () => {
  const [Data, setData] = useState("")
  const [img, setImg] = useState("")
  const [size, setSize] = useState("")

  function generateQrCode() {
    
    try{
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${Data}`
    setImg(url)
    } 
    catch (error) {
      
    }
  }

  function downloadQrCode() {
    fetch(img).then((response) => response.blob()).then((blob) => {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'qr.png'
      link.click()
      download.removeChild(link)
    })
  }
  
  return (
    <>
      <div class="waves"></div>

      <div className="qr-container">
        <h2>QR Code Generator</h2>
  
        <input type="text" value={Data} onChange={(e) => setData(e.target.value)} placeholder="Enter the QR URL" className="qr-input"/>
  
        <input type="number" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Enter the size"  className="qr-input" />
  
        <div className="qr-buttons">
          <button onClick={generateQrCode} className="qr-qr-btn">Generate QR Code <i className="fa-solid fa-qrcode"></i></button>
          <button onClick={downloadQrCode} className="qr-dwn-btn">Download <i className="fa-solid fa-download"></i></button>
        </div>
  
        {/* QR Code appears inside the box but below the buttons */}
        {img && (
          <div className="qr-wrapper">
            <img src={img} className="qr-image" alt="QR Code" />
          </div>
        )}
      </div>
    </>
  );
}

export default QrGenerator;