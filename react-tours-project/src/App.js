import React, { useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //function 
  //useEffect() hook accepts 2 arguments: useEffect(callback[, dependencies]);
  //A functional React component uses props and/or state to calculate the output. 
  //If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.
  //Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.

  const removeTours = (id) =>{
      const newTours = (tours).filter((tour) => tour.id !==id);
      setTours(newTours);
  }

  const  fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);    
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  
  };
  useEffect(() => {
    fetchTours();
  }, [])
  
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
  {/** When all tours removed, then display a message no tours left and show a button to refresh-reload all tours
  We will use .length equal 0 and realod the Tours using fetchTours */}
  if(tours.length == 0){
    return <main>
      <div className='title'>
        <h2>No Tours Left now !!</h2>
        <button className='btn' onClick={fetchTours}>Reload Tours</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
