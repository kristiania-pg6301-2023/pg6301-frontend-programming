import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {useState} from "react";

function FrontPage() {
    return <>
        <h1>Front Page</h1>
        <div>
            <Link to={"/movies"}>List movies</Link>
        </div>
        <div>
            <Link to={"/movies/new"}>Add movie</Link>
        </div>
    </>;
}

function ListMovies({movies}) {
    return <>
        <h1>List Movies</h1>
        {movies.map(m =>
            <div key={m.title}>
                <h3>{m.title} ({m.year})</h3>
                <div>{m.plot}</div>
            </div>
        )}
    </>;
}

function AddNewMovie() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    const movie = {title, year, plot}

    return <form>
        <h1>Add Movie to Database</h1>

        <div>
            Title:<br />
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div>
            Year:<br />
            <input type="text" value={year} onChange={e => setYear(e.target.value)}/>
        </div>

        <div>
            Plot: <br />
            <textarea value={plot} onChange={e => setPlot(e.target.value)} />
        </div>


        <button>Submit</button>
        <pre>
            {JSON.stringify(movie)}
        </pre>
    </form>;
}

function MovieRoutes() {
    const [movies] = useState([
        {
            title: "Don't look up",
            year: "2022",
            plot: "Politicians ignore impending doom"
        },
        {
            title: "Oppenheimer",
            year: "2023",
            plot: "Boom"
        }
    ])

    return <Routes>
        <Route path={"/"} element={<FrontPage/>}/>
        <Route path={"/movies"} element={<ListMovies movies={movies}/>}/>
        <Route path={"/movies/new"} element={<AddNewMovie/>}/>
        <Route path={"/*"} element={<h1>Not Found</h1>}/>
    </Routes>;
}

export function Application() {
    return <HashRouter>
        <header><h1>Kristiania Movie Database</h1></header>
        <nav><Link to={"/"}>Front page</Link></nav>
        <main>
            <MovieRoutes/>
        </main>
        <footer>Created by Johannes Brodwall @ Kristiania University Collect</footer>
    </HashRouter>;
}