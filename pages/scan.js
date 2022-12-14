import Link from 'next/link';
import React, { useRef, useState } from 'react';
import withAuth from '../components/isAuth';

function Scan() {
  const inputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [courseCode, setCourseCode] = useState('');
  const [cameraOpen, setCameraOpen] = useState(false);

  const [link,setLink]=useState(()=>"")


  const getAttendance=async()=>{
    const response = await fetch('http://localhost/getAttendance', {
        method: 'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({code:courseCode}),
        credentials:"include"
    });
    const res=await response.json()
    console.log(res.url)
    setLink(()=>res.url.url.replaceAll('"',''))
  }
  const handleClick = async () => {
    // videoRef.current.src = canvasRef.current.toDataURL('image/jpeg');

    stopCamera();

    // // Get the image file from the canvas
    // const imageFile = await new Promise((resolve) => {
    //   canvasRef.current.toBlob((blob) => {
    //     resolve(new File([blob], 'image.jpg', { type: 'image/jpeg' }));
    //   }, 'image/jpeg');
    // });

    const imageFile = inputRef.current.files[0];
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
    let students=[]
    if(response.status===200)
    {
        console.log("jsh")
        res.map((student)=>{
            if(student._label!=='unknown')
            {
                students.push(student._label)
                console.log(students)
            }
        })
        const respons = await fetch('http://localhost/getStudents', {
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({usns:students}),
            credentials:"include"
        });
        const re=await respons.json()
        console.log(re)
    }

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
    <>
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
        onClick={getAttendance}
      >
        getAttendance
      </button>
      {link
        ?<Link href={link}>
            ATTENDANCE SHEET
        </Link>:<></>
      }
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
    <div className='flex justify-center'>
      <input 
      ref={inputRef}
      className="shadow appearance-none border rounded w-1/4 flex py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
      type="file"
      name="file1" 
      />

    </div>
    </>
  );
}

export default withAuth(Scan);
