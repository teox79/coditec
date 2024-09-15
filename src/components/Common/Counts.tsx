import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import { Statistic } from "../../context/HomeType";

// Definire l'interfaccia delle props
interface CountsProps {
    statistics: Statistic[];
}

const Counts: React.FC<CountsProps> = ({ statistics }) => {
    // Inizializza PureCounter
    useEffect(() => {
        new PureCounter();
    }, []);

    return (
        <section id="counts" className="section counts light-background">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    {statistics.map((stat, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="stats-item text-center w-100 h-100">
                                <span
                                    data-purecounter-start="0"
                                    data-purecounter-end={stat.value}
                                    data-purecounter-duration="1"
                                    className="purecounter"
                                ></span>
                                <p>{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counts;
