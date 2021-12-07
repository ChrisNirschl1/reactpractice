import React, { useState } from 'react';


export default function Contact() {
      
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  
  const handleInputChange = (e) => {
    
    const { name, value } = e.target;

   
     if(name === 'firstName'){
         return setFirstName(value);
     } if (name === 'lastName'){
         return setLastName(value);
     }if (name === 'email'){
         return setEmail(value);

     }if (name === 'request'){
        return setRequest(value);

    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    alert(`I'll get back to you as soon as possible ${firstName} `);
    setFirstName('');
    setLastName('');
    setEmail('');
    setRequest('');
  };
  
  return (
    <section className="body">
    <div className="h1">Contact</div>
    <div className="card">
        <p>
          Leave your information below and I'll reach out!
        </p>
        <form className="form">
          <input className="input"
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name" />
          <input className="input"
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name" />
          <input className="input"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email" />
            <textarea className="input"
            value={request}
            name="request"
            onChange={handleInputChange}
            type="text"
            placeholder="What do you want to talk about?" />
          
          <button className="input" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
      </section>
  );
  }
  


