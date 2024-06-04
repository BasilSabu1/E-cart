import { useEffect, useState } from "react"




const usefetch =(url)=>{
  const[data,setdata] = useState(null)

    useEffect(()=>{
        fetch(url).then(res=>{
      res.json().then(result=>{
    setdata(result.products)
      })
        })
    },[])

    return data
}

export default usefetch