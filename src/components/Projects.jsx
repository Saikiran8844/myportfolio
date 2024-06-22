import React,{useEffect} from 'react'
import Anime from '../assets/projects/anime-proj.jpg'
import Quiz from '../assets/projects/quiz-app.PNG'
import Profile from'../assets/projects/profile.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Anime,
      desc: "Illustrated Data Analysis of a large DataSet using Python and MySQL...",
      demo: "",
      code: "https://github.com/Saikiran8844/Analysis-of-Anime-Recommendations-Dataset"
    },
    {
      id: 2,
      src: Quiz,
      desc: "Automated Quiz app using React js + OpenDb, Orchestrated OpenDb API ...",
      demo: "https://quiz-opentb.netlify.app/",
      code: "https://github.com/Saikiran8844/Quiz-App"
    },
    {
      id: 3,
      src: Profile,
      desc: "My Portofilo static web app using React js + Tailwind",
      demo: "https://saikiran8844.github.io/myportfolio/",
      code: "https://github.com/Saikiran8844/myportfolio"
    }
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-16 w-full flex flex-col justify-center items-center mx-auto'>
          <h3 className='text-4xl pb-2 font-bold inline border-b-4 border-gray-400'>Personal Projects</h3>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects