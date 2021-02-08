import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import './Contactus.css';
import { db } from './firebase';
import Footer from './Footer';
import Navbar from './Navbar';
import './Proceed.css'


function Proceed() {

const[name,setName] = useState("");
const[age,setAge] = useState('');
const[email,setEmail]= useState('')
const [mobile,setMobile]= useState('');
const [cl,setCl]= useState('');


const handleSubmit=(e)=>{
e.preventDefault();

db.collection('contacts').add({
    name: name,
    age: age,
    email: email,
    mobile: mobile,
    cl: cl

}).then(()=>{
    alert('Your request has been submitted')
}).catch((err)=>{
    alert(err.message)
})
setName('');
setAge('');
setEmail('');
setMobile('');
setCl('');

}

    return (
        
        <div>
            <Navbar></Navbar>
            <div className='proc'>
            <form className='form' onSubmit={handleSubmit}>
               <div className='reg'> <h4> Our Advisor will followup.</h4></div>
<div className='pname'><label>Parent Name</label></div>


<div className='input_pname'><input placeholder='parent_name'className='i_pn' value={name} onChange={(e)=> setName(e.target.value)}></input></div>


<div className='chila'><label>Child Age</label></div>

<div className='inputchila'><input placeholder='Child Age'className='i_ca' value={age} onChange={(e)=> setAge(e.target.value)}></input></div>

<div className='pemail'><label>Parent Email</label></div>
<div className='input_pmail'>
<input placeholder='Parent Email'className='i_pe' value={email} onChange={(e)=> setEmail(e.target.value)}></input></div>

<div className='pmobile'><label>Parent Mobile</label></div>
<div className='input_pmobile'>
<input placeholder='Parent Mobile'className='i_pm' value={mobile} onChange={(e)=> setMobile(e.target.value)}></input></div>

<div className='cl_time'><label  >Prefered Classes Time(Ex: 10AM)</label></div>
<div className='input_cl'>
<input placeholder='Prefered Time' className='i_pt' value={cl} onChange={(e)=> setCl(e.target.value)}></input></div>
<div className='payfee'>
   <Link to ='/checkout'><button type='submit' className='btn'>Proceed to Checkout</button></Link></div>
   <div className='payreg'>
   <Link to ='/Register'><button type='submit' className='btn'>Proceed to Register</button></Link></div>
   
            </form>



            </div>
           
        
        </div>
    )
}

export default Proceed
