import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

const backendUrl = process.env.REACT_APP_API_URL;

export default function AddLinkView() {
    const { user } = useSelector((state) => state.user)
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem("jwt");
    
    // useEffect(() => {
    //     if (user) {
    //       //post request to backend
    //         fetch(`${backendUrl}/api/links`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${token}`
    //             },
    //             body: JSON.stringify({
    //                 "data": {
    //                             "attributes": {
    //                                 name: "from TOTO",
    //                                 url: "http://pouet.com",
    //                                 public: true,
    //                                 type: "Image",
    //                                 nsfw: true,
    //                                 slug: "from-TOTO",
    //                                 admin: null
    //                             }
    //                         }
                         
                
    //             })
    //         })
    //             .then((res) => res.json())
    //             .then((data) => setIsLoading(false))
    //             .catch((err) => console.log(err));
    //     }
    // }, [backendUrl, token]);
    

  return (
    <div>AddLinkView</div>
  )
}
