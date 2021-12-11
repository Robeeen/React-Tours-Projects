import React from 'react';
import { useState } from 'react';

const Tour = ({id, image, info, price, name})=>{

  const [readmore, setReadmore] = useState(false);

    return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name} | {id}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{/**Putting a if else clause to show first 200 of Details description
       * and by default we will kep it as false, so that a button see more can toggle the description.
       * state value is now false.
       */}
        {readmore ? info: `${info.substring(0, 200)}`}
        <button onClick={(() => {setReadmore (!readmore)})}>
          {readmore ? 'show less' : 'show more'}
        </button>
       </p>
      <button className='delete-btn'>not interested</button>
      
    </footer>
  </article>
 };

export default Tour;
