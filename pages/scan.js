import React, { useRef, useState } from 'react';

function Scan() {
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [courseCode, setCourseCode] = useState('');

  const handleClick = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    await videoRef.current.play();

    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0);

    const imageData = canvasRef.current.toDataURL('image/jpeg');

    console.log({ imageData, courseCode });

    stream.getTracks().forEach((track) => track.stop());
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={courseCode}
        onChange={(event) => setCourseCode(event.target.value)}
      />
      <button disabled={!courseCode} onClick={handleClick}>
        Scan
      </button>
      <video ref={videoRef} style={{ display: 'none' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default Scan;
