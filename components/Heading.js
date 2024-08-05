
import React from "react";


export const Heading = (props) => {
        return (


                <div>
                        <h1 className="max-sm:text-2xl text-4xl font-bold font-serif font-barlow">{props.title}</h1>
                        <hr className="max-sm:w-16 w-32 border-t-4 border-orange-600 mt-2" />

                </div>

        );
}
export default Heading;
