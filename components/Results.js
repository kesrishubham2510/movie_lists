import React from 'react';
import genres from '../utils/requests';

function Results(props) {
  
    return <div>
	  <h2>This is the results</h2>
  </div>;
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

export default Results;