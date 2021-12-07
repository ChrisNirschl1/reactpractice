import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function ProjectCard(props) {



    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            margin: "20px",
            padding: "5px",
            border: "5px solid purple",
        },
        card: {
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap"

        },
        outline: {
            width: '800px'
        },
        a: {
            color: "#101820FF",
            textDecoration:"none"
        }
    }


    return (
        
        <div style={styles.container}>

        <Card border="info" className="my-5" bg="danger" style={styles.outline}>
            {/* <Card.Img variant="top" src={`${props.link}`} /> */}
            <Card.Body style={styles.card}>
                <Card.Title><h1>{props.title}</h1></Card.Title>
                <Card.Text>
                    {props.about}
                </Card.Text>
                
                <Button variant="primary"><a style={styles.a} href={`${props.repo}`} target="_blank" >Repository</a></Button>
            </Card.Body>
        </Card>
        </div>

    )
}




 
