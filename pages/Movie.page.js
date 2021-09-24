import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import CastSlider from "../components/CastSlider/CastSlider.component";
import TempCast from "../config/TempCast.config";
import TempCrew from "../config/TempCrew.config";
import {BiCameraMovie} from "react-icons/bi";

const Movie = () => {
  return (
    <>
    <MovieHero />
    <div class="my-10 container mx-auto px-4 lg:w-2/3 lg:ml-10">
      <div class="flex flex-col items-start gap-3">
        <h2 class="text-black font-bold text-2xl">About the movie</h2>
        <p>A family of four`s visit to a beach turns deadly when they realize it is making them age rapidly. As the kids grow and the parents age, they must find an escape before the day is out.</p>
      </div>
      <div className="my-8">
       <hr />
      </div>

      <div className="flex flex-col items-start gap-3">
        <h1 className="text-black font-bold text-2xl">Applicable offers</h1>
         <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96 ">
           <div className="w-8 h-8">
             <BiCameraMovie className="w-full h-full" />
           </div>
           <div className="flex flex-col items-start">
             <h3 className="text-black text-lg">Filmy Pass</h3>
             <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
           </div>
         </div>
      </div>
      <div className="my-8">
       <hr />
      </div>

   <div class="flex flex-col gap-10">
       <div className="container mx-auto px-4">
       <CastSlider
       images={TempCast}
       title="Cast"
       isDark={false}
       />
       </div>
   </div>
   <div className="my-8">
    <hr />
   </div>

   <div class="flex flex-col gap-10">
       <div className="container mx-auto px-4">
       <CastSlider
       images={TempCrew}
       title="Crew"
       isDark={false}
       />
       </div>
    </div>


</div>
    </>
  );
};
export default Movie;
