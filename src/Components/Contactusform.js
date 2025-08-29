// import { useState } from "react";

// const Contactform=()=>{

//     const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   // Validation function
//   const validate = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.length < 3) {
//       newErrors.name = "Name must be at least 3 characters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     return newErrors;
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       setSubmitted(true);
//       console.log("Form Data Submitted:", formData);
//       // Reset form
//       setFormData({ name: "", email: "", message: "" });
//     }
//   };

//     return(
//         <>
//             <section className="mt-10">
//               <div className="min-h-screen flex items-center justify-center bg-gray-50">
//                 <form onSubmit={handleSubmit} className="mt-10 bg-blue-500 text-white w-96 xl:w-1/2 mx-auto p-20 rounded-2xl shadow-xl" >
//               <h4 className="text-2xl font-bold text-center  mb-5">Contact Us</h4>
//               <div className="mb-5">
//                 <p className="leading-loose font-bold"><label>Name :- </label></p>
//                 <p><input type="text" placeholder="Your name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-10 w-64 p-5 xl:w-full rounded-md bg-slate-100"/>{errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//               )}</p>
//               </div>

//               <div className="mb-5">
//                 <p className="leading-loose font-bold"><label>Email :- </label></p>
//                 <p><input type="text" placeholder="your@gmail.com" value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-10 w-64 p-5 xl:w-full rounded-md bg-slate-100"/>{errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}</p>
//               </div>

//               <div className="mb-5">
//                 <p className="leading-loose font-bold"><label>Subject :- </label></p>
//                 <p><input type="text" placeholder="what can we help you with?" value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="h-10 w-64 p-5 xl:w-full rounded-md bg-slate-100"/>{errors.message && (
//                 <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//               )}</p>
//               </div>

//               <div className="mb-5">
//                 <p className="leading-loose font-bold"><label>Message :- </label></p>
//                 <p><textarea rows={2} placeholder="Tell us about your project.." value={formData.message}
//                 onChange={(e) =>setFormData({ ...formData, message: e.target.value })} className="h-20 w-64 p-5 xl:w-full rounded-md bg-slate-100"></textarea>{errors.message && (
//                 <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//               )}</p>
//               </div>

//               <button type="submit" className="w-40 h-10 bg-blue-500 border border-2 border-white rounded-xl text-white hover:bg-blue-600">Send Message</button>
//             </form>
//           </div>
                  
//             </section>
//         </>
//     )
// }

// export default Contactform;
import { useState } from "react";

const Contactform=()=>{

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "subject is required";
    } else if (formData.subject.length < 10) {
      newErrors.subject = "subject must be at least 8 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log("Form Data Submitted:", formData);
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    }
  };

    return(
        <>
            <section className="mt-10">
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <form onSubmit={handleSubmit} className="mt-10 bg-blue-500 text-white w-96 xl:w-1/2 mx-auto p-20 border-2 border-blue-800 shadow-xl" >
              <h4 className="text-2xl font-bold text-center  mb-5">Contact Us</h4>
              <div className="mb-5">
                <p><input type="text" placeholder="Your name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-10 w-64 xl:w-full bg-transparent border-b border-blue-400 focus:outline-none focus:border-white py-2 placeholder-blue-100"/>{errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}</p>
              </div>

              <div className="mb-5">
                <p><input type="text" placeholder="your@gmail.com" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-10 w-64 xl:w-full bg-transparent border-b border-blue-400 focus:outline-none focus:border-white py-2 placeholder-blue-100"/>{errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}</p>
              </div>

              <div className="mb-5">
                <p><input type="text" placeholder="what can we help you with?" value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="h-10 w-64 xl:w-full bg-transparent border-b border-blue-400 focus:outline-none focus:border-white py-2 placeholder-blue-100"/>{errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}</p>
              </div>

              <div className="mb-5">
                <p><textarea  placeholder="Tell us about your project.." value={formData.message}
                onChange={(e) =>setFormData({ ...formData, message: e.target.value })} className="w-64  xl:w-full bg-transparent border-b border-blue-400 focus:outline-none focus:border-white  placeholder-blue-100"></textarea>{errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}</p>
              </div>

              <button type="submit" className="px-6 py-2 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-700 transition duration-200">Send Message</button>
            </form>
          </div>
                  
            </section>
        </>
    )
}

export default Contactform;