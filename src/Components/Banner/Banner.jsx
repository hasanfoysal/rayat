

import img1 from '../../assets/LS20240905143724.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-black text-white max-w-[1400px] mx-auto min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <img
      src={img1}
      className="max-w-sm rounded-lg shadow-2xl  lg:w-[400px] lg:h-[550px] md:w-[300px] md:h-[450px] w-[200px] h-[350px] lg:ml-40 " />
    <div className=' mt-10'>
      <h1 className="lg:text-5xl text-3xl font-bold">Welcome to <span className='text-green-400'>My Portfolio</span> </h1>
      <p className="py-6">
      Hello, I'm Hossain Ibn Masudul Haque, <br /> a passionate and dedicated Computer Science and Engineering professional with a strong foundation in software development, web and mobile application development, and UI/UX design.


<h1 className='mt-2'>In this portfolio, you will find a curated selection of my work that demonstrates my technical expertise, creative problem-solving abilities, and my dedication to continuous learning and improvement. Whether it's a complex software solution, a sleek mobile app, or an intuitive web interface, I strive to create impactful and meaningful digital experiences.</h1>

<h3 className='mt-2'>Feel free to explore my projects and get in touch if you would like to discuss potential collaborations, job opportunities, or simply to connect. Thank you for visiting my portfolio, and I hope you find my work inspiring and insightful.</h3>
      </p>
      <div className='lg:mt-6 mt-3 md:mt-4 flex space-x-4'>
      <a href="https://www.facebook.com/king.rayat.10/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="https://www.facebook.com/profile.php?id=100009256108068&mibextid=ZbWKwL" height="30" width="40" /></a>
      <a href="https://github.com/hossaincse" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="https://github.com/hasanfoysal" height="30" width="40" /></a>
      <a href="https://www.instagram.com/_sodium_._chloride_/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="https://www.facebook.com/arefin.ahmed.3956/" height="30" width="40" /></a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;