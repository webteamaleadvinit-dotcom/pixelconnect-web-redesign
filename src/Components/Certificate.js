
const Certificate=()=>{
    return(
        <>
        <section className="">
            <div className="container mx-auto mt-25">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-500 leading-loose">Get Your Verified Certificate</h3>
                    <p className="text-base leading-relaxed">Upon successful completion of your internship, you'll receive an official certificate that can be verified through our secure system.</p>
                </div>

                <div className="border border-blue-500 rounded-2xl w-96 h-96 mx-auto mt-5 text-center content-center">
                    <p className="text-lg font-bold text-blue-500">Certificate</p>
                </div>

                <div className="text-center mt-8 mb-5">
                    <button type="submit" className="border w-48 h-10 bg-blue-600 text-white rounded-lg ring-offset-2 ring-2 hover:bg-blue-700">Verify a Certificate</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Certificate;