import React from "react";
import { servicesData } from './ServicesData';

export default function Services() {

    return (
        <>
            {servicesData.map((el,index) => (
                <div className="d-flex justify-content-center col-md-3" key={index}>
                    <div className="servIcon mx-2">
                        <img src={el.servImg} alt={el.alttext} />
                    </div>
                    <div className="text mx-2">
                        <h4 className="fw-bold">{el.title}</h4>
                        <p>{el.desc}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
