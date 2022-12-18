import { useRouter } from "next/router";
import { useEffect, useState } from "react"


function Logout() {
     const [message,setMessage]=useState(()=>'loading')
    const router=useRouter()
     useEffect(()=>{
            async function run(){
            const response = await fetch('http://localhost/logout', {
                method: 'GET',
                mode:'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:"include"
            });
            const res=await response.json()
            setMessage(res.message)
            router.push('/')
        }
        run()
     },[])
    return(<div>
        {message}
    </div>)
}

export default Logout