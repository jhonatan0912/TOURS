import React from 'react'
import TourCard from './TourCard';

function ToursList({ tours, removeTour }) {
  return (
    <div>
      {
        tours.length == 0 ?
          <div className='title'>
            <h2>No tours left</h2>
          </div>
          :
          tours.map(tour => <TourCard key={tour.id} tour={tour} removeTour={removeTour} />)
      }
    </div>
  )
}

export default ToursList