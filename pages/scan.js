import React, { useRef, useState } from 'react';
import withAuth from '../components/isAuth';

function Scan() {
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [courseCode, setCourseCode] = useState('');
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleClick = async () => {
    videoRef.current.src = canvasRef.current.toDataURL('image/jpeg');

    stopCamera();

    // Get the image file from the canvas
    const imageFile = await new Promise((resolve) => {
      canvasRef.current.toBlob((blob) => {
        resolve(new File([blob], 'image.jpg', { type: 'image/jpeg' }));
      }, 'image/jpeg');
    });

    let f=new FormData();
    f.append('code',courseCode)
    f.append('file1',imageFile)
    const response = await fetch('http://localhost/verify', {
        method: 'POST',
        mode:'cors',
        headers: {
            // 'Content-Type': 'application/json',
        },
        body: f,
        credentials:"include"
    });
    const res=await response.json()
    console.log(res)
    // Log the form data and image file
    console.log({ courseCode, imageFile });
  };

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    await videoRef.current.play();

    // Set the video element as the source for the canvas
    const context = canvasRef.current.getContext('2d');
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    // Update the camera status
    setCameraOpen(true);
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    stream.getTracks().forEach((track) => track.stop());

    // Update the camera status
    setCameraOpen(false);
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto mt-10">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        ref={inputRef}
        value={courseCode}
        onChange={(event) => setCourseCode(event.target.value)}
        placeholder="Enter course code"
      />
      <button
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        disabled={!courseCode}
        onClick={startCamera}
      >
        Start Camera
      </button>
      {cameraOpen && (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          onClick={handleClick}
        >
          Take Picture
        </button>
      )}
      <video
        ref={videoRef}
        className="w-full h-auto mt-4"
        style={{ objectFit: 'cover' }}
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default withAuth(Scan);
