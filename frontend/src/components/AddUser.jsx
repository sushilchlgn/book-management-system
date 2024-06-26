import React, { useState } from 'react'
import './AddBook.css'


const AddUser =() => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [semester, setSemester] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({name,email,course,semester})
    }

  return (
    <div className='user-container'>
        <h1 className='title'>Add New User</h1>
            <form className='content'>
                <div className='form-item'>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name='name' />
                </div>
                <div className='form-item'>
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name='email' />
                </div>
                <div className='form-item'>
                    <label>Course</label>
                   <select name="course" id="">
                    <option value={course}>BIT</option>
                    <option value={course}>BCA</option>
                    <option value={course}>MCA</option>
                    <option value={course}>AI</option>
                   </select>
                </div>
                <div className='form-item'>
                    <label>Semester</label>
                   <select name="semester" id="">
                    <option value={semester}>First</option>
                    <option value={semester}>Second</option>
                    <option value={semester}>Third</option>
                    <option value={semester}>Fourth</option>
                    <option value={semester}>Fifth</option>
                    <option value={semester}>Sixth</option>
                    <option value={semester}>Seventh</option>
                    <option value={semester}>Eighth</option>
                   </select>
                </div>
                <button className='submit-button' onClick={handleSubmit} type='Submit'>Submit</button>
            </form>
    </div>
  )
}

export default AddUser