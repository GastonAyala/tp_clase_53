import ContentRowMovies from "../components/Movies/ContentRowMovies";
import LastMovieInDb from "../components/Movies/LastMovieInDb";

export const RoutesMovies = [
    {
        path: "/movies/last",
        element: <LastMovieInDb />
    },
    {
        path: "/contentRowMovies",
        element: <ContentRowMovies />
    }
]