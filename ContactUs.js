import React, { Component } from 'react';
class ContactUs extends Component {
state = { name:'', email:'', subject:'', message:'', submitted:false };

onSubmit = (e) => {
e.preventDefault();
// Replace with real submit logic
this.setState({ submitted:true });
setTimeout(()=> alert('Message sent (simulated).'), 300);
};

render() {
const { name, email, subject, message, submitted } = this.state;
return (

    <div className="contactus-container">
    <header className="contactus-header">
        <h1>Contact Us</h1>
    </header>
    {submitted ? (
    <div className="success-message">Thank you for reaching out! We will get back to you shortly.</div>
    ) : (
        



<div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
<input className="input" placeholder="Name" value={name} onChange={e=>this.setState({name:e.target.value})} />
<input className="input" placeholder="Email" value={email} onChange={e=>this.setState({email:e.target.value})} />


<input className="input" placeholder="Subject" value={subject} onChange={e=>this.setState({subject:e.target.value})} style={{marginTop:8}} />
<textarea className="input" placeholder="Message" value={message} onChange={e=>this.setState({message:e.target.value})} style={{gridColumn:'span 2', height:100, marginTop:8}}></textarea>
<button className="button" onClick={this.onSubmit} style={{gridColumn:'span 2', marginTop:8}}>Send Message</button>
</div>
)}
</div>
);
}
}

export default ContactUs;