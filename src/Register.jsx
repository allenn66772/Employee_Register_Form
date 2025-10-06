import React, { useState } from 'react'
import Box from '@mui/material/Box';

function Register() {
const [userInput,setUserInput]=useState ({
   basicInformation:{
    username:"",
    age:"",
    phone:"",
    designation:"",
    salary:""
   }
   
  })
  console.log(userInput);

   const clearForm = () => {
  setUserInput({
    basicInformation: {
      username: "",
      age: "",
      phone: "",
      designation: "",
      salary: ""
    }
  });
};




     const showAlert = (e) => {
    e.preventDefault(); // prevent page reload
    const { username, age, phone, designation, salary } =
      userInput.basicInformation;

    if (!username || !age || !phone || !designation || !salary) {
      alert("Please fill all the inputs");
    } else {
      alert( 
        `Entered Details: \nName: ${username}\nAge: ${age}\nPhone: ${phone}\nDesignation: ${designation}\nSalary: ${salary}`
      );clearForm()
    }
  };

  return (
    <>
   <section className="bg-gray-800 min-h-screen flex justify-center items-center text-white px-4">
  <form className="bg-gray-900 bg-opacity-50 p-8 rounded-lg w-full max-w-3xl space-y-6">
    <h2 className="text-2xl font-semibold text-center">Employee REGISTER FORM</h2>

    <div>
      <label htmlFor="username" className="block mb-1 text-left font-medium">Name</label>
      <input  value={userInput.basicInformation.username} onChange={(e)=>setUserInput({...userInput,basicInformation:{...userInput.basicInformation,username:e.target.value}})}
        type="text"
        id="username"
        name="username"
        className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-300"
        placeholder="Enter your name"
      />
    </div>

    <div>
      <label htmlFor="age" className="block mb-1 text-left font-medium">Age</label>
      <input  value={userInput.basicInformation.age}  onChange={(e)=>setUserInput({...userInput,basicInformation:{...userInput.basicInformation,age:e.target.value}})}
        type="number"
        id="age"
        name="age"
        className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-300"
        placeholder="Enter your age"
      />
    </div>

    <div>
      <label htmlFor="phone" className="block mb-1 text-left font-medium">Phone</label>
      <input  value={userInput.basicInformation.phone}  onChange={(e)=>setUserInput({...userInput,basicInformation:{...userInput.basicInformation,phone:e.target.value}})}
        type="tel"
        id="phone"
        name="phone"
        className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-300"
        placeholder="Enter your phone number"
      />
    </div>

    <div>
      <label htmlFor="designation" className="block mb-1 text-left font-medium">Designation</label>
      <input  value={userInput.basicInformation.designation}  onChange={(e)=>setUserInput({...userInput,basicInformation:{...userInput.basicInformation,designation:e.target.value}})}
        type="text"
        id="designation"
        name="designation"
        className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-300"
        placeholder="Enter your designation"
      />
    </div>

    <div>
      <label htmlFor="salary" className="block mb-1 text-left font-medium">Salary</label>
      <input  value={userInput.basicInformation.salary}  onChange={(e)=>setUserInput({...userInput,basicInformation:{...userInput.basicInformation,salary:e.target.value}})}
        type="text"
        id="salary"
        name="salary"
        className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-300"
        placeholder="Enter your salary"
      />
    </div>

    <div className="text-center">
      <button onClick={showAlert}
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition duration-200"
      >
        Submit
      </button>
    </div>
  </form>
</section>


    </>
  )
}

export default Register