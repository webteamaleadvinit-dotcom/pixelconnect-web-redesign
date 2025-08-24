import { useState } from "react";

const Contact=()=>{

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

//Validation function

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

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

//   Handle form submit
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
            <section className="container mx-auto pt-10">
                <div className="text-center">
                    <h2 className="text-5xl font-semibold leading-loose">Let's Work Together</h2>
                    <p className="text-xl leading-loose tracking-wide text-gray-600">Ready to bring your ideas to life? Get in touch with us and let's create something amazing together.</p>
                </div>
                <div className="lg:relative">
                <div className="w-3/5 hover:border-2 lg:absolute top-0 right-0">
                    <form className="p-10" onSubmit={handleSubmit}>
                        <div className="flex gap-5">
                        <div className="w-1/2">
                            <p className="leading-loose"><label>Name :-</label></p>
                            <p className="h-10 rounded-lg bg-gray-200"><input type="text" placeholder="Your Name" className="h-10 rounded-lg bg-gray-200" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                            {errors.name && (<p className="text-red-500 text-sm mt-3">{errors.name}</p> )}
                        </p>
                        </div>
                        <div className="w-1/2">
                            <p className="leading-loose"><label>Email :-</label></p>
                            <p className="h-10 rounded-lg bg-gray-200"><input type="email" placeholder="your@email.com" className="h-10 rounded-lg bg-gray-200" value={formData.email} onChange={(e) =>setFormData({ ...formData, email: e.target.value })}/>
                            {errors.email && (<p className="text-red-500 text-sm mt-3">{errors.email}</p>)}
                            </p>
                        </div>
                        </div>
                        <div className="pt-5">
                            <p className="leading-loose"><label>Subject :-</label></p>
                            <p><input type="text" placeholder="What can we help you with?" className="h-20 w-full rounded-lg bg-gray-200" value={formData.message} onChange={(e) =>setFormData({ ...formData, message: e.target.value })}/>
                            {errors.message && (<p className="text-red-500 text-sm mt-1">{errors.message}</p>)}
                            </p>
                        </div>
                        <div className="pt-5">
                            <p className="leading-loose"><label>Message :-</label></p>
                            <p><textarea placeholder="Tell us about your project...." className="h-40 w-full rounded-lg bg-gray-200" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                            {errors.message && (<p className="text-red-500 text-sm mt-1">{errors.message}</p>)}
                </p>
                        </div>
                        <div className="pt-5">
                            <button type="submit" className="w-40 h-20 rounded-lg bg-blue-600 text-white">Send Message</button>
                        </div>
                    </form>
                    {submitted && (
            <p className="text-green-600 mb-4">
              ✅ Your message has been sent successfully!
            </p>
          )}
                </div>
                {/* get in touch  */}
                <div className="w-1/3 p-10 bg-blue-900 text-white shadow-xl shadow-blue-800 lg:absolute left-28 top-8">
                    <h4 className="text-2xl font-semibold tracking-wide leading-loose">Get in Touch</h4>
                    <p className="text-lg">We're here to help you transform your ideas into reality. Whether you need creative design, technical development, or both, our team is ready to deliver exceptional results.</p>
                    <div className="pt-3">
                    <div className="h-16 flex justify-evenly items-center">
                        <a href="" className="w-10 h-10 content-center text-center bg-blue-200 text-blue-400 rounded-md"><i class="bi bi-envelope"></i></a>
                        <div>
                            <p>Email</p>
                            <a href="" className="text-gray-300">help.pixelconnectagency@gmail.com</a>
                        </div>
                    </div>

                    <div className="h-16 flex gap-4 items-center ml-3">
                        <a href="" className="w-10 h-10 content-center text-center rounded-md text-green-400 bg-green-200"><i class="bi bi-telephone"></i></a>
                        <div>
                            <p>Response Time</p>
                            <p className="text-gray-300">Within 24 hours</p>
                        </div>
                    </div>

                    <div className="h-16 flex gap-4 items-center ml-3">
                        <a href="" className="w-10 h-10 content-center text-center rounded-md text-purple-800 bg-purple-200"><i class="bi bi-geo-alt"></i></a>
                        <div>
                            <p>Location</p>
                            <p className="text-gray-300">Remote Team, Global Reach</p>
                        </div>
                    </div>
                    </div>

                    <div className="pt-3">
                        <p className="text-lg font-semibold">Follow Us</p>
                        <div className="pt-5">
                            <a href="https://www.linkedin.com/company/pixelconnect-agency/posts/?feedView=all" target="_blank" className="bg-blue-400 p-2 mr-2"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/pixelconnect.agency/" target="_blank" className="bg-pink-600 p-2"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Contact;