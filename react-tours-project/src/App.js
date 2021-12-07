import React, { useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.netlify.app/api/react-tours-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div>
      <h2>Tour Blog by React</h2>
    </div>
  );
}

export default App;
