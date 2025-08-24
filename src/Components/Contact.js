
const Contact=()=>{
      return(
        <>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-6 text-center">
      <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="container mx-auto pt-15">
            <div className="text-center">
              <h3 className="text-4xl font-bold tracking-wide leading-loose">Get in Touch</h3>
              <p className="text-lg leading-loose tracking-normal text-slate-500">We're here to help you transform your ideas into reality. Whether you need creative design, technical development, or both, our team is ready to deliver exceptional results.</p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 pt-5">
              <figure className="bg-white rounded-2xl sm:w-96 sm:h-64 sm:mx-auto md:w-80 xl:w-64 text-center pt-10 mb-10 shadow hover:shadow-lg hover:shadow-indigo-500/40" data-aos="fade-up">
                <div className="bg-yellow-500 rounded-lg w-24 h-24 p-6 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a href="" className="text-4xl text-white"><i class="fa-solid fa-envelope"></i></a></div>
                <figcaption className="p-5">
                  <h4 className="text-2xl font-bold">Email</h4>
                  <p className="text-base">Send us a message and tell us about your project.</p>
                </figcaption>
              </figure>

              <figure className="bg-white rounded-2xl sm:w-96 sm:h-64 sm:mx-auto md:w-80 xl:w-64 text-center pt-10 mb-10 shadow hover:shadow-lg hover:shadow-indigo-500/40" data-aos="fade-up">
                <div className="bg-green-500 rounded-lg w-24 h-24 p-6 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a href="" className="text-4xl text-white"><i class="fa-solid fa-phone"></i></a></div>
                <figcaption className="p-5">
                  <h4 className="text-2xl font-bold">Call Us</h4>
                  <p className="text-base">Response Time</p>
                </figcaption>
              </figure>

              <figure className="bg-white rounded-2xl sm:w-96 sm:h-64 sm:mx-auto md:w-80 xl:w-64 text-center pt-10 mb-10 shadow hover:shadow-lg hover:shadow-indigo-500/40" data-aos="fade-up">
                <div className="bg-blue-500 rounded-lg w-24 h-24 p-6 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a href="https://www.linkedin.com/company/pixelconnect-agency/posts/?feedView=all" target="_blank" className="text-4xl text-white"><i class="fa-brands fa-linkedin-in"></i></a></div>
                <figcaption className="p-5">
                  <h4 className="text-2xl font-bold">Linkedin</h4>
                  <p className="text-base">Connect with us for business inquiries</p>
                </figcaption>
              </figure>

              <figure className="bg-white rounded-2xl sm:w-96 sm:h-64 sm:mx-auto md:w-80 xl:w-64 text-center pt-10 mb-10 shadow hover:shadow-lg hover:shadow-indigo-500/40" data-aos="fade-up">
                <div className="bg-pink-500 rounded-lg w-24 h-24 p-6 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a href="https://www.instagram.com/pixelconnect.agency/" target="_blank" className="text-4xl text-white"><i class="fa-brands fa-instagram"></i></a></div>
                <figcaption className="p-5">
                  <h4 className="text-2xl font-bold">instagram</h4>
                  <p className="text-base">Follow our latest work and stories.</p>
                </figcaption>
              </figure>
            </div>
          </div>
      
    </section>
        </>
      )

    
}

export default Contact;