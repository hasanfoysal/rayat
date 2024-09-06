import logo1 from '../../assets/c.png'
import logo2 from '../../assets/download.webp'
import logo3 from '../../assets/download (1).webp'
import logo4 from '../../assets/download (2).webp'



import img1 from '../../assets/LS20240905143724.png'
import BoxReveal from '../BoxReveal/BoxReveal';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-black text-white max-w-[1400px] mx-auto min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
   <img
      src={img1}
      className="max-w-sm rounded-lg shadow-2xl  lg:w-[400px] lg:h-[550px] md:w-[300px] md:h-[450px] w-[200px] h-[350px] lg:ml-40 " />
    <div className=' mt-10'>
    <BoxReveal boxColor={"#4ade80"} duration={0.5}> <h1 className="lg:text-5xl  my-2 text-3xl font-bold">Welcome to <span className='text-green-400 '>My Portfolio</span> </h1></BoxReveal>
   <p className="py-6">
   <BoxReveal boxColor={"#4ade80"} duration={0.5}>Hello, I'm Hossain Ibn Masudul Haque, <br /> a passionate and dedicated Computer Science and Engineering professional with a strong foundation in software development, web and mobile application development, and UI/UX design.</BoxReveal>


   
   <BoxReveal boxColor={"#4ade80"} duration={0.5}><h3 className='mt-2'>Feel free to explore my projects and get in touch if you would like to discuss potential collaborations, job opportunities, or simply to connect. Thank you for visiting my portfolio, and I hope you find my work inspiring and insightful.</h3></BoxReveal>
      </p>
      <BoxReveal boxColor={"#4ade80"} duration={0.5}><div className='lg:mt-6 mt-3 md:mt-4 flex space-x-4'>
      <a href="https://www.facebook.com/king.rayat.10/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="https://www.facebook.com/profile.php?id=100009256108068&mibextid=ZbWKwL" height="30" width="40" /></a>
      <a href="https://github.com/hossaincse" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="https://github.com/hasanfoysal" height="30" width="40" /></a>
      <a href="https://www.instagram.com/_sodium_._chloride_/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="https://www.facebook.com/arefin.ahmed.3956/" height="30" width="40" /></a>
      </div></BoxReveal> 
      <div className='text-white lg:mt-6 mt-3 md:mt-4 flex space-x-4'>
        <a  href="https://codeforces.com/profile/hossaincse?fbclid=IwY2xjawFHuSZleHRuA2FlbQIxMAABHaNvei80ak-TmF9zuwzquGnKpSzQS6_4QLUi1ZToP818IZ2ZLI6KDWBP0A_aem_pYHvI3Io-fzRrb5q92WpZg"><img className='w-7 h-7' src={logo1} alt="" />Codeforces</a>
        <a  href="https://judge.beecrowd.com/en/profile/868248?fbclid=IwY2xjawFHuUtleHRuA2FlbQIxMAABHX1zqS9Nox-FyZ90dPC3E8vF-FSuBQ-hzZ4h7dE9JTh_9HlioKQRo0tWkQ_aem_P4QX6vZHcM0lOwIYkASdYQ"><img className='w-7 h-7' src={logo2} alt="" />Beecrowd</a>
        <a  href="https://vjudge.net/user/hossaincse_2002?fbclid=IwY2xjawFHuWlleHRuA2FlbQIxMAABHXSO02Ul-yU7dF3YWlPRW45_eRTNtEH_D6ulVCTWaOj1J5BxYmDVWg4mYQ_aem_gxbHUdswJMO6p2uppfDlqA#google_vignette"><img className='w-7 h-7' src={logo3} alt="" />Virtual Judge</a>
        <a href="https://www.codechef.com/users/hossaincse?fbclid=IwY2xjawFHuYhleHRuA2FlbQIxMAABHYBhX-Gnq7jowAvu9oEN6mppvCDu-rGvfk-MO8tl8RA8NG7W758LxtGGIA_aem_TBTPgLh3jxD_FxByl7EArQ"><img className='w-7 h-7' src={logo4} alt="" />CodeChef</a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;