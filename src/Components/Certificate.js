
const Certificate=()=>{
    return(
        <>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-6 text-center">
            <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
            <div className="container mx-auto mt-5">
                <div className="text-center">
                    <h3 className="text-2xl font-bold leading-loose">Get Your Verified Certificate</h3>
                    <p className="text-base leading-relaxed">Upon successful completion of your internship, you'll receive an official certificate that can be verified through our secure system.</p>
                </div>

                <div className="border-2 border-indigo-600 w-96 h-96 mx-auto mt-5 text-center content-center">
                    <p className="text-lg font-bold">Certificate</p>
                </div>

                <div className="text-center mt-8 mb-5">
                    <button type="submit" className="border w-48 h-10 bg-blue-400 rounded-lg ring-offset-2 ring-2">Verify a Certificate</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Certificate;