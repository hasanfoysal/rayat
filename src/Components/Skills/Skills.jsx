import BoxReveal from "../BoxReveal/BoxReveal";

const  Skills = () => {
    return (
 <div className="min-h-screen">
        <div className="lg:max-w-[1200px] mx-auto  lg:mt-12  shadow-lg   ">
            <h1 className="text-center text-white font-bold mt-16 my-3 ml-[50px] md:ml-[300px] lg:ml-[500px] justify-center text-4xl btn btn-outline border-0 border-b-4 border-green-400  shadow-sm shadow-green-400">My Expertise</h1>
            
          <div className="flex flex-col lg:flex-row md:flex-row justify-between  sm:mt-8 md:mt-10 lg:mt-12">
            <div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-green-400 shadow-lg">
       {/* <figure>
    <img
      src={}
      alt="img1" />
  </figure> */}
  <div className="card-body bg-black text-white">
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <h2 className="card-title text-green-400">Technical Skills:</h2></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <li>Programming Languages:<span className="text-slate-300 text-md"> Python, JavaScript, Java, C++, C, Dart, Assembly</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <li>Web Development:<span className="text-slate-300 text-md"> HTML, CSS, JavaScript frameworks (React, Angular, Vue.js), RESTful APIs</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Database Management:<span className="text-slate-300 text-md"> SQL (MySQL, PostgreSQL), NoSQL (MongoDB, Firebase)</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Mobile Development:<span className="text-slate-300 text-md"> iOS (Swift), Android (Java, Kotlin), cross-platform (React Native, Flutter)</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Version Control:<span className="text-slate-300 text-md">  Git, SVN</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>DevOps:<span className="text-slate-300 text-md"> Docker, Kubernetes, CI/CD pipelines (Jenkins, GitLab CI/CD)</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Cloud Computing Platforms:<span className="text-slate-300 text-md">AWS, Azure, Google Cloud</span></li>
<li>Software Testing:<span className="text-slate-300 text-md">Unit testing, integration testing, test automation (Selenium, JUnit)</span></li></BoxReveal>

  </div>
</div>
<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-green-400 shadow-lg">
{/* <figure>
    <img
      src={}
      alt="img2" />
  </figure> */}
  <div className="card-body bg-black text-white">
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><h2 className="card-title text-green-400">Design Skills:</h2></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>UI/UX Design:<span className="text-slate-300 text-md"> Wireframing, prototyping (Adobe XD, Sketch, Figma)</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Graphic Design:<span className="text-slate-300 text-md">Adobe Photoshop, Illustrator, InDesign</span></li>
<li>Motion Graphics and Animation:<span className="text-slate-300 text-md"> Adobe After Effects, Blender</span></li></BoxReveal>

  </div>
  </div>

<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3  lg:w-96 shadow-green-400 shadow-lg">
{/* <figure>
    <img
      src={}
      alt="img3" />
  </figure> */}
  <div className="card-body bg-black text-white">
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><h2 className="card-title text-green-400">Data Analysis and Machine Learning:</h2></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Data Analysis:<span className="text-slate-300 text-md"> Excel, pandas, R</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Machine Learning:<span className="text-slate-300 text-md"> scikit-learn, TensorFlow, Keras, PyTorch</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Big Data:<span className="text-slate-300 text-md">Hadoop, Spark</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Data Visualization:<span className="text-slate-300 text-md">Tableau, matplotlib, ggplot2</span></li></BoxReveal>
  </div>
</div>

</div>


        
        <div className="flex flex-col lg:flex-row md:flex-row justify-between sm:mt-8 md:mt-10 lg:mt-12">
            <div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96  shadow-green-400 shadow-lg">
            {/* <figure>
    <img
      src={}
      alt="img4" />
  </figure> */}
  <div className="card-body bg-black text-white">
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><h2 className="card-title text-green-400">Project Management and Collaboration:</h2></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Agile Methodologies:<span className="text-slate-300 text-md"> Scrum, Kanban</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Project Management Tools:<span className="text-slate-300 text-md">Jira, Trello, Asana</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Collaboration Tools:<span className="text-slate-300 text-md">Slack, Microsoft Teams, Zoom</span></li></BoxReveal>
  </div>
</div>
<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96  shadow-green-400 shadow-lg">
{/* <figure>
    <img
      src={}
      alt="img5" />
  </figure> */}
  <div className="card-body bg-black text-white">
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><h2 className="card-title text-green-400">Soft Skills:</h2></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <li>Communication:<span className="text-slate-300 text-md"> Verbal and written communication skills</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <li>Problem-solving: <span className="text-slate-300 text-md"> Analytical thinking, troubleshooting</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <li>Leadership:<span className="text-slate-300 text-md">Team management, mentoring</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Time Management:<span className="text-slate-300 text-md">Prioritization, meeting deadlines</span></li></BoxReveal>
  </div>
</div>
<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96  shadow-green-400 shadow-lg">
{/* <figure>
    <img
      src={}
      alt="img5" />
  </figure> */}
  <div className="card-body bg-black text-white">
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <h2 className="card-title text-green-400">Language Skills:</h2></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <li>Fluency in English</li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <li>Fluency in Bangla</li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Fluency in Hindi</li></BoxReveal> 
  </div>
</div>

</div>
<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96  shadow-green-400 shadow-lg">
{/* <figure>
    <img
      src={}
      alt="img5" />
  </figure> */}
  <div className="card-body bg-black text-white">
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><h2 className="card-title text-green-400">Industry-Specific Skills:</h2></BoxReveal> 
  <BoxReveal boxColor={"#4ade80"} duration={0.5}> <li>Finance:<span className="text-slate-300 text-md"> Financial modeling, risk analysis</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Healthcare:  <span className="text-slate-300 text-md"> HIPAA compliance, medical coding</span></li></BoxReveal>
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Education: <span className="text-slate-300 text-md">Learning management systems (LMS), curriculum development</span></li></BoxReveal> 
  <BoxReveal boxColor={"#4ade80"} duration={0.5}><li>Marketing:<span className="text-slate-300 text-md"> SEO/SEM, content marketing</span></li></BoxReveal> 
  </div>
</div>

       </div> 
       </div>
       
    );
};

export default Skills;