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
import { FaGolang } from "react-icons/fa6";
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
import { data } from "autoprefixer";

const words1 = `FullStack Web`;
const words2 = `Developer`;
const words3 = `Web Mobile &`;
const words4 = `UX UI Designer`;
const words5 = `Ricardo Martinho`;
const words6 = `Based in Strasbourg, France`;
const words7 = `@strasbourgwebsolutions`;
const intro = `Your brand is what other people say about you when you’re not in the room.`;
const signed = `- Jeff Bezos`;

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
        <title>Ricardo Martinho - Fullstack Developer & UX UI Design</title>
        <meta
          name="description"
          content="Fullstack Developer. Top-notch digital solutions for your online business. Strasbourg France."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="canonical" href="https://www.strasbourgwebsolutions.fr" />
        <link rel="icon" href="/swsicon.png" />
      </Head>

      <main className="snap-y snap-mandatory overflow-auto h-screen">
        <section className="relative snap-center ">
          <div className="min-h-screen flex flex-col justify-between">
            <div className="absolute inset-0 z-0 bg-black">
              <div className="h-[55rem] w-full py-auto dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative animate-pulse flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black animate-pulse bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
                <p className="text-4xl  sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  py-8"></p>
              </div>
            </div>
            <div className="z-10 relative py-10 mb-12 flex justify-end px-10 md:px-20 lg:px-20 ">
              <Link href="/">
                <GiFrance className="cursor-pointer text-5xl dark:text-[#E5E7EB]  py-2 ml-8 text-[#E5E7EB]  animate-text-effect" />
              </Link>
            </div>

            {/* Développeur <br />
              Web et Web <br /> Mobile Fullstack <br />
              UX UI   Designer */}

            <div
              className="absolute z-10 w-full pb-5 px-10 md:px-20 lg:px-20"
              style={{ top: "38%", transform: "translateY(-50%)" }}
            >
              <TextGenerateEffect
                words={intro}
                className=" font-roboto mt-20 text-[#E5E7EB]  font-semibold mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 dark:text-[#E5E7EB] inline-block align-middle text-justify text-[20px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-[68px] dark:text-shadow"
                onCompleted={onTextAnimationComplete}
              />
              <br />
            </div>

            <div className="z-10  relative   flex justify-between px-10 md:px-20 lg:px-20">
              <p className="opacity-0  hidden pb-14 lg:block text-xl text-center m-auto  md:text-3xl font-roboto text-[#E5E7EB] animate-text-effect2-bounce ">
                <BsChevronDoubleDown />
              </p>
            </div>
          </div>

          <div
            className="absolute z-10 w-full px-10 md:px-20 lg:px-20"
            style={{ top: "57%", transform: "translateY(-50%)" }}
          >
            <TextGenerateEffect
              words={signed}
              className="opacity-0 text-[#E5E7EB] mt-10 font-roboto animate-text-effect2 font-semibold mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-[350px] text-right text-[15px] sm:text-[25px] md:text-[40px] lg:text-[55px] xl:text-[60px]"
            />
          </div>
        </section>

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
                className="text-sm sm:text-base md:text-lg lg:text-xl font-mono  dark:text-white animate-pulse"
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
              <h2 className=" font-roboto font-semibold  dark:text-white inline-block align-middle text-[55px] md:text-[80px] lg:text-[82px] leading-none">
                Software App <br />
                Developer &<br />
                UX UI Design
              </h2>
              {/* <TextGenerateEffect
                words={words1}
                className="   font-roboto font-semibold  dark:text-white inline-block align-middle text-[45px] md:text-[68px] lg:text-[72px] "
              /> */}

              {/* <TextGenerateEffect
                words={words2}
                className="   font-roboto font-semibold  dark:text-white inline-block align-middle text-[45px] md:text-[68px] lg:text-[72px] "
              /> */}

              {/* <TextGenerateEffect
                words={words3}
                className="   font-roboto font-semibold  dark:text-white inline-block align-middle text-[45px] md:text-[68px] lg:text-[72px] "
              /> */}

              {/* <TextGenerateEffect
                words={words4}
                className="   font-roboto font-semibold  dark:text-white  text-[45px] md:text-[68px] lg:text-[72px] "
              /> */}
            </div>
            <div
              className="absolute z-10 w-full px-10 md:px-20 lg:px-20"
              style={{ top: "57%", transform: "translateY(-50%)" }}
            >
              <h1>
                <TextGenerateEffect
                  words={words5}
                  className="text-3xl md:text-3xl mt-10  sm:pt-2 lg:text-[29px] font-roboto dark:text-white inline-block align-middle"
                />
              </h1>
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
                    title="github"
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
              <video
                playsInline
                className="
                w-full
                h-full
                object-cover
                brightness-[75%]"
                autoPlay
                muted
                loop
                src="/cathedral.mp4"
                poster="/thumbnail.png"
              ></video>
              {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
            </div>

            <div className="z-10 relative pt-10 px-10 flex justify-between md:px-20   lg:px-20">
              <p className=" text-sm sm:text-base md:text-lg lg:text-xl font-mono dark:text-white animate-pulse">
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
            </div>

            <div
              className="z-10 relative  flex justify-between px-10 md:px-20 lg:px-20 "
              style={{ top: "50%", transform: "translateY(0%)" }}
            >
              <div>
                <h1 className=" py-1 text-teal-600 font-medium text-3xl sm:text-xl md:text-4xl lg:text-5xl dark:text-purple-600 dark:text-shadow  ">
                  Ricardo Martinho
                </h1>
                <h2 className="pt-3  leading-6 text-gray-800 text-md sm:text-base md:text-xl lg:text-xl max-w-lg  dark:text-gray-300 font-roboto font-semibold   ">
                  Software et Web Developement & UX UI
                </h2>
                <p className="py-1 leading-6 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg  dark:text-gray-300 font-roboto ">
                  Strasbourg, France.
                </p>
                <br />
                <p className=" leading-6 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg  dark:text-gray-300 font-roboto tracking-tight text-justify ">
                  Passionate application developer with 3-4 years of experience
                  in Node.js, React, Python, and PHP. Expertise in developing
                  RESTful and GraphQL APIs, UI/UX prototyping, and full-stack
                  projects. Skilled in DevOps practices including CI/CD
                  automation, e2e and unit testing, debugging, and secure
                  deployment. Offering modern digital solutions for your
                  business, available to work and collaborate on ideas and
                  projects that spark interest.
                  <br />
                  <br />
                </p>
                <a
                  className="pt-5 text-sm sm:text-xl md:text-xl lg:text-xl font-mono font-bold items-center flex  dark:text-purple-600 animate-pulse"
                  href="mailto:strasbourgwebsolutions@gmail.com"
                  target="_blank"
                >
                  <BsArrowDownRightCircleFill className="mr-2  " />
                  strasbourgwebsolutions@gmail.com
                </a>
              </div>
            </div>
            <div className="z-10 relative py-5 mb-12 flex justify-between px-10 md:px-20 lg:px-20">
              <p className="text-2xl lg:text-4xl font-roboto dark:text-white animate-text-effect2-bounce">
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

        <section className="relative bg-black px-10 md:px-10 lg:px-10 dark:bg-black snap-center min-h-screen flex flex-col justify-between">
          <div className="z-10 relative pt-10  flex justify-between   lg:px-10 ">
            <h3 className=" sm:text-xl md:text-2xl font-roboto dark:text-white ">
              Skills & Services
            </h3>
            <ul className="flex items-center sticky top-0">
              <li>
                <Link href="/">
                  <GiFrance className="cursor-pointer text-5xl dark:text-white py-2 ml-8 " />
                </Link>
              </li>
            </ul>
          </div>

          {/* main content */}

          <div className=" flex flex-col px-5 md:px-20 lg:px-10 gap-10 py-10 lg:flex-row lg:flex-wrap lg:justify-center">
            <CardContainer className="basis-1/3 flex-1 w-200 h-200">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-700/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white pb-3"
                >
                  Front-End Development and UX/UI
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2  dark:text-neutral-300 text-justify"
                >
                  Passionate about front-end development and UX/UI design, I
                  strive to create aesthetically pleasing websites that align
                  with the visual identity of businesses and clients. Utilizing
                  modern technologies such as React, Next.js, Svelte, HTMX, and
                  Bootstrap, I design and develop intuitive and engaging user
                  interfaces. My expertise in prototyping and design allows me
                  to create unique experiences that foster significant user
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
                    <FaHtml5 className="mr-3" />
                    <FaCss3Alt className="mr-3" />
                    <SiTailwindcss className="mr-3" />
                    <RiOpenaiFill className="mr-3" />
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
                  Full-Stack API Development
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-justify"
                >
                  I architect, conceptualize, build, and host fullstack REST and
                  GraphQL APIs using Node.js, Python, and PHP. With skills in
                  back-end, front-end programming, and databases, my goal is to
                  create secure, functional, and efficient web applications for
                  all types of businesses. My expertise in API design and
                  integration enables the development of robust and
                  high-performance solutions. By collaborating with teams, I
                  ensure the reliability of each project.
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
                    className="flex first-letter:px-4  py-2 rounded-xl text-3xl font-normal dark:text-white"
                  >
                    <FaNodeJs className="mr-3" />
                    <FaReact className="mr-3" />
                    <SiTypescript className="mr-3" />
                    <FaPhp className="mr-3" />
                    <TbBrandNextjs className="mr-3" />
                    <FaSymfony className="mr-3" />
                    <FaWordpress className="mr-3" />
                    <FaGolang className="mr-3" />
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
                  DevOps and Secure Application Deployment
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-justify"
                >
                  I collaborate closely with developer teams and clients to
                  automate processes, improve DevOps practices, and deploy
                  secure applications. Proficient in Scrum and Agile
                  methodologies, I manage, create, and test projects, helping
                  companies excel in today&apos;s competitive market. My
                  expertise includes CI/CD automation, debugging, maintenance,
                  and securing deployed applications. My work also involves
                  optimizing infrastructures and workflows, writing
                  documentation, and contributing to open source.
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
                    className="flex first-letter:px-4 py-2 rounded-xl text-3xl font-normal dark:text-white"
                  >
                    <TbSeo className="mr-3" />
                    <FaGoogle className="mr-3" /> <DiScrum className="mr-3" />
                    <SiGooglemybusiness className="mr-3" />
                    <SiGooglesearchconsole className="mr-3" />
                    <SiPagespeedinsights className="mr-3" />
                    <SiGooglecloud className="mr-3" />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </section>

        <section className="bg-white px-5 md:px-20 lg:px-10 dark:bg-[#000000] snap-center min-h-screen w-full">
          <div className="">
            <div className="z-10 relative py-10  flex justify-between px-10 md:px-20 lg:px-10 ">
              <h3 className=" text-2xl md:text-5xl font-roboto dark:text-white ">
                XP
              </h3>
              <ul className="flex items-center sticky top-0">
                <li>
                  <Link href="/">
                    <GiFrance className="cursor-pointer text-5xl dark:text-white py-2 ml-8 " />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p className="px-5 md:px-20 lg:px-10 pt-20 pb-10 text-sm leading-6 text-gray-800 md:text-lg tracking-tight max-w-4xl text-left  dark:text-gray-300 font-roboto  ">
                You can explore some of my latest projects and work below. Many
                of them are the result of previous freelance, professional, or
                personal endeavors I&apos;ve worked on over the last years. To
                gain a deeper understanding of my technical programming skills,
                I recommend visiting my GitHub page or checking out my latest
                designs on Behance and Instagram.a
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
