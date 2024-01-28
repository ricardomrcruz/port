import Head from "next/head";
import Link from "next/link";

// fonts
import { Inter } from "next/font/google";

// icons
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiFrance } from "react-icons/gi";
import { PiGlobe } from "react-icons/pi";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { SiGooglemybusiness } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiGooglesearchconsole } from "react-icons/si";
import { SiPagespeedinsights } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { FaSymfony } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillBehanceSquare,
  AiFillGithub,
} from "react-icons/ai";

// react
import { useState } from "react";
import Image from "next/image";

// images
import design from "../public/design.gif";
import code2 from "../public/code2.gif";
import consulting from "../public/consulting.gif";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import header from "../public/ricardomartinho.jpg";
import videosection from "../public/videosection.webp";

// COMPONENTS
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const words1 = `FullStack Web`;
const words2 = `Developer`;
const words3 = `Web Mobile &`;
const words4 = `UX UI Designer`;
const words5 = `Ricardo Martinho`;
const words6 = `Based in Strasbourg, France`;
const words7 = `@strasbourgwebsolutions`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const [animationCompleted, setAnimationCompleted] = useState(false);

  // Call this function when the TextGenerateEffect animation completes
  const onTextAnimationComplete = () => {
    setAnimationCompleted(true);
  };

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
              <TextGenerateEffect
                words={words7}
                className="text-xl md:text-2xl font-mono dark:text-white animate-pulse"
              />

              <ul className="flex items-center sticky top-0">
                <li>
                  <Link href="/">
                    <GiFrance className="cursor-pointer text-5xl dark:text-white py-2 ml-8 animate-text-effect2" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Développeur <br />
              Web et Web <br /> Mobile Fullstack <br />
              UX UI   Designer */}

            <div
              className="absolute z-10 w-full pb-5 px-10 md:px-20 lg:px-20"
              style={{ top: "38%", transform: "translateY(-50%)" }}
            >
              <TextGenerateEffect
                words={words1}
                className="   font-roboto font-semibold  dark:text-white inline-block align-middle text-[45px] md:text-[68px] lg:text-[72px] "
              />
              <br />
              <TextGenerateEffect
                words={words2}
                className="   font-roboto font-semibold  dark:text-white inline-block align-middle text-[45px] md:text-[68px] lg:text-[72px] "
              />
              <br />
              <TextGenerateEffect
                words={words3}
                className="   font-roboto font-semibold  dark:text-white inline-block align-middle text-[45px] md:text-[68px] lg:text-[72px] "
              />
              <br />
              <TextGenerateEffect
                words={words4}
                className="   font-roboto font-semibold  dark:text-white  text-[45px] md:text-[68px] lg:text-[72px]  "
              />
              <br />
            </div>
            <div
              className="absolute z-10 w-full px-10 md:px-20 lg:px-20"
              style={{ top: "57%", transform: "translateY(-50%)" }}
            >
              
                <TextGenerateEffect words={words5} className="text-3xl md:text-3xl mt-10  sm:pt-2 lg:text-[29px] font-roboto dark:text-white inline-block align-middle"/>
              
            </div>

            <div className="z-10  relative py-5 mb-12 flex justify-between px-10 md:px-20 lg:px-20">
              <div className="flex justify-start">
                <TextGenerateEffect
                  onCompleted={onTextAnimationComplete}
                  words={words6}
                  className="hidden lg:block text-2xl md:text-2xl font-roboto dark:text-white "
                />
              </div>

              <p className="hidden lg:block text-2xl   md:text-5xl font-roboto dark:text-white animate-text-effect2-bounce ">
                <BsChevronDoubleDown />
              </p>

              {animationCompleted && (
                <div className="flex text-5xl justify-center gap-6 py-1 dark:text-white  ">
                  <a
                    href="https://github.com/ricardomrcruz"
                    target="_blank"
                    className="dark:hover:text-purple-600 animate-text-effect"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ricardomartinhocruz/"
                    target="_blank"
                    className="dark:hover:text-blue-400 animate-text-effect"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/strasbourgwebsolutions/"
                    target="_blank"
                    className="dark:hover:text-amber-400 animate-text-effect"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://www.behance.net/websolstrasbo"
                    target="_blank"
                    className="dark:hover:text-blue-500 animate-text-effect"
                  >
                    <AiFillBehanceSquare />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="relative snap-center bg-black  ">
          <div className="min-h-screen flex flex-col justify-between">
            
            
            <div className="absolute inset-0 z-0">
              <Image
                src={videosection}
                alt="strasbourgwebsolutions"
                className="w-full h-full object-cover bg-black"
                data-te-lazy-load-init
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>


            <nav className="z-10 relative pt-10 px-10 flex justify-between md:px-20   lg:px-20">
              <p className=" text-xl md:text-2xl font-mono dark:text-white animate-pulse">
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
                  <Link href="/">
                    <GiFrance className="cursor-pointer text-5xl dark:text-white py-2 ml-8  " />
                  </Link>
                </li>
              </ul>
            </nav>

            <div
              className="z-10 relative  flex justify-between px-10 md:px-20 lg:px-20 "
              style={{ top: "50%", transform: "translateY(-5.5%)" }}
            >
              <div>
                <h1 className="text-4xl py-1 text-teal-600 font-medium md:text-6xl sm:text-2xl lg:text-6xl dark:text-purple-600 dark:text-shadow  ">
                  Ricardo Martinho
                </h1>
                <h2 className="text-md py-1 leading-6 text-gray-800 sm:text-md md:text-2xl max-w-lg  dark:text-gray-300 font-roboto   ">
                  Fullstack Web Developement & Design
                </h2>
                <p className="text-md py-1 leading-6 text-gray-800 sm:text-md md:text-2xl max-w-lg  dark:text-gray-300 font-roboto ">
                  Strasbourg, France.
                </p>
                <br />
                <p className="text-md leading-6 text-gray-800 sm:text-md md:text-2xl max-w-lg  dark:text-gray-300 font-roboto tracking-tight  ">
                  Proficient in the design, conception, and deployment of
                  websites and applications.
                  <br /> Skilled in API development, AI models, server
                  architecture, as well as e-commerce platforms ranking SEO
                  performance.
                  <br /> Offering top-notch digital solutions <br /> for your
                  online business.
                  <br /> Open to work and collaborate.
                  <br /> Feel free to contact and
                  exchange ideas.
                  <br />
                  <br />
                </p>
                <a
                  className="pt-5 md:text-xl font-mono font-bold items-center flex  dark:text-purple-600 animate-pulse"
                  href="mailto:strasbourgwebsolutions@gmail.com"
                  target="_blank"
                >
                  <BsArrowDownRightCircleFill className="mr-2 text-md " />
                  strasbourgwebsolutions@gmail.com
                </a>
              </div>
            </div>
            <div className="z-10 relative py-5 mb-12 flex justify-between px-10 md:px-20 lg:px-20">
              <p className="text-2xl   md:text-5xl font-roboto dark:text-white animate-text-effect2-bounce">
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

        <main className="relative bg-[#121212] px-10 md:px-10 lg:px-10 dark:bg-[#121212] snap-center min-h-screen flex flex-col justify-between">
          
          <nav className="z-10 relative pt-10  flex justify-between   lg:px-10 ">
            <p className=" sm:text-3xl md:text-5xl font-roboto dark:text-white ">
              Skills & Services
            </p>
            <ul className="flex items-center sticky top-0">
              {/* <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-3xl dark:text-white"
                  />
                </li> */}
              <li>
                <Link href="/">
                  <GiFrance className="cursor-pointer text-5xl dark:text-white py-2 ml-8 " />
                </Link>
              </li>
            </ul>
          </nav>

          {/* main content */}

          
            <div className=" flex flex-col px-5 md:px-20 lg:px-10 gap-10 py-10 lg:flex-row lg:flex-wrap lg:justify-center">
              <CardContainer className="basis-1/3 flex-1 w-200 h-200">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-700/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white pb-3"
                  >
                    UX UI & Web Design
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm my-2 dark:text-neutral-300"
                  >
                    Being passionate about front-end development and with a love
                    for clean design, I aim to deliver stunning and visually
                    appealing websites that align with clients goals and brand
                    identity. The love for UX/UI design fuels my dedication to
                    create exceptional user experiences on websites. By
                    facilitating interactions and sparking meaningful
                    engagement.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-6">
                    <Image
                      src={design}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      data-te-lazy-load-init
                      loading="lazy"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="flex first-letter:px-4  py-2 rounded-xl text-3xl font-normal dark:text-white"
                    >
                      <SiAdobephotoshop className="mr-3" />
                      <SiAdobepremierepro className="mr-3" />{" "}
                      <FaFigma className="mr-3" />
                      <FaHtml5 className="mr-3"/>
                      <FaCss3Alt className="mr-3" />
                      <SiTailwindcss className="mr-3"/>
                      <RiOpenaiFill className="mr-3"/>
                    </CardItem>
                    {/* <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </CardItem> */}
                  </div>
                </CardBody>
              </CardContainer>
              <CardContainer className="basis-1/3 flex-1 w-200 h-200">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-700/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white pb-3"
                  >
                    Web Development & Deployment
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    I conceptualize, architect, build, and deploy websites
                    according to the brand&apos;s needs. With both back-end
                    programming and database skills, I aim to build functional
                    and effective websites for all types of businesses.
                    Remember, if your business is not on the internet, your
                    business will soon be out of business.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-6">
                    <Image
                      src={code2}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      data-te-lazy-load-init
                      loading="lazy"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="flex px-4 py-2 rounded-xl text-3xl font-normal dark:text-white"
                    >
                      <FaNodeJs className="mr-3" />
                      <FaReact className="mr-3" />
                      <SiTypescript className="mr-3" />
                      <FaPhp className="mr-3" />
                      <TbBrandNextjs  className="mr-3" />
                      <FaSymfony className="mr-3" />
                      <FaWordpress className="mr-3" />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <CardContainer className="basis-1/3 flex-1 w-200 h-200">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-700/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white pb-3"
                  >
                    Business Consulting & Community
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    I work and communicate directly with the companies, clients,
                    and other developers to solve problems and achieve the most
                    digital success. With a great Scrum and Agile methodology
                    engraved in me, I carry the skills to manage, create, and
                    test projects to help businesses achieve results in
                    today&apos;s competitive market. Consulting work for
                    companies and other developers is also part of my work
                    ethic.
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-10">
                    <Image
                      src={consulting}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      data-te-lazy-load-init
                      loading="lazy"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="flex px-4 py-2 rounded-xl text-3xl font-normal dark:text-white"
                    >
                      <TbSeo className="mr-3" />
                      <FaGoogle className="mr-3" /> <DiScrum className="mr-3" />
                      <SiGooglemybusiness className="mr-3" />
                      <SiGooglesearchconsole className="mr-3"/>
                      <SiPagespeedinsights className="mr-3"/>
                      <SiGooglecloud className="mr-3" />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
        
        </main>

        <main className="bg-white px-5 md:px-20 lg:px-10 dark:bg-[#000000] snap-center min-h-screen w-full">
          <section className="">
            <nav className="z-10 relative py-10  flex justify-between px-10 md:px-20 lg:px-10 ">
              <p className=" text-2xl md:text-5xl font-roboto dark:text-white ">
                Projects
              </p>
              <ul className="flex items-center sticky top-0">
                <li>
                  <Link href="/">
                    <GiFrance className="cursor-pointer text-5xl dark:text-white py-2 ml-8 " />
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
          <section>
            <div>
              <p className="px-5 md:px-20 lg:px-10 pt-20 pb-10 text-sm leading-6 text-gray-800 md:text-lg tracking-tight max-w-4xl text-left  dark:text-gray-300 font-roboto  ">
                You can explore some of my web development projects and web
                designs below. Many of them are the result of previous
                freelance, professional, or personal endeavors I&apos;ve worked
                on over the last year. To gain a deeper understanding of my
                technical programming skills, I recommend visiting my GitHub
                page or checking out my latest designs on Behance and Instagram.
              </p>
            </div>
            <div className="flex flex-col px-5 md:px-20 lg:px-10 gap-10 py-10 lg:flex-row lg:flex-wrap">
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
