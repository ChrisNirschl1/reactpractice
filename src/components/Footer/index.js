import React from 'react'

   export default function Footer(){
  const styles = {
      footer: {
          display: "flex",
          justifyContent:"center",
          alignItems: "center",
          position: "fixed",
          bottom: 0,
          width:"100vw",
          background:"grey",
          height:"10vh"
      },
      
      a: {
          color: "#101820FF",
          textDecoration:"none",
          marginLeft:"5%",
          marginRight:"5%"
      }
  }

  return(
      <footer style={styles.footer}>
          <a style={styles.a} href="https://github.com/ChrisNirschl1" target="_blank">Github</a>
          <a style={styles.a} href="https://www.linkedin.com/in/christian-nirschl/" target="_blank">LinkedIn</a>
         
          
      </footer>
  )
}
