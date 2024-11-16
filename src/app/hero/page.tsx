import Image from "next/image"
export default function Hero(){
    return (

 <>
 <section className="  text-white " >

 <div className="flex flex-col md:flex-row w-[100vw] h-[500px] items-center bg-gry-500 jus">


<div className="bg-orage-100 md:w-1/2 md:h-auto h-auto w-1/2 mt-10 md:flex  md:flex-col md:justify-center ">
<h1 className="text-[3em] flex md:ml-5  text-wrap font-extrabold md-[5px]  ">I Am Saud Abbasi</h1>

<p className="mt-[10px] ml-[10px] md:ml-5 font-mono ">I am a Full Stack Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum voluptas natus sequi illo eos fugit ipsam assumenda hic, architecto nulla corrupti accusamus ratione </p>

</div>





<div className="bg-orage-300 md:w-1/2  md:h-auto h-[500px] mt-10 w-auto flex items-center justify-center">
<Image src="/pfp.jpg" alt="hero" width={300} height={500} className="w-[270px] h-[270px] rounded-[200px] object-cover border-2 shadow-gray-500 shadow-2xl " />

</div>
 </div>
<div className=" flex md:flex-row flex-col items-center md:justify-center h-1/2  ">



    <div className=" w-1/2 mb-[100px] mt-[200px] md:mt-0 ">
<Image src={"/banner.jpeg"} height={300} width={500} alt="banner" className="h-[200px] mt-5 rounded-3xl md:ml-5 w-[500px] object-cover border-2  shadow-gray-500 shadow-2xl " ></Image>


    </div>


    <div className="h-auto w-1/2 mb-[100px] md:ml-10 mt-5">
<h1 className="mb-2 text-[2em] font-bold "> About Me</h1>
<p className="font-mono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, voluptatum quia adipisci vero reprehenderit perferendis! Iure
     a atque deserunt labore quaerat. </p>
    </div>


</div>
 
 
 
 
 
 
 
 </section>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 </>   
    )
}