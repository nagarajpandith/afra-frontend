import React, { useRef, useState } from 'react';

function Scan() {
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [courseCode, setCourseCode] = useState('');
  const [cameraOpen, setCameraOpen] = useState(false);

  const handleClick = () => {
    // Set the canvas as the source for the video element
    videoRef.current.src = canvasRef.current.toDataURL('image/jpeg');

    // Stop the camera
    stopCamera();

    // Log the form data and image data
    console.log({ courseCode, imageData: videoRef.current.src });
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

export default Scan;
