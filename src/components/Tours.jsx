import React from 'react';
import Tour from './Tour';

function Tours({tours, deleteTour}) {
    return (
        <section>
            <div className="title">
                <h2>Our tours</h2>
            </div>
            <div>
                {tours.map((tour) => {
                    return (
                        <Tour 
                            key={tour.id}
                            {...tour}
                            deleteTour={deleteTour}
                        />
                    )
                    })
                }
            </div>
        </section>
    )
}

export default Tours;