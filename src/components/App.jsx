import React, {useState, useEffect} from 'react';
import Tours from './Tours';
import Loading from './Loading';
const url = "https://course-api.netlify.app/api/react-tours-project";

function App() {

    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch(error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);
    
    function deleteTour(id) {
        setTours(prevValue => {
            return prevValue.filter(tour => {
                return tour.id !== id;
            })
        })
    }

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    } else if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h3>No Tours Left</h3>
                    <button className="btn" onClick={() => fetchTours()}>Refresh</button>
                </div>
            </main>
        );
    }
    return (
        <main>
            <Tours tours={tours} deleteTour={deleteTour}/>
        </main>
    );
}

export default App;