 const Ourwork=()=>{
    return(
        <>
        <section id="ourwork">
            <div className="container mx-auto">
                <h4 className="font-bold tracking-wide text-blue-500 text-center text-4xl pt-10">Our Work</h4>
                <div className="pt-10 md:grid grid-cols-2 gap-2 lg:grid-cols-3">
                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group overflow-hidden">
                        <img src="image/illustration/ecommerceimg.jpeg" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"/>
                        <div className="p-5 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white flex flex-col items-center justify-center">
                            <h5 className="text-lg font-bold text-center">E-commerce Platform</h5>
                            <p className="text-center">Modern Marketplace | Trade Portal</p>
                            <div className="text-center">
                                <a href="#" className="mt-4 hover:border-b-2 border-[#2dd4bf] hover:text-[#2dd4bf]">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group overflow-hidden">
                        <img src="image/illustration/brandimg.jpeg" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"/>
                        <div className="p-5 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white flex flex-col items-center justify-center">
                            <h5 className="text-lg font-bold text-center">Brand Identity Design</h5>
                            <p className="text-center">Style Guide | Brand Identity</p>
                            <div className="text-center">
                                <a href="#" className="mt-4 hover:border-b-2 border-[#2dd4bf] hover:text-[#2dd4bf]">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group overflow-hidden">
                        <img src="image/illustration/marketingimg.jpeg" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"/>
                        <div className="p-5 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white flex flex-col items-center justify-center">
                            <h5 className="text-lg font-bold text-center">Marketing Automation</h5>
                            <p className="text-center">Workflow Engine | Email Engine</p>
                            <div className="text-center">
                                <a href="#" className="mt-4 hover:border-b-2 border-[#2dd4bf] hover:text-[#2dd4bf]">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group overflow-hidden">
                        <img src="image/illustration/socialimg.jpeg" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"/>
                        <div className="p-5 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white flex flex-col items-center justify-center">
                            <h5 className="text-lg font-bold text-center">Social Media Campaign</h5>
                            <p className="text-center">Viral Content | Social Buzz</p>
                            <div className="text-center">
                                <a href="#" className="mt-4 hover:border-b-2 border-[#2dd4bf] hover:text-[#2dd4bf]">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group overflow-hidden">
                        <img src="image/illustration/brandimg.jpeg" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"/>
                        <div className="p-5 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white flex flex-col items-center justify-center">
                            <h5 className="text-lg font-bold text-center">Corporate Website</h5>
                            <p className="text-center">Optimized Website | SEO Platform</p>
                            <div className="text-center">
                                <a href="#" className="mt-4 hover:border-b-2 border-[#2dd4bf] hover:text-[#2dd4bf]">View Project</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group overflow-hidden">
                        <img src="image/illustration/videoproductionimg.jpeg" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"/>
                        <div className="p-5 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white flex flex-col items-center justify-center">
                            <h5 className="text-lg font-bold text-center">Video Production</h5>
                            <p className="text-center">Promo Series | Product Showcase</p>
                            <div className="text-center">
                                <a href="#" className="mt-4 hover:border-b-2 border-[#2dd4bf] hover:text-[#2dd4bf]">View Project</a>
                            </div>
                        </div>
                    </div>
                        
                    {/* <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto rounded-2xl shadow hover:shadow-xl relative group overflow-hidden">
                        <img src="image/illustration/brandimg.jpeg" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"/>
                        <div className="p-15 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white">
                            <h5 className="text-lg font-bold text-center">Brand Identity Design</h5>
                            <p className="text-center">Style Guide | Brand Identity</p>
                            <div className="text-center"><a href="#" className="mt-4 hover:border-b-2 border-sky-500">View Project</a></div>
                        </div>
                    </div>

                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group">
                        <img src="image/illustration/marketingimg.jpeg" className="w-96 md:w-80 xl:w-96 h-60 mx-auto rounded-2xl object-cover" />
                        <div className="p-15 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white">
                            <h5 className="text-lg font-bold text-center">Marketing Automation</h5>
                            <p className="text-center">Workflow Engine | Email Engine</p>
                            <div className="text-center"><a href="#" className="mt-4 hover:border-b-2 border-sky-500">View Project</a></div>
                        </div>
                    </div>

                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group">
                        <img src="image/illustration/socialimg.jpeg" className="w-96 md:w-80 xl:w-96 h-60 mx-auto rounded-2xl object-cover"/>
                        <div className="p-15 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white">
                            <h5 className="text-lg font-bold text-center">Social Media Campaign</h5>
                            <p className="text-center">Viral Content | Social Buzz</p>
                            <div className="text-center"><a href="#" className="mt-4 hover:border-b-2 border-sky-500">View Project</a></div>
                        </div>
                    </div>

                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group">
                        <img src="image/illustration/brandimg.jpeg" className="w-96 md:w-80 xl:w-96 h-60 mx-auto rounded-2xl object-cover"/>
                        <div className="p-15 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white">
                            <h5 className="text-lg font-bold text-center">Corporate Website</h5>
                            <p className="text-center">Optimized Website | SEO Platform</p>
                            <div className="text-center"><a href="#" className="mt-4 hover:border-b-2 border-sky-500">View Project</a></div>
                        </div>
                    </div>

                    <div className="w-96 md:w-80 xl:w-96 h-60 mx-auto mb-8 rounded-2xl shadow hover:shadow-xl relative group">
                        <img src="image/illustration/videoproductionimg.jpeg" className="w-96 md:w-80 xl:w-96 h-60 mx-auto rounded-2xl object-cover"/>
                        <div className="p-15 rounded-2xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white">
                            <h5 className="text-lg font-bold text-center">Video Production</h5>
                            <p className="text-center">Promo Series | Product Showcase</p>
                            <div className="text-center"><a href="#" className="mt-4 hover:border-b-2 border-sky-500">View Project</a></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        </>
    );
}

export default Ourwork;