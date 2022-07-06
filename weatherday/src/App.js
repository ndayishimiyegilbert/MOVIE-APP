
import Feed from './components/feed'
import { useEffect,useState } from 'react';
import Moviecard from './MovieCard';
import "./App.css";


const API_URL="http://www.omdbapi.com?apikey=ad22233b";
const movie1={
  
    "Title": "Superman IV: The Quest for Peace",
    "Year": "1987",
    "imdbID": "tt0094074",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"

}
function App() {
  const [searchterm,setSearchterm]=useState('');
  const[movies,setMovies]=useState([]);
  const searchMovies= async(title)=>{
   const response=await fetch(`${API_URL}&s=${title}`);
  const data=await response.json();

  setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('avengers');

  },[])
  return (
     <div className='app'>
   <h1>Movieland</h1>
   <div className='search'>
    <input
    placeholder="search for a movie "
    value={searchterm}
    onChange={(e)=>setSearchterm(e.target.value)}
    />
    <img
    src="/search.svg"
    alt="search"
    onClick={()=>searchMovies(searchterm)}
    
    />
   </div>
   {
     movies?.length >0
     ?(

   <div className='container'>
     {movies.map((movie)=>(<Moviecard movie={movie} />))}
   {/* <Moviecard movie1={movies[0]}/> */}
   </div>
     ):(
       <div className="empty"> <p>no movie found</p></div>
     )
   }
     </div>
  );
}

export default App;
