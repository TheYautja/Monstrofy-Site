import Banner from './Banner.jsx';
import Musicas from './Musicas.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App () {
  const [musicas, setMusicas] = useState([]);

  useEffect (()=>{
    axios.get("http://localhost:3000/musicas")
    .then(res => setMusicas(res.data))
    .catch(err => console.error("deu pau", err))
  }, []);
  
  return(
    <div>
      < Banner/>
        < Musicas db={musicas} />
    </div>
  );
};

export default App
