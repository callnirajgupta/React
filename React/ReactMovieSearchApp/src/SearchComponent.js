import React, {useState}  from "react"

export default  function SearchComponent(){
    const [movies, setMovie]=useState("")
    const [query,setquery]=useState([])

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/movie/550?api_key=ef9dc0d1c6e5daeae1f72cccba0838a6&language=en-US&query=${query}&page=1&include_adult=false`;
  try{
    const response= await fetch(url)
    const data= await response.json();
    console.log(data)
    setMovie(data.results)
  }catch(err){
      console.log(err)
  }
   

  }

    return (<div>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input  type="text" className="input" name="query" value={query}  placeholder="i.e joker"  
            onChange={(event)=>{setQuery(event.target.value)}}/>
            <button className="search" type="submit">search</button>

        </form>
    </div>)

}