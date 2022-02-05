import React from 'react'
import genres from '../utils/requests'
import Thumbnail from './Thumbnail'

function Results({ results }){
  
  

  return (<div>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

// export async function getServerSideProps(context){

// /*   accessing the genre
//      key is genre because while using router dom we had used the 'genre' variable
// */
//     console.log(context);
//    const genreKey = context.query.genre;
//    console.log("In results "+genreKey);
//    const genre = genres[context.query.genre]?.url || genres.fetchTrending.url ;
//    console.log(genre);
//    //  making the request to TMDB server
//    const request = await fetch(`https://api.themoviedb.org/3/${genre}`);

//    const responseData = request.json();

//    return {
//      props: {
//        responseData: responseData
//      }
//    }
// }

export default Results
