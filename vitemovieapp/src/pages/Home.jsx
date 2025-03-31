import MovieCard from "../components/MovieCard.jsx"
import {useState} from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "john wick", releaseDate: "2021"},
        {id: 2, title: "iron man", releaseDate: "2022"},
        {id: 3, title: "jumanji", releaseDate: "2023"},
        {id: 4, title: "pirates of the carabian", releaseDate: "2024"}
    ]

    const handleSearch = (event) => {
        alert(searchQuery)
    }


    return (
        <div className="home">
            <form className="search-movies" onSubmit={handleSearch}>
                <input type="text" placeholder="Search For Movies" 
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}/>
                <button type="submit">Search</button>
            </form>


            <div className="movies-grid">
                {movies.map(movie => 
                    movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>)
                )}
            </div>
        </div>
    )
}

export default Home