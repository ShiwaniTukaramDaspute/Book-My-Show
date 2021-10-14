import axios from "axios";
import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component.js";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";


const HomePage = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
  const requestUpcomingMovies = async () => {
    const getUpcomingMovies = await axios.get("/movie/upcoming");
    setUpcomingMovies(getUpcomingMovies.data.results);
  };
  requestUpcomingMovies();
  },[]);

  console.log({upcomingMovies});


  const [popularMovies, setPopularMovies] = useState([]);

useEffect(() => {
  const requestPopularMovies = async () => {
    const getPopularMovies = await axios.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results);
  };
  requestPopularMovies();
},[]);

console.log({popularMovies});


const [topRated, setTopRated] = useState([]);

useEffect(() => {
const requestTopRated = async () => {
  const getTopRated = await axios.get("/movie/top_rated");
  setTopRated(getTopRated.data.results);
};
requestTopRated();
},[]);

console.log({topRated});


const [nowPlaying, setNowPlaying] = useState([]);

useEffect(() => {
const requestNowPlaying = async () => {
  const getNowPlaying = await axios.get("/movie/now_playing");
  setNowPlaying(getNowPlaying.data.results);
};
requestNowPlaying();
},[]);

console.log({nowPlaying});


  return (
  <>


  <div className="container mx-auto px-4 pb-10 sm:	max-width: 640px;">
  <PosterSlider
  images={upcomingMovies}
  title="Recommended Movies"
  isDark={false}
  />
  </div>


  <div class="flex flex-col gap-10">
  <div className="container mx-auto px-4">
  <h1 className="text-2xl font-bold text-gray-800">
  The Best of Entertainment
  </h1>
  <EntertainmentCardSlider />
  </div>

  <div className="bg-navCol-200 p-10">

   <div className="container mx-auto px-4 md:h-50">
   <div className="flex">
    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
    alt="Rupay"
    className="w-full h-full"
    />

   </div>
   <PosterSlider
   images={popularMovies}
   title="Premiers"
   subtitle="Brand New Releases Every Friday" isDark/>
   </div >
  </div>
  </div>

<div className="container mx-auto px-4">
<PosterSlider
images={topRated}
title="Online Streaming Events"
isDark={false}
/>
  </div>

  <div className="container mx-auto px-4">
  <PosterSlider
  images={nowPlaying}
  title="Outdoor Events"
  isDark={false}
  />
    </div>
  </>
 );
};

export default HomePage;
