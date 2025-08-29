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
          <section>
            <div className="container mx-auto mb-5">
                <div className="grid xl:grid-cols-2 gap-4 mt-10">
                <div className="pt-5">
                        <img src="image/illustration/openposition.jpg" className="w-96 h-96 mx-auto rounded-3xl"/>
                </div>
                <div className="sm:p-5 xl:p-0" >
        <div>
            <h3 className="text-4xl text-blue-500 font-bold leading-loose tracking-wide">Open Positions</h3>
            <p className="text-lg leading-loose tracking-wide">Explore our current internship opportunities and find the perfect role to kickstart your career.</p>
        </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-2 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center py-3">
              <h3 className="text-lg font-medium hover:text-blue-500">
                {item.title}
              </h3>
              <span className="text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-2">
                <p className="text-gray-600 mb-3">{item.content}</p>
                <button className="px-4 py-2 w-48 h-10 bg-blue-500 text-white rounded-2xl hover:bg-blue-600">
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