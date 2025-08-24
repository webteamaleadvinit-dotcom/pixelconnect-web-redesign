import { useState } from "react";

const Openpositions=()=>{

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Graphic Design Intern",
      content:
        "Create visual content, logos, and brand materials for our clients."
    },
    {
      title: "Web Development Intern",
      content:
        "Build modern websites and web applications using latest technologies."
    },
    {
      title: "Content Writing Intern",
      content:
        "Write engaging content for websites, blogs, and marketing materials."
    },

    {
        title:"Social Media Marketing Intern",
        content:
            "Manage social media accounts and create engaging content strategies."
    }
  ];

    return(
        <>
          <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-6 text-center">
            <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-2 gap-4 mt-10">
                <div className="pt-5" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <img src="image/illustration/openposition.jpg" className="w-96 h-96 mx-auto rounded-3xl"/>
                </div>
                <div className="sm:p-5" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <div>
            <h3 className="text-4xl font-bold leading-loose tracking-wide">Open Positions</h3>
            <p className="text-lg leading-loose tracking-wide">Explore our current internship opportunities and find the perfect role to kickstart your career.</p>
        </div>
      <div className="space-y-2" data-aos="fade-up">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-2 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center py-3">
              <h3 className="text-lg font-medium text-gray-900">
                {item.title}
              </h3>
              <span className="text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-2">
                <p className="text-gray-600 mb-3">{item.content}</p>
                <button className="px-4 py-2 border w-48 h-10 bg-blue-400 rounded-lg ring-offset-2 ring-2">
                  Apply Now
                </button>
              </div>
            )}
          </div>

          
        ))}
      </div>
    </div>
    </div>
            </div>
    </section>
        </>
    )
}

export default Openpositions;