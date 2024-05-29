import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData()
// const [data,setdata]=useState([])

// useEffect(() => {
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(response => response.json())
// .then((data)=>{
  // // console.log(data)
 //   setdata(data)
// })
// }, [])


  return (
    <div className='text-center text-white bg-gray-700  text-3xl p-4 '>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
  )
}

export default Github

export const githubinfoLoader=async ()=>{
  const response= await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}