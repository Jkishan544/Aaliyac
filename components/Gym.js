import GYM from "../assets/images/GYM.png";




export const Gym = () => {
    return (

        <section className="py-6">
            <div className="opacity-75  minh w-auto bg-cover bg-center " style={{ backgroundImage: `url(${GYM})` }} >
                <div className="   w-2/5 pt-64 mr-2 float-right max-sm:w-auto max-sm:pt-2">
                    <h2 className="font-bold font-serif text-white text-3xl text-center max-sm:text-2xl">Built For A Modern Life  </h2>
                    <p className="  text-white text-lg content-center py-3">A large community hall to turn your special occasion into a party, as well as a gym equipped with all the equipment you need to keep in shape.</p>

                </div>
            </div>
        </section>



    );
}

export default Gym;