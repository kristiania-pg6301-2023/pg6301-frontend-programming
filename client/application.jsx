import {HashRouter, Link, Route, Routes} from "react-router-dom";

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

function ListMovies() {
    return <h1>List Movies</h1>;
}

function AddNewMovie() {
    return <h1>Add Movie to Database</h1>;
}

function MovieRoutes() {
    return <Routes>
        <Route path={"/"} element={<FrontPage/>}/>
        <Route path={"/movies"} element={<ListMovies/>}/>
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