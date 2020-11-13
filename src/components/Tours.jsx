import React from 'react';
import Tour from './Tour';

function Tours(props) {
    return (
        <section>
            <div className="title">
                <h2>Out tours</h2>
            </div>
            <div>
                {props.tours.map((tour) => {
                    return (
                        <Tour 
                            key={tour.id}
                            {...tour}
                        />
                    )
                    })
                }
            </div>
        </section>
    )
}

export default Tours;