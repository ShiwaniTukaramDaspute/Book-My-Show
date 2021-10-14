import React from "react";
import Poster from '../components/Poster/PlaysPoster.component';
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";

const Plays = () => {

return (
<>
<div className="container mx-auto px-4 mt-7 mb-10 bg-green-100 rounded-xl">
   <div className="w-full flex justify-around lg:flex lg:flex-row-reverse md:flex-row-reverse md:mt-16 ">
      <div className="lg:w-8/12 mt-8">
         <h2 className="text-2xl font-bold mb-4">Plays in Bhubaneswar</h2>
         <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMiBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315120-lcrklxtskk-portrait.jpg"
                  title="Akshara Theatre's The Ramayana"
                  subtitle="Tamil ₹300"
                  />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315140-nugukwkqzq-portrait.jpg"
                  title="Dum Biryani - 15th Oct"
                  subtitle="Tamil ₹300"
                  />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00305723-ugfbxvukzs-portrait.jpg"
                  title="Poetry Storytelling aur Chai"
                  subtitle="Tamil ₹300"
                  />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315779-vdgvgzlqbz-portrait.jpg"
                  title="A Doll's House"
                  subtitle="Tamil ₹300"
                  />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309928-yqfvelundq-portrait.jpg"
                  title="Aur Kab Tak"
                  subtitle="Tamil ₹300"
                  />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00087629-hjrrxmewav-portrait.jpg"
                  title="Bebaak Mantro"
                  subtitle="Tamil ₹300"
                  />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNCBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-ulwbezwjma-portrait.jpg"
                  title="Ranga Shankara"
                  subtitle="Tamil ₹300"
                  />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-yhhpvqsaab-portrait.jpg"
                  title="Weekend Open-Mic by True Soul Tales"
                  subtitle="Tamil ₹300"
                  />
            </div>
         </div>
      </div>
      <div className="lg:w-1/4 mt-8">
         <h2 className="text-2xl font-bold mb-4">Filters</h2>
         <div className="flex flex-col gap-4">
            <div className="rounded-md h-auto py-3.5 pb-5 border-2 border-dotted border-yellow-400" style={{ backgroundColor: "#F3F4F6"}}>
            <PlaysFilter title="Date" subtitle="Clear" tags={["Today", "Tomorrow", "This Weekend"]}/>
         </div>
         <div className="rounded-md h-auto py-3.5 pb-5 border-2 border-dotted border-yellow-400" style={{ backgroundColor: "#F3F4F6"}}>
         <PlaysFilter title="Language" subtitle="Clear" tags={["Tamil", "Kannada"]}/>
      </div>
      <div className="rounded-md h-auto py-3.5 pb-5 border-2 border-dotted border-yellow-400" style={{ backgroundColor: "#F3F4F6"}}>
      <PlaysFilter title="Genres" subtitle="Clear" tags={["Comedy", "Drama"]}/>
   </div>
   <div className="rounded-md h-auto py-3.5 pb-5 border-2 border-dotted border-yellow-400" style={{ backgroundColor: "#F3F4F6"}}>
   <PlaysFilter title="MoreFilters" subtitle="Clear" tags={["Online Streaming"]}/>
</div>
<div className="rounded-md h-auto py-3.5 pb-5 border-2 border-dotted border-yellow-400" style={{ backgroundColor: "#F3F4F6"}}>
<PlaysFilter title="Price" subtitle="Clear" tags={["Free", "0-500", "501-200", "Above 2000"]}/>
</div>
</div>
</div>
</div>
</div>
</>
)
};
export default Plays;
