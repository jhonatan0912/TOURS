import React, { useEffect, useState } from 'react'
import Loader from './components/Loader';
import ToursList from './components/ToursList';

function App() {
  const url = 'https://course-api.com/react-tours-project';
  const [loader, setLoader] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch(url)
      const data = await response.json();
      setLoader(false)
      setTours(data)
    }
    fetchTours()
  }, [])

  return (
    <div>
      {
        loader
          ? <Loader />
          : <main>
            <div className='title'>
              <h2>our tours</h2>
              <div className="underline"></div>
            </div>
            <ToursList tours={tours} removeTour={removeTour} />
          </main>
      }
    </div>
  )
}

export default App