import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import {BsFillMoonStarsFill} from 'react-icons/bs';

import { useState } from "react";
import {AiFillInstagram, AiFillLinkedin, AiFillBehanceSquare, AiFillGithub} from 'react-icons/ai';
import profilepic from '../public/port2.png';
import design from '../public/webdesign.png';
import code from '../public/webdev.png';
import seo from '../public/scrumseo.png';
import Image from "next/image";
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
         
       <Head>
        <title>Portfolio</title>
        <meta name='description' content='ricardos portfolio'/>
        <link rel="icon" href="/favicon.ico"
         />
         
       </Head>
       
       <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900 '>
          <section className='min-h-screen'>
            <nav className='py-10 mb-10 flex justify-between'>
              <h1 className='text-base md:text-lg font-mono dark:text-white'>@ricardomartinho__</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
                </li>
                <li><Link href="/">
                  <p className='bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-purple-600 dark:to-blue-400 text-white px-6 py-2 rounded-md ml-8' >ENG</p></Link>
                </li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-4xl py-1 text-teal-600 font-medium md:text-6xl sm:text-5xl lg:text-7xl dark:text-purple-700  '>Ricardo Martinho</h2>
              <h3 className='text-2xl py-2 md:text-1xl dark:text-gray-100 font-mono'>Développeur Web FullStack & Designer</h3>
              <h4 className='text-xl py-2 md:text-xl dark:text-gray-200 font-mono'>Strasbourg, France.</h4>
              <br />
              <p className='text-md leading-6 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300 font-mono tracking-tight  '>
              Conception, design et hébergement de sites web et de bases de données. 
                <br /> Expérimenté dans la création de plateformes CMS et eCommerce avec une attention particulière à la performance SEO. 
                <br /> Propose des solutions digitales efficaces pour votre business en ligne. 
                <br /> Ouvert aux opportunités. N&apos;hésitez pas à me contacter.
                <br />
                <br /><span className='font-sans text-teal-600  dark:text-purple-700'>strasbourgwebsolutions@gmail.com</span>
              </p>
            </div>
            <div className='flex text-5xl justify-center gap-8 py-1 dark:text-white dark:text-purple-700 '>
            <a href="https://github.com/ricardomrcruz" target="_blank" ><AiFillGithub/></a>
              <a href="https://www.linkedin.com/in/ricardomartinhocruz/" target="_blank"><AiFillLinkedin/></a>
              <a href="https://www.instagram.com/strasbourgwebsolutions/" target="_blank"><AiFillInstagram/></a>
              <a href="https://www.behance.net/websolstrasbo" target="_blank"><AiFillBehanceSquare/></a>
            </div>
            <div className='relative rounded-full mt-20 mx-auto w-80 h-80 overflow-hidden md:h-96 md:w-96 '>
              <Image alt='' src={profilepic} layout='fill' objectFit='cover' />
            </div>
          </section>
           
          {/* main content */}

          <section>
            <div className='flex justify-center'>
              <h3 className='justify-center text-3xl pt-40 dark:text-white font-mono'>Skills & Services</h3>
              <p></p>
            </div>
            <div className='lg:flex gap-10 '>
              <div className='text-center shadow-lg p-5 rounded-xl my-10 dark:shadow-purple-900 dark:shadow-md'>
                <Image alt='' src={design} className='mx-auto' width={300} height={300}/>
                <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white '> Design Web</h3>
                <p className='py-2 tracking-tight dark:text-white font-mono '>
                Passionné par le développement front-end et amoureux du design épuré, mon objectif est de créer des sites web esthétiquement attrayants qui correspondent à l&apos;identité des entreprises et des clients. Ma dévotion pour la conception UX/UI me permet de créer des expériences uniques en suscitant une participation significative de ses utilisateurs.
                </p>
                <h4 className='py-4 text-teal-600 dark:dark:text-blue-400 font-mono'>Design tools I use</h4>
                <p className=' text-gray-800 py-1 dark:text-white font-mono' >Adobe Photoshop</p>
                <p className=' text-gray-800 py-1 dark:text-white font-mono' >Adobe Premiere</p>
                <p className=' text-gray-800 py-1 dark:text-white font-mono' >Figma</p>
              </div>
              
              
              <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-purple-900 dark:shadow-md'>
                <Image alt='' src={code} className='mx-auto' width={200} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Développement Web & Hebergement</h3>
                <p className='py-2 dark:text-white font-mono tracking-tight'>
                J&apos;architecture, conceptualise, construis et héberge des applications et des logiciels web en fonction des besoins de la marque. Avec des compétences en programmation server back-end et en bases de données, mon objectif est de créer des sites web fonctionnels et efficaces pour tous types d&apos;entreprises. N&apos;oubliez pas,  votre marque n&apos;est pas ce que vous en dites, mais ce que Google en dit.
                </p>
                <h4 className='py-4 text-teal-600 dark:dark:text-blue-400'>Web Dev tools I use</h4>
                <p className=' text-gray-800 py-1 dark:text-white font-mono' >HTML & CSS</p>
                <p className=' text-gray-800 py-1 dark:text-white font-mono' >Javacript, ReactJS, NextJs + MongoDB</p>
                <p className=' text-gray-800 py-1 dark:text-white font-mono' >PHP, Symfony + Mysql</p>
              </div>
              
              
              <div className='text-center  shadow-lg p-10 rounded-xl my-10 dark:shadow-purple-900 dark:shadow-md'>
                <Image alt='' src={seo} className='mx-auto' width={200} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Scrum & Consultant</h3>
                <p className='py-2 font-mono tracking-tighter dark:text-white'>
                Je travaille en collaboration directe avec des entreprises, les clients et les autres développeurs pour résoudre des problèmes et atteindre le plus grand succès du projet. Avec la maîtrise de la méthodologie Scrum et Agile, j&apos;ai les compétences nécessaires pour gérer, créer et tester des projets afin d&apos;aider les entreprises à obtenir des résultats sur le marché compétitif d&apos;aujourd&apos;hui. Le travail de consultant pour les entreprises et les autres développeurs fait également partie de mon éthique de travail.
                </p>
                <h4 className='py-4 text-teal-600 dark:dark:text-blue-400'>SEO and Scrum tools I use</h4>
                <p className=' text-gray-800 py-1 dark:text-white font-mono' >Git & Trello</p>
                <p className=' text-gray-800 py-1 dark:text-white font-mono' >SEO & ChatGPT</p>
                <p className=' text-gray-800 py-1 dark:text-white font-mono' >Google Cloud, API and Analytics</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1 text-center dark:text-white font-mono'>Projects & Work</h3>
              <br />
              <p className='text-sm leading-6 text-gray-800 md:text-lg max-w-4xl text-center mx-auto dark:text-gray-300 font-mono tracking-tight  '>Vous pouvez explorer certains de mes projets de développement web et de conceptions de sites web ci-dessous. Beaucoup d&apos;entre eux sont le résultat de realisations antérieurs en freelance, professionnels ou personnels sur lesquels j&apos;ai travaillé au cours de l&apos;année dernière. Pour mieux comprendre mes compétences techniques en programmation, je vous recommande de visiter ma page GitHub ou de consulter mes dernières créations sur Behance et Instagram.</p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1 w-200 h-200'>
                <Link href="https://www.behance.net/gallery/175978041/NOW-Controversial-Documentary-Film-Streaming-Service" target="_blank">
                
                <Image alt='' src={web1} className='rounded-lg object-cover w-full h-full' />
                
                </Link>
              </div>
              <div className='basis-1/3 flex-1'>
              <Link href="https://stirring-froyo-cdc90c.netlify.app/?fbclid=IwAR02oogGtXqn1yi-bylfSuxTP5UFe0221JeFpcTLVoPQ5vG1Zkx_3AdgRgk" target="_blank">
                <Image alt='' src={web2} className='rounded-lg object-cover w-full h-full'  />
                </Link>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image alt='' src={web3} className='rounded-lg object-cover w-full h-full'  />
              </div>
              <div className='basis-1/3 flex-1'>
              <Link href="https://theprimateconnection.com/" target="_blank">
                <Image alt='' src={web4} className='rounded-lg object-cover w-full h-full'  />
                </Link>
              </div>
              {/* <div className='basis-1/3 flex-1'>
                <Image alt='' src={web5} className='rounded-lg object-cover w-full h-full'  />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image alt='' src={web6} className='rounded-lg object-cover w-full h-full'  />
              </div> */}
            </div>
          </section>

       </main>
    </div>
    
   
  )
}
