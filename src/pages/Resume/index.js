import React from 'react'

export default function Resume() {
    const styles = {
        resume: {
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            position: "fixed",
            bottom: 500,
            width:"100vw",
            height:"10vh",
            
        },
        a: {
            color: "#101820FF",
            textDecoration:"none",
            
        }
        
       
    }
    return (
        <div style={styles.resume}>
            <h1>Checkout my Resume:</h1>
            <div >

        <button> <a style={styles.a} href="https://docs.google.com/document/d/1UXGj1l9vpcjwNTW8LV647IRPwXKer0wCwdvWyCq8MUw/edit?usp=sharing">Resume </a></button>
            </div>
        </div>
    )
}
