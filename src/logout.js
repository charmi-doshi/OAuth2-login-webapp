import React from 'react'

export const logout = () => {

  const handleLogout = ()=>{
   
    axios.get("/logout") .then(res => {
        if (res.status === 200)
          alert('Logout successfully')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
 
  useEffect(() => {
    handleLogout()
  })
  return (
    <div>
      <button onClick={handleLogout} >LOGIN WITH GOOGLE</button>
     
    </div>
  )
}
