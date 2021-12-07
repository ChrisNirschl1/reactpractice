import React from 'react'
import Content from "../../components/Content"


export default function Aboutme() {
    const styles = {
        aboutme: {
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            position: "fixed",
            bottom: 500,
            width:"100vw",
            height:"10vh"
        },
        
       
    }
    return (
        <div style={styles.aboutme}>
         <Content />   
        </div>
    )
}
