
const Ourwork=()=>{
    return(
        <>
        <section className="bg-blue-50">
            <div className="container mx-auto mt-5">
                <div className="h-32 sm:p-5 xl:p-0 xl:flex  items-center">
                    <h4 className="xl:w-1/2  font-bold tracking-wide text-blue-500 xl:text-center text-4xl">Our Work</h4>
                    <p className="xl:w-1/2 text-base lg:text-xl leading-loose">Explore our portfolio of successful projects that showcase our expertise in both creative and technical domains.</p>
                </div>

                <div className="md:grid grid-cols-2 gap-2 lg:grid-cols-3">
                        <figure className="bg-white sm:w-96 md:w-80 xl:w-96 mx-auto mb-10 shadow-xl hover:shadow-cyan-400/50">
                            <img src="image/illustration/ecommerce.jpg" className="h-64"/>
                            <figcaption className="p-5">
                                <h5 className="text-xl font-bold">E-commerce Platform</h5>
                                <p className="text-base text-slate-500 pb-5">Modern online store with payment integration and inventory management.</p>
                                <hr/>
                                <div className="text-right"><a href="" className="text-slate-500 hover:text-blue-600">View Project <i class="bi bi-arrow-up-right"></i></a></div>
                            </figcaption>
                        </figure>

                        <figure className="bg-white sm:w-96 md:w-80 xl:w-96 mx-auto mb-10 shadow-xl hover:shadow-cyan-400/50">
                            <img src="image/illustration/blog.jpg" className="h-64"/>
                            <figcaption className="p-5">
                                <h5 className="text-xl font-bold">Brand Identity Design</h5>
                                <p className="text-base text-slate-500 pb-5">Complete brand package including logo, colors, and style guide.</p>
                                <hr></hr>
                                <div className="text-right"><a href="" className="text-slate-500 hover:text-blue-600">View Project <i class="bi bi-arrow-up-right"></i></a></div>
                            </figcaption>
                        </figure>

                        <figure className="bg-white sm:w-96 md:w-80 xl:w-96 mx-auto mb-10 shadow-xl hover:shadow-cyan-400/50">
                            <img src="image/illustration/marketing.jpg" className="h-64"/>
                            <figcaption className="p-5">
                                <h5 className="text-xl font-bold">Marketing Automation</h5>
                                <p className="text-base text-slate-500 pb-5">Custom workflow automation for lead generation and email marketing.</p>
                                <hr></hr>
                                <div className="text-right"><a href="" className="text-slate-500 hover:text-blue-600">View Project <i class="bi bi-arrow-up-right"></i></a></div>
                            </figcaption>
                        </figure>

                        <figure className="bg-white sm:w-96 md:w-80 xl:w-96 mx-auto mb-10 shadow-xl hover:shadow-cyan-400/50">
                            <img src="image/illustration/socialmedia.jpg" className="h-64"/>
                            <figcaption className="p-5">
                                <h5 className="text-xl font-bold">Social Media Campaign</h5>
                                <p className="text-base text-slate-500 pb-5">Viral social media content that increased engagement by 300%.</p>
                                <hr></hr>
                                <div className="text-right"><a href="" className="text-slate-500 hover:text-blue-600">View Project <i class="bi bi-arrow-up-right"></i></a></div>
                            </figcaption>
                        </figure>

                        <figure className="bg-white sm:w-96 md:w-80 xl:w-96 mx-auto mb-10 shadow-xl hover:shadow-cyan-400/50">
                            <img src="image/illustration/blog.jpg" className="h-64"/>
                            <figcaption className="p-5">
                                <h5 className="text-xl font-bold">Corporate Website</h5>
                                <p className="text-base text-slate-500 pb-5">Professional website with CMS and SEO optimization.</p>
                                <hr></hr>
                                <div className="text-right"><a href="" className="text-slate-500 hover:text-blue-600">View Project <i class="bi bi-arrow-up-right"></i></a></div>
                            </figcaption>
                        </figure>

                        <figure className="bg-white sm:w-96 md:w-80 xl:w-96 mx-auto mb-10 shadow-xl hover:shadow-cyan-400/50">
                            <img src="image/illustration/videoediting.jpg" className="h-64"/>
                            <figcaption className="p-5">
                                <h5 className="text-xl font-bold">Video Production</h5>
                                <p className="text-base text-slate-500 pb-5">Promotional video series for product launch campaign.</p>
                                <hr></hr>
                                <div className="text-right"><a href="" className="text-slate-500 hover:text-blue-600">View Project <i class="bi bi-arrow-up-right"></i></a></div>
                            </figcaption>
                        </figure>
                </div>
            </div>
        </section>
        </>
    );
}

export default Ourwork;
