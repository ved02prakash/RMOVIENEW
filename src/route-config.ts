import IndexGenres from "./genres/indexGenres";
import LandingPage from "./movies/LandingPage";
import IndexActors from "./actors/indexActors";
import indexmovietheaters from "./movietheaters/indexmovietheares";
import editmovietheater from "./movietheaters/editmovietheater";
import editmovie from "./movies/editmovie";
import filtermovies from "./movies/filtermovies";
import CreateMovieTheater from "./movietheaters/createmovietheater";
import CreateMovie from "./movies/createmovie";
import Creategenres from "./genres/creategenres";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";
import Editgenres from "./genres/Editgenres";
import CreateActors from "./actors/CreateActors";
import EditActorForm from "./actors/EditActorForm";

const routes=[
    {path:'/genres',component:IndexGenres, exact:true},
    {path:'/genres/create',component:Creategenres},
    {path:'/genres/edit/:id(\\d+)',component:Editgenres},

    {path:'/actors',component:IndexActors, exact:true},
    {path:'/actors/create',component:CreateActors},
    {path:'/actors/edit/:id(\\d+)',component:EditActorForm},

    {path:'/movietheaters',component:indexmovietheaters, exact:true},
    {path:'/movietheaters/create',component:CreateMovieTheater},
    {path:'/movietheaters/edit/:id(\\d+)',component:editmovietheater},

    {path:'/movies/create',component:CreateMovie},
    {path:'/movies/edit/:id(\\d+)',component:editmovie},
    {path:'/movies/filter',component:filtermovies},

    {path:'/',component:LandingPage, exact:true},
    {path:'*',component:RedirectToLandingPage}
];

export default routes;