import React ,{useState}from 'react'
import './Contactus.css';
import { db } from './firebase';
import Footer from './Footer';
import Navbar from './Navbar';


function Contactus() {

const[name,setName] = useState("");
const[age,setAge] = useState('');
const[email,setEmail]= useState('')
const [mobile,setMobile]= useState('');
const [message,setMessage]= useState('');


const handleSubmit=(e)=>{
e.preventDefault();

db.collection('contacts').add({
    name: name,
    age: age,
    email: email,
    mobile: mobile,
    message: message

}).then(()=>{
    alert('Your request has been submitted')
}).catch((err)=>{
    alert(err.message)
})
setName('');
setAge('');
setEmail('');
setMobile('');
setMessage('');

}

    return (
        
        <div>
            <Navbar></Navbar>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Contact Us </h1>
<label>Parent Name</label>
<input placeholder='parent_name' value={name} onChange={(e)=> setName(e.target.value)}></input>

<label>Child Age</label>
<input placeholder='Child Age' value={age} onChange={(e)=> setAge(e.target.value)}></input>

<label >Parent Email</label>
<input placeholder='Parent Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>

<label>Parent Mobile</label>
<input placeholder='Parent Mobile' value={mobile} onChange={(e)=> setMobile(e.target.value)}></input>

<label className='mess1' >Message</label>
<input placeholder='Enter Your Interest' className='mess' value={message} onChange={(e)=> setMessage(e.target.value)}></input>

   <button type='submit' className='btn'>Submit</button>
   
            </form>
            <Footer></Footer>
        </div>
    )
}

export default Contactus
