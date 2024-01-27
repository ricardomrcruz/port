import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiFrance } from "react-icons/gi";
import { PiGlobe } from "react-icons/pi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillBehanceSquare,
  AiFillGithub,
} from "react-icons/ai";
import profilepic from "../public/port2.jpg";
// changed profile pic
import design from "../public/webdesign.png";
import code from "../public/webdev.png";
import seo from "../public/scrumseo.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import swsicon from "../public/swsicon.png";
import header from "../public/ricardomartinho.jpg";
import videosection from "../public/videosection.webp";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>@ricardomartinho__</title>
        <meta name="description" content="ricardos portfolio" />
        <link rel="icon" href="/swsicon.png" />
      </Head>

      <div className="snap-y snap-mandatory overflow-auto h-screen">
        <section className="relative snap-center ">
          <div className="min-h-screen flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <Image
                src={header}
                alt="strasbourgwebsolutions"
                className="w-full h-full object-cover"
              />
            </div>

            <nav className="z-10 relative py-10 mb-12 flex justify-between px-10 md:px-20 lg:px-20 ">
              <p className="text-xl md:text-2xl font-mono dark:text-white animate-pulse">
                @strasbourgwebsolutions
              </p>
              <ul className="flex items-center sticky top-0">
                {/* <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-3xl dark:text-white"
                  />
                </li> */}
                <li>
                  <Link href="/accueil">
                    <GiFrance className="cursor-pointer text-5xl dark:text-white py-2 ml-8 " />
                  </Link>
                </li>
              </ul>
            </nav>

            <div
              className="absolute z-10 w-full px-10 md:px-20 lg:px-20"
              style={{ top: "36%", transform: "translateY(-50%)" }}
            >
              <h1
                className="  py-2 font-roboto font-semibold  dark:text-white inline-block align-middle text-[50px] md:text-[68px] lg:text-[68px] "
                style={{ lineHeight: "1.02" }}
              >
                FullStack Web <br />
                Developer <br />
                Web Mobile & <br />
                UX UI Designer
                {/* Développeur <br />
              Web et Web <br /> Mobile Fullstack <br />
              UX UI   Designer */}
              </h1>
            </div>
            <div
              className="absolute z-10 w-full px-8 md:px-20 lg:px-20"
              style={{ top: "55%", transform: "translateY(-50%)" }}
            >
              <h1 className="text-3xl md:text-3xl lg:text-[29px] font-roboto dark:text-white inline-block align-middle">
                Ricardo Martinho da Cruz
              </h1>
            </div>

            <div className="z-10  relative py-5 mb-12 flex justify-between px-10 md:px-20 lg:px-20">
              <div className="flex justify-start">
                <p className="hidden lg:block text-2xl md:text-3xl font-roboto dark:text-white ">
                  Based in Strasbourg, France
                </p>
              </div>

              <p className="hidden lg:block text-2xl   md:text-3xl font-roboto dark:text-white animate-bounce ">
                <BsChevronDoubleDown />
              </p>

              <div className="flex text-5xl justify-center gap-6 py-1 dark:text-white  ">
                <a
                  href="https://github.com/ricardomrcruz"
                  target="_blank"
                  className="dark:hover:text-purple-600"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ricardomartinhocruz/"
                  target="_blank"
                  className="dark:hover:text-blue-400"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/strasbourgwebsolutions/"
                  target="_blank"
                  className="dark:hover:text-amber-400"
                >
                  <AiFillInstagram />
                </a>
                <a
                  href="https://www.behance.net/websolstrasbo"
                  target="_blank"
                  className="dark:hover:text-blue-500"
                >
                  <AiFillBehanceSquare />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative snap-center ">
          <div className="min-h-screen flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <Image
                src={videosection}
                alt="strasbourgwebsolutions"
                className="w-full h-full object-cover "
                data-te-lazy-load-init
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <nav className="z-10 relative py-10 mb-12 flex justify-between px-10 md:px-20 lg:px-20 ">
              <p className="text-2xl md:text-2xl font-mono dark:text-white animate-pulse">
                @ricardomartinho__
              </p>
              <ul className="flex items-center sticky top-0">
                {/* <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-3xl dark:text-white"
                  />
                </li> */}
                <li>
                  <Link href="/accueil">
                    <GiFrance className="cursor-pointer text-5xl dark:text-white py-2 ml-8 " />
                  </Link>
                </li>
              </ul>
            </nav>

            <div
              className="z-10 relative  flex justify-between px-10 md:px-20 lg:px-20 "
              style={{ top: "50%", transform: "translateY(-8%)" }}
            >
              <div>
                <h1 className="text-4xl py-1 text-teal-600 font-medium md:text-6xl sm:text-5xl lg:text-6xl dark:text-purple-600 dark:text-shadow  ">
                  Ricardo Martinho
                </h1>
                <h2 className="text-2xl py-2 md:text-2xl dark:text-gray-100 font-mono  ">
                  Fullstack Web Developer & UX UI Designer
                </h2>
                <p className="text-xl py-2 md:text-xl dark:text-gray-200 font-mono">
                  Strasbourg, France.
                </p>
                <br />
                <p className="text-md leading-6 text-gray-800 md:text-xl max-w-lg  dark:text-gray-300 font-mono tracking-tight  ">
                  Proficient in the design, conception, and deployment of
                  websites and applications.
                  <br /> Skilled in API development, AI models, server
                  architecture, as well as e-commerce platforms ranking SEO
                  performance.
                  <br /> Offering top-notch digital solutions <br /> for your
                  online business.
                  <br /> Open to work and collaborate. Feel free to contact and
                  exchange ideas.
                  <br />
                  <br />
                  <span className="pt-5 font-sans font-bold items-center flex text-teal-600  dark:text-purple-600 animate-pulse">
                    <BsArrowDownRightCircleFill className="mr-2 text-md " />
                    strasbourgwebsolutions@gmail.com
                  </span>
                </p>
              </div>
            </div>
            <div className="z-10 relative py-5 mb-12 flex justify-between px-10 md:px-20 lg:px-20">
              <p className="text-center text-2xl md:text-3xl font-roboto dark:text-white animate-bounce ">
                <BsChevronDoubleDown />
              </p>
              <div className="flex text-4xl justify-center gap-6 py-1 dark:text-white  ">
                <a
                  href="https://github.com/ricardomrcruz"
                  target="_blank"
                  className="dark:hover:text-purple-600"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ricardomartinhocruz/"
                  target="_blank"
                  className="dark:hover:text-blue-400"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/strasbourgwebsolutions/"
                  target="_blank"
                  className="dark:hover:text-amber-400"
                >
                  <AiFillInstagram />
                </a>
                <a
                  href="https://www.behance.net/websolstrasbo"
                  target="_blank"
                  className="dark:hover:text-blue-500"
                >
                  <AiFillBehanceSquare />
                </a>
              </div>
            </div>
          </div>
        </section>

        <main className="bg-white px-10 md:px-20 lg:px-10 dark:bg-[#121212] snap-center ">
          <section className="min-h-screen">
            <nav className="z-10 relative py-10 mb-12 flex justify-between px-10 md:px-20 lg:px-10 ">
              <p className="text-2xl md:text-3xl font-mono dark:text-white animate-pulse">
                @ricardomartinho__
              </p>
              <ul className="flex items-center sticky top-0">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-3xl dark:text-white"
                  />
                </li>
                <li>
                  <Link href="/accueil">
                    <GiFrance className="cursor-pointer text-5xl dark:text-white py-2 ml-8 " />
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="text-center p-10">
              <h1 className="text-4xl py-1 text-teal-600 font-medium md:text-6xl sm:text-5xl lg:text-6xl dark:text-purple-700  ">
                Ricardo Martinho
              </h1>
              <h2 className="text-2xl py-2 md:text-xl dark:text-gray-100 font-mono  ">
                Fullstack Web Developer & Designer
              </h2>
              <h4 className="text-xl py-2 md:text-xl dark:text-gray-200 font-mono">
                Based in Strasbourg, France.
              </h4>
              <br />
              <p className="text-md leading-6 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300 font-mono tracking-tight  ">
                Proficient in the design, conception, and deployment of websites
                and applications. <br />
                <br /> Skilled in API development, AI models, server
                architecture, as well as e-commerce platforms ranking SEO
                performance. <br />
                <br /> Offering top-notch digital solutions for your online
                business. <br />
                <br /> Open to work and collaborate. <br />
                Feel free to contact.
                <br />
                <br />
                <span className="font-sans text-teal-600  dark:text-purple-700">
                  strasbourgwebsolutions@gmail.com
                </span>
              </p>
            </div>
          </section>

          {/* main content */}

          <section>
            <div className="flex justify-center">
              <h3 className="justify-center text-3xl  dark:text-white font-mono">
                Skills & Services
              </h3>
              <p></p>
            </div>
            <div className="lg:flex gap-10 ">
              <div className="text-center shadow-lg p-5 rounded-xl my-10 dark:shadow-purple-900 dark:shadow-md">
                <Image
                  alt=""
                  src={design}
                  className="mx-auto"
                  width={300}
                  height={300}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white ">
                  Web Design
                </h3>
                <p className="py-2 tracking-tight dark:text-white font-mono ">
                  Being passionate about front-end development and with a love
                  for clean design, I aim to deliver stunning and visually
                  appealing websites that align with clients goals and brand
                  identity. The love for UX/UI design fuels my dedication to
                  create exceptional user experiences on websites. By
                  facilitating interactions and sparking meaningful engagement.
                </p>
                <h4 className="py-4 text-teal-600 dark:dark:text-blue-400 font-mono">
                  Design tools I use
                </h4>
                <p className=" text-gray-800 py-1 dark:text-white font-mono">
                  Adobe Photoshop
                </p>
                <p className=" text-gray-800 py-1 dark:text-white font-mono">
                  Figma
                </p>
                <p className=" text-gray-800 py-1 dark:text-white font-mono">
                  Adobe Premiere
                </p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-purple-900 dark:shadow-md">
                <Image
                  alt=""
                  src={code}
                  className="mx-auto"
                  width={200}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                  Web Development & Deployment
                </h3>
                <p className="py-2 dark:text-white font-mono tracking-tight">
                  I conceptualize, architect, build, and deploy websites
                  according to the brand&apos;s needs. With both back-end
                  programming and database skills, I aim to build functional and
                  effective websites for all types of businesses. Remember, if
                  your business is not on the internet, your business will soon
                  be out of business.
                </p>
                <h4 className="py-4 text-teal-600 dark:dark:text-blue-400">
                  Web Dev tools I use
                </h4>
                <p className=" text-gray-800 py-1 dark:text-white font-mono">
                  HTML & CSS
                </p>
                <p className=" text-gray-800 py-1 dark:text-white font-mono">
                  Javacript, ReactJS, NextJs + MongoDB
                </p>
                <p className=" text-gray-800 py-1 dark:text-white font-mono">
                  PHP, Symfony + Mysql
                </p>
              </div>

              <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:shadow-purple-900 dark:shadow-md">
                <Image
                  alt=""
                  src={seo}
                  className="mx-auto"
                  width={200}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                  Scrum & Consulting
                </h3>
                <p className="py-2 font-mono tracking-tighter dark:text-white">
                  I work and communicate directly with the companies, clients,
                  and other developers to solve problems and achieve the most
                  digital success. With a great Scrum and Agile methodology
                  engraved in me, I carry the skills to manage, create, and test
                  projects to help businesses achieve results in today&apos;s
                  competitive market. Consulting work for companies and other
                  developers is also part of my work ethic.
                </p>
                <h4 className="py-4 text-teal-600 dark:dark:text-blue-400">
                  SEO and Scrum tools I use
                </h4>
                <p className=" text-gray-800 py-1 dark:text-white font-mono">
                  Git & Trello
                </p>
                <p className=" text-gray-800 py-1 dark:text-white font-mono">
                  SEO & ChatGPT
                </p>
                <p className=" text-gray-800 py-1 dark:text-white font-mono">
                  Google Cloud, API and Analytics
                </p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 text-center dark:text-white font-mono">
                Projects & Work
              </h3>
              <br />
              <p className="text-sm leading-6 text-gray-800 md:text-lg tracking-tight max-w-4xl text-center mx-auto dark:text-gray-300 font-mono  ">
                You can explore some of my web development projects and web
                designs below. Many of them are the result of previous
                freelance, professional, or personal endeavors I&apos;ve worked
                on over the last year. To gain a deeper understanding of my
                technical programming skills, I recommend visiting my GitHub
                page or checking out my latest designs on Behance and Instagram.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 w-200 h-200">
                <Link href="https://streamnow.vercel.app/auth" target="_blank">
                  <Image
                    alt=""
                    src={web1}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </Link>
              </div>

              <div className="basis-1/3 flex-1">
                <Link href="https://mymetal.vercel.app/" target="_blank">
                  <Image
                    alt=""
                    src={web2}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </Link>
              </div>

              <div className="basis-1/3 flex-1">
                <Link
                  href="https://www.behance.net/gallery/176957559/Technical-Doc-VF-FreshLabels-App"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={web3}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </Link>
              </div>

              <div className="basis-1/3 flex-1">
                <Link href="https://theprimateconnection.com/" target="_blank">
                  <Image
                    alt=""
                    src={web4}
                    className="rounded-lg object-cover w-full h-full"
                  />
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
    </div>
  );
}
