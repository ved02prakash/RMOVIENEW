import { useEffect, useState } from 'react';
import MoviesList from './movieList'
import { landingPage } from './movies.model';

export default function LandingPage(){
    const [movies, setMovies]=useState<landingPage>({});
    useEffect(()=>{
        const timerid=setTimeout(()=>{
          setMovies({
            inTheaters:[
              {
                id:1,
                title:'Spider-Man : Far From House',
                poster:'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
              },
              {
                id:2,
                title:'Luca',
                poster:'https://th.bing.com/th/id/OIP.lmNmvYA7q99Unw67iSjwSgHaJQ?w=199&h=249&c=7&r=0&o=5&dpr=1.3&pid=1.7'
              }
            ],
          upcomingReleases:
          [
            {
              id:1,
              title:'Lakhera',
              poster:'https://th.bing.com/th?id=OIP.w-Z1i330rJ8d9aiG612xgAHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
            },
            {
              id:2,
              title:'Odhaniya',
              poster:'https://th.bing.com/th?id=OIP.UGOUfLOo_uct-VjbkKUapQHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
            }
          ]
          }
          )        
          },1000);
          return ()=> clearTimeout(timerid);
        }) 
    return (
        <>
        <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters}/>
            <h3>Upcoming Movies</h3>
            <MoviesList movies={movies.upcomingReleases}/>
        </>
    )
}