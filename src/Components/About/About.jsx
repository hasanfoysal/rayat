import BoxReveal from "../BoxReveal/BoxReveal";


const About = () => {
    return (
        <div>
            <h1 className="text-center text-white font-bold  ml-[100px] md:ml-[300px] lg:ml-[800px] justify-center text-4xl btn btn-outline border-0 border-b-4 border-green-400  shadow-sm   shadow-green-400 mt-16">About</h1>
            <div className="hero shadow-lg shadow-green-400  bg-black text-white lg:max-w-[1400px] mx-auto  min-h-screen">
                
  <div className="hero-content flex-col lg:flex-row ">
  <div className=" lg:mb-[650px]">
      <BoxReveal boxColor={"#4ade80"} duration={0.5}><p className="text-gray-100 text-xl mx-3 my-7 mb-6 "> Hi 👋, I'm Hossain Ibn Masudul Haque <br /> A passionate Computer Science and Engineering graduate with a relentless drive for innovation and a fervent love for competitive programming.I am always eager to tackle the next coding challenge head-on. Whether it's optimizing algorithms, designing efficient data structures, or unraveling intricate puzzles, I approach each problem with tenacity and creativity, striving for excellence in every line of code I write. But my passion for technology extends beyond the realm of competitive programming. </p></BoxReveal>
      
                {/* <div className="lg:flex md:flex md:space-x-28 lg:space-x-52 my-3">
                <BoxReveal boxColor={"#4ade80"} duration={0.5}><h1 className="text-slate-300   space-x-9">Name  <span className="text-white text-xl">Hossain Ibn Masudul Haque</span></h1></BoxReveal>
                <BoxReveal boxColor={"#4ade80"} duration={0.5}><h1 className="text-slate-300  space-x-3">Phone  <span className="text-white text-xl mr-12">01302393709</span></h1></BoxReveal>
                </div>
                <div className="lg:flex md:flex md:space-x-28 lg:space-x-48 my-3">
                <BoxReveal boxColor={"#4ade80"} duration={0.5}> <h1 className="text-slate-300 lg:ml-2 space-x-9">Experience  <span className="text-white text-xl">
            6+ Months</span></h1></BoxReveal>
            <BoxReveal boxColor={"#4ade80"} duration={0.5}> <h1 className="text-slate-300 space-x-3">
            Nationality <span className="text-white text-xl ">Bangladeshi</span></h1></BoxReveal>
                </div>
                <div className="lg:flex md:flex md:space-x-20 lg:space-x-16  my-3">
                <BoxReveal boxColor={"#4ade80"} duration={0.5}> <h1 className="text-slate-300 lg:ml-2  space-x-3">Email <span className="text-white text-xl">haque2305101260@diu.edu.bd</span></h1></BoxReveal>
                <BoxReveal boxColor={"#4ade80"} duration={0.5}> <h1 className="text-slate-300  space-x-3 lg:ml-4">Language  <span className="text-white text-xl ">Bangla, English,Hindi</span></h1></BoxReveal>
                </div> */}
             </div>
    <div className=" lg:p-36">
    <BoxReveal boxColor={"#4ade80"} duration={0.5}><h1 className="lg:text-5xl text-3xl text-center font-bold"><span className="text-green-400">Education</span></h1></BoxReveal>
     
        <div className="text-white text-left">
        <BoxReveal boxColor={"#4ade80"} duration={0.5}> <h1 className="text-2xl p-2">BSc in Computer Science and Engineering</h1></BoxReveal>
        <BoxReveal boxColor={"#4ade80"} duration={0.5}><h2>Daffodil International University</h2></BoxReveal>
        <BoxReveal boxColor={"#4ade80"} duration={0.5}><h6 className="text-center">Currently</h6></BoxReveal>
<div className="mt-8 text-left"> 
<BoxReveal boxColor={"#4ade80"} duration={0.5}> <h1 className="text-2xl p-2">Higher Secondary Certificate (HSC)</h1></BoxReveal>
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h2>Savar Cantonment Public School and College</h2></BoxReveal>
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h6>Year of Passing: 2022</h6></BoxReveal>
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h3>GPA: 5.0</h3></BoxReveal>
</div>
<div className="mt-8 text-left"> 
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h1 className="text-2xl p-2">Secondary School Certificate (SSC)</h1></BoxReveal>
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h2>Morning Glory School and College</h2></BoxReveal>
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h6>Year of Passing: 2020</h6></BoxReveal>
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h3>GPA: 5.0</h3></BoxReveal>
</div>
<div className="mt-8 text-left"> 
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h1 className="text-2xl p-2">Junior School Certificate (JSC)</h1></BoxReveal>
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h2>Morning Glory School and College</h2></BoxReveal>
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h6>Year of Passing: 2017</h6></BoxReveal>
<BoxReveal boxColor={"#4ade80"} duration={0.5}><h3>GPA: 5.0</h3></BoxReveal>
</div>
        </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default About;