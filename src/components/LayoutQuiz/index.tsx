import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

const LayoutQuiz = ({children}:LayoutProps) => {
  return (
    <div
    style={{
      width:"90%",
      maxWidth:"500px",
      minHeight:"50vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      margin:"2em auto",
      marginBottom:"4em",
      backgroundColor:"#333",
      padding:"20px 10px",
      borderRadius:"20px"
    }}
    >
      {children}
    </div>
  )
}

export default LayoutQuiz