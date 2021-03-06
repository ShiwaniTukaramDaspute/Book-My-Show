import React from "react";
import {BiChevronRight, BiShareAlt} from "react-icons/bi";
import {FaHeart} from "react-icons/fa";

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_iRN9iQN01xDbdU",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};


const MovieHero = () => {
return (
<>
<div className=" relative md:hidden pb-4 mb-72">
<div className="absolute left-4 px-6 z-30 w-30 h-70 top-full text-black font-bold">

   <section className="flex flex-row items-baseline pb-2">
      <span><FaHeart style={{ color: "red", fontSize: "15px"}} /></span>
      <span style={{ fontSize: "24px", fontWeight: "bold", padding: "2px 0px 0px 8px"}}>69%</span>
      <span style={{ fontSize: "16px", fontWeight: "normal", padding: "2px 2px 0px 8px"}}>364 ratings</span>
      <span><BiChevronRight style={{ fontSize: "20px"}} /></span>
   </section>

   <section className="flex items-center justify-between w-full px-4 py-1"
            style={{ backgroundColor: "#E8F6EF", borderRadius: "8px"}}>
      <div className="w-auto">
        <h5 style={{fontSize: "16px"}}>
          Add your rating & review
        </h5>
        <h6 style={{fontWeight: "normal", fontSize: "12px"}}>
          Your ratings matter
        </h6>
      </div>
      <div className="pl-20">
      <div className="border border-red-500 rounded-lg">
        <button style={{width: "70px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "8px", color: "red", padding: "8px 12px", fontWeight: "bold", fontSize: "10px"}}>Rate now</button>
      </div>
      </div>
   </section>

   <div className="flex flex-wrap gap-3" style={{color: "rgb(255, 255, 255)", fontSize: "16px", fontWeight: "normal"}}>
       <div className="flex flex-wrap flex-start" style={{backgroundColor: "#DCDCDC", color: "rgb(0, 0, 0)", padding: "2px 8px", borderRadius: "2px", marginTop: "20px", marginBottom: "10px", fontWeight: "500"}}>
       2D
       </div>
       <div className="flex flex-wrap flex-start " style={{backgroundColor: "#DCDCDC", color: "rgb(0, 0, 0)", padding: "2px 8px", borderRadius: "2px", marginTop: "20px",marginBottom: "10px", fontWeight: "500"}}>
       English, Hindi
       </div>
    </div>
      <div className="mb-2" style={{fontSize: "16px", fontWeight: "normal", color: "black"}}>
      1h 48m ??? Drama ??? UA ??? 17 Sep, 2021
      </div>
      <button onClick={launchRazorPay} class=" mb-5 h-8 w-32 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded" style={{fontSize: "10px"}}>
        Book tickets
      </button>
</div>
   <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/old-et00311715-11-08-2021-11-40-03.jpg"
      alt="poster"
      className="p-1"
      />
</div>


<div className="hidden md:block lg:hidden">
<div className="absolute h-96 w-full z-10"
style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>
<div className="absolute z-30  w-64 h-96 left-16 top-16">
   <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/old-et00311715-11-08-2021-11-40-03.jpg"
      alt="poster"
      className="h-full w-full rounded-xl"
      style={{ height: "78%", width: "80%"}}
      />
</div>

      <div className="absolute px-10 z-30 w-30 h-96 left-64 top-8 text-white font-bold">
         <h1 className="pt-4" style={{ fontSize: "36px"}}>Old</h1>
         <section className="flex flex-row items-baseline pb-2">
            <span><FaHeart style={{ color: "red", fontSize: "21px"}} /></span>
            <span style={{ fontSize: "24px", fontWeight: "bold", padding: "2px 0px 0px 8px"}}>69%</span>
            <span style={{ fontSize: "16px", fontWeight: "normal", padding: "2px 2px 0px 8px"}}>364 ratings</span>
            <span><BiChevronRight style={{ fontSize: "20px"}} /></span>
         </section>

         <section className="flex items-center justify-between w-full px-2 py-2"
                  style={{ backgroundColor: "rgb(51, 51, 51)", borderRadius: "8px"}}>
            <div className="w-auto">
              <h5 style={{fontSize: "18px"}}>
                Add your rating & review
              </h5>
              <h6 style={{fontWeight: "normal", fontSize: "16px", color: "#DCDCDC"}}>
                Your ratings matter
              </h6>
            </div>
            <div className="pl-20">
              <button style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "8px", color: "rgb(51, 51, 51)", padding: "8px 12px", fontWeight: "bold", fontSize: "18px"}}>Rate now</button>
            </div>
         </section>

         <div className="flex flex-wrap gap-3" style={{color: "rgb(255, 255, 255)", fontSize: "16px", fontWeight: "normal"}}>
             <div className="flex flex-wrap flex-start" style={{backgroundColor: "rgb(238, 238, 238)", color: "rgb(0, 0, 0)", padding: "2px 8px", borderRadius: "2px", marginTop: "20px", marginBottom: "10px", fontWeight: "500"}}>
             2D
             </div>
             <div className="flex flex-wrap flex-start pb-2" style={{backgroundColor: "rgb(238, 238, 238)", color: "rgb(0, 0, 0)", padding: "2px 8px", borderRadius: "2px", marginTop: "20px",marginBottom: "10px", fontWeight: "500"}}>
             English, Hindi
             </div>
          </div>
            <div className="mt-1.5" style={{fontSize: "16px", fontWeight: "normal", color: "rgb(238, 238, 238)"}}>
            1h 48m ??? Drama ??? UA ??? 17 Sep, 2021
            </div>
            <button onClick={launchRazorPay} class="mt-6 h-12 w-52 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
              Book tickets
            </button>
      </div>
      <img
         src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/old-et00311715-11-08-2021-11-40-03.jpg"
         alt="poster"
         />
</div>


<div className="relative hidden lg:block" style={{ height: "520px"}}>
<div className="absolute h-full w-full z-10"
style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>
<div className="absolute z-30  w-64 h-96 left-16 top-16">
   <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/old-et00311715-11-08-2021-11-40-03.jpg"
      alt="poster"
      className="h-full w-full rounded-xl"
      />
</div>

<div className="absolute px-10 z-30 w-30 h-96 left-80 top-12 text-white font-bold">
   <h1 className="py-4" style={{ fontSize: "36px"}}>Old</h1>
   <section className="flex flex-row items-baseline pb-6">
      <span><FaHeart style={{ color: "red", fontSize: "21px"}} /></span>
      <span style={{ fontSize: "24px", fontWeight: "bold", padding: "2px 0px 0px 8px"}}>69%</span>
      <span style={{ fontSize: "16px", fontWeight: "normal", padding: "2px 2px 0px 8px"}}>364 ratings</span>
      <span><BiChevronRight style={{ fontSize: "20px"}} /></span>
   </section>

   <section className="flex items-center justify-between w-full px-6 py-2"
            style={{ backgroundColor: "rgb(51, 51, 51)", borderRadius: "8px"}}>
      <div className="w-auto">
        <h5 style={{fontSize: "18px"}}>
          Add your rating & review
        </h5>
        <h6 style={{fontWeight: "normal", fontSize: "16px", color: "#DCDCDC"}}>
          Your ratings matter
        </h6>
      </div>
      <div className="pl-20">
        <button style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "8px", color: "rgb(51, 51, 51)", padding: "8px 12px", fontWeight: "bold", fontSize: "18px"}}>Rate now</button>
      </div>
   </section>

   <div className="flex flex-wrap gap-3" style={{color: "rgb(255, 255, 255)", fontSize: "16px", fontWeight: "normal"}}>
       <div className="flex flex-wrap flex-start" style={{backgroundColor: "rgb(238, 238, 238)", color: "rgb(0, 0, 0)", padding: "2px 8px", borderRadius: "2px", marginTop: "30px", fontWeight: "500"}}>
       2D
       </div>
       <div className="flex flex-wrap flex-start" style={{backgroundColor: "rgb(238, 238, 238)", color: "rgb(0, 0, 0)", padding: "2px 8px", borderRadius: "2px", marginTop: "30px", fontWeight: "500"}}>
       English, Hindi
       </div>
    </div>
      <div className="mt-5" style={{fontSize: "16px", fontWeight: "normal", color: "rgb(238, 238, 238)"}}>
      1h 48m ??? Drama ??? UA ??? 17 Sep, 2021
      </div>
      <button onClick={launchRazorPay} class="mt-6 h-12 w-52 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
        Book tickets
      </button>

</div>


<img
   src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/old-et00311715-11-08-2021-11-40-03.jpg"
   alt="poster"
   className="w-full h-full"
   />

   <section class="absolute top-10 right-10 flex items-center justify-between" style={{height: "45px", width: "122px", backgroundColor: "rgba(34, 34, 34, 0.8)", opacity: "0.8", padding: "0px 16px", borderRadius: "4px"}}>
     <div className="">
      <BiShareAlt style={{fontSize: "32px", fontWeight: "100", color: "rgb(255, 255, 255)"}} />
     </div>
     <div style={{fontSize: "16px", fontWeight: "500", color: "rgb(255, 255, 255)"}}>
      Share
     </div>
   </section>
</div>
</>
)
};
export default MovieHero;
