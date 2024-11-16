import React, { useEffect, useState } from 'react'

const Github = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/uaditya18')
    .then(response=>response.json() )
    .then(data =>{
      console.log(data);
      setData(data)
    })

  },[])
  return (
    <div>Github followers:{data.followers} 
    <img src="data.avatar_url" alt="Git picture" width={300}/>
    </div>
  )
}

export default Github