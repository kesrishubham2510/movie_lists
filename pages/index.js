import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';

import genres from '../utils/requests';

export default function Home({results}) {
  //  the props will contain details about genre-specific movies
  return (
    <div className="">
      <Head>
        <title>Movie List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Page Structure */}
      {/* Header:- To access various settings like and browse around */}
      {/* Navbar:- To select the genre */}
      {/* Results:-  */}
      <Header/>
      <Navbar/>
      <Results results={results}/>
    </div>
  )
}


export async function getServerSideProps(context){

  /*   accessing the genre 
       key is genre because while using router dom we had used the 'genre' variable
  */
    //  console.log(context);
     const genreKey = context.query.genre;
     const genre = genres[genreKey]?.url || genres.fetchTrending.url ;
     console.log("Hitting the "+genreKey);
     //  making the request to TMDB server
     const request = await fetch(`https://api.themoviedb.org/3${genre}`, {
       method : 'GET'
     })
    //  console.log(request);
     const responseData = await request.json();
    //  console.log(responseData.results);     

     return {
       props: {
         results : responseData.results
       }
     }
  }
  
