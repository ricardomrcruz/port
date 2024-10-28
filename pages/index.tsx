import Head from "next/head";
import Link from "next/link";

// fonts
import { Inter } from "next/font/google";

// icons

import { GiFrance } from "react-icons/gi";
import { PiGlobe } from "react-icons/pi";
import {
  BsChevronDoubleDown,
  BsArrowDownRightCircleFill,
} from "react-icons/bs";
import {
  SiAdobepremierepro,
  SiTypescript,
  SiFastapi,
  SiJest,
  SiPlaywright,
  SiFlask,
  SiDjango,
  SiVite,
  SiExpress,
  SiGithubactions,
  SiTailwindcss,
  SiGooglecloud,
  SiHtmx,
} from "react-icons/si";
import {
  FaFigma,
  FaReact,
  FaPhp,
  FaLinux,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { RiSvelteFill } from "react-icons/ri";
import { DiNginx, DiScrum } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
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
import design from "../public/front.jpeg";
import code2 from "../public/api.jpeg";
import consulting from "../public/deploy.jpeg";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web5.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import header from "../public/ricardomartinho.jpg";
import videosection from "../public/videosection.webp";

// COMPONENTS
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { data } from "autoprefixer";

const words1 = `Développeur`;
const words2 = `Web et Web`;
const words3 = `Mobile Fullstack`;
const words4 = `UX UI Designer `;
const words5 = `Ricardo Martinho`;
const words6 = `Strasbourg, France`;
const words7 = `@strasbourgwebsolutions`;
const intro = `Ceux qui sont assez fous pour penser qu'ils peuvent changer le monde, sont ceux qui le font.`;
const signed = `- Steve Jobs`;

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
        <title>
          Ricardo Martinho - Concepteur Développeur d&apos;Applications
        </title>
        <meta
          name="description"
          content="Concepteur Développeur d'Applications - Conception et hebergement de sites web et applications. Solutions numériques pour votre business. Strasbourg, France."
        />
        <meta name="google" content="notranslate" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="canonical" href="https://www.strasbourgwebsolutions.fr" />
        <link rel="icon" href="/swsicon.png" />

        <meta
          property="og:url"
          content="https://www.strasbourgwebsolutions.fr"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ricardo Martinho - Ricardo Martinho - Concepteur Développeur d'Applications"
        />
        <meta
          property="og:description"
          content="Concepteur Développeur d'Applications - Conception et hebergement de sites web et applications. Strasbourg, France."
        />
        <meta
          property="og:image"
          content="https://www.strasbourgwebsolutions.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fricardomartinho.845bba9c.jpg&w=3840&q=75"
        />
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
              <Link href="/en">
                <PiGlobe className="cursor-pointer text-5xl dark:text-[#E5E7EB]  py-2 ml-8 text-[#E5E7EB]  animate-text-effect" />
              </Link>
            </div>

            <div
              className="absolute z-10 w-full pb-5 px-10 md:px-20 lg:px-20"
              style={{ top: "38%", transform: "translateY(-50%)" }}
            >
              <TextGenerateEffect
                words={intro}
                className=" font-roboto mt-20   text-[#E5E7EB]  font-semibold mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 dark:text-[#E5E7EB] inline-block align-middle  text-[30px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-[68px] dark:text-shadow"
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
            style={{ top: "60%", transform: "translateY(-50%)" }}
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
                  <Link href="/en">
                    <PiGlobe className="cursor-pointer text-5xl dark:text-white py-2 ml-8 animate-text-effect2" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Développeur <br />
              Web et Web <br /> Mobile Fullstack <br />
              UX UI   Designer */}

            <div
              className="absolute z-10 w-full pb-5 px-10 md:px-20 lg:px-20"
              style={{ top: "40%", transform: "translateY(-50%)" }}
            >
              <h2 className="   font-roboto font-semibold  dark:text-white inline-block align-middle text-[48px] md:text-[75px] lg:text-[82px] leading-none">
                Développeur <br />
                Fullstack <br />
                Typescript <br />
                Python PHP
              </h2>
            </div>
            <div
              className="absolute z-10 w-full px-10 md:px-20 lg:px-20"
              style={{ top: "59%", transform: "translateY(-50%)" }}
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
                  <Link href="/en">
                    <PiGlobe className="cursor-pointer text-5xl dark:text-white py-2 ml-8  " />
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
                  Développement Logiciel & UX UI
                </h2>
                <p className="py-1 leading-6 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg  dark:text-gray-300 font-roboto ">
                  Strasbourg, France.
                </p>
                <br />
                <p className=" leading-6 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg  dark:text-gray-300 font-roboto tracking-tight text-justify ">
                  Concepteur développeur d&apos;applications passionné avec 3-4
                  ans d&apos;expérience en Node.js, React, Python et PHP.
                  Expertise en développement d&apos;APIs RESTful et GraphQL,
                  maquettage UI/UX, et projets full-stack. Pratiques DevOps
                  incluant automatisation CI/CD, tests unitaires, débogage, et
                  déploiement sécurisé. Offrant des solutions digitales modernes
                  pour votre entreprise, disponible pour travailler et
                  collaborer sur des idées et projets qui suscitent de
                  l&apos;intérêt.
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

        <section className="relative bg-black px-10 md:px-10 lg:px-10 dark:bg-black snap-center sm:snap-none min-h-screen flex flex-col justify-between">
          <div className="z-10 relative pt-10  flex justify-between   lg:px-10 ">
            <h3 className=" sm:text-xl md:text-2xl font-roboto dark:text-white ">
              Skills & Services
            </h3>
            <ul className="flex items-center sticky top-0">
              <li>
                <Link href="/en">
                  <PiGlobe className="cursor-pointer text-5xl dark:text-white py-2 ml-8 " />
                </Link>
              </li>
            </ul>
          </div>

          {/* main content */}

          <div className=" flex flex-col px-5 md:px-20 lg:px-10 gap-10  lg:flex-row lg:flex-wrap lg:justify-center">
            <CardContainer className="basis-1/3 flex-1 w-200 h-200">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-700/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white pb-3"
                >
                  Front-End et Conception UX/UI
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm  mt-2 w-full dark:text-neutral-300 text-justify "
                >
                  Passionné par le développement front-end et la conception
                  UX/UI, je m&apos;efforce de créer des sites web esthétiquement
                  attrayants qui correspondent à l&apos;identité visuelle des
                  entreprises et des clients. Utilisant des technologies
                  modernes telles que React, Next.js, Svelte, HTMX et Bootstrap,
                  je conçois et développe des interfaces utilisateur intuitives
                  et engageantes. Mon expertise en maquettage et design me
                  permet de créer des expériences uniques qui suscitent une
                  participation significative des utilisateurs.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-10">
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
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="flex first-letter:px-4 gap-2  py-2 rounded-xl text-3xl font-normal dark:text-white"
                  >
                    <FaHtml5 />
                    <FaCss3Alt />
                    <SiTailwindcss />
                    <FaReact />
                    <TbBrandNextjs />
                    <RiSvelteFill />
                    <SiHtmx />
                    <FaFigma />
                    <SiAdobepremierepro />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="basis-1/3 flex-1 w-200 h-200 ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-purple-700/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white pb-3 "
                >
                  Développement API Full-Stack
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm  mt-2 dark:text-neutral-300 text-justify"
                >
                  J&apos;architecture, conceptualise, construis et héberge des
                  APIs REST et GraphQL fullstack en utilisant Node.js, Python et
                  PHP. Avec des compétences en programmation back-end, front-end
                  et en bases de données, mon objectif est de créer des
                  applications web sécurisées, fonctionnelles et efficaces pour
                  tous types d&apos;entreprises. Mon expertise en conception et
                  intégration d&apos;APIs permet de développer des solutions
                  robustes et performantes. En collaborant avec des équipes a
                  assurer la fiabilité de chaque projet.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-10">
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
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="flex first-letter:px-4 gap-2 py-2 rounded-xl text-3xl  font-normal dark:text-white"
                  >
                    <FaNodeJs />
                    <SiTypescript />
                    <SiExpress />
                    <GrGraphQl />
                    <FaPython />
                    <SiFastapi />
                    <SiFlask />
                    <SiDjango />
                    <SiVite />
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
                  DevOps CI/CD Déploiement Sécurisé
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm  mt-2 dark:text-neutral-300 text-justify"
                >
                  Je collabore étroitement avec des équipes de développeurs et
                  des clients pour automatiser les processus, améliorer les
                  pratiques DevOps et déployer des applications sécurisées.
                  Compétent en méthodologies Scrum et Agile, je gère, crée et
                  teste des projets, aidant les entreprises à exceller dans le
                  marché compétitif actuel. Mon expertise inclut
                  l&apos;automatisation CI/CD, le débogage, la maintenance et la
                  sécurisation des applications déployées. Mon travail inclut
                  aussi l&apos;optimisation des workflows et documentation.
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
                    className="flex gap-2 first-letter:px-4 py-2 rounded-xl text-3xl font-normal dark:text-white"
                  >
                    <FaDocker />
                    <SiGithubactions />
                    <SiJest />
                    <SiPlaywright />
                    <FaLinux />
                    <DiNginx />
                    <IoLogoVercel />
                    <FaGitAlt />

                    <SiGooglecloud />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </section>

        <section className="bg-white px-5 md:px-20 lg:px-10 dark:bg-[#000000] snap-center sm:snap-none min-h-screen w-full">
          <div className="">
            <div className="z-10 relative py-10  flex justify-between px-10 md:px-20 lg:px-10 ">
              <h3 className=" text-2xl md:text-3xl font-roboto dark:text-white ">
                XP
              </h3>
              <ul className="flex items-center sticky top-0">
                <li>
                  <Link href="/en">
                    <PiGlobe className="cursor-pointer text-5xl dark:text-white py-2 ml-8 " />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p className="px-5 md:px-20 lg:px-10 pt-20 pb-10 text-sm leading-6 text-gray-800 md:text-lg tracking-tight max-w-4xl text-left  dark:text-gray-300 font-roboto  ">
                Vous pouvez explorer certains de mes projets ci-dessous.
                Beaucoup d&apos;entre eux sont le résultat de réalisations
                antérieures en freelance, professionnels ou personnels sur
                lesquels j&apos;ai travaillé au cours des années. Pour mieux
                comprendre mes compétences techniques en programmation, je vous
                recommande de visiter ma page GitHub ou de consulter mes
                dernières créations sur Behance et Instagram.
              </p>
            </div>
            <div className="flex flex-col px-5 md:px-20 lg:px-10 gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Link
                  href="https://www.behance.net/gallery/207935375/Mark3ts-SAAS-UXUI"
                  target="_blank"
                >
                  <Image
                    alt="4thproject"
                    src={web4}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </Link>
              </div>

              <div className="basis-1/3 flex-1">
                <Link
                  href="https://medium.com/@strasbourgwebsolutions/fastapi-as-a-hypermedia-driven-application-w-htmx-jinja2templates-644c3bfa51d1"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={web6}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </Link>
              </div>

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
                <Link
                  href="https://1123-bleu-3.wns.wilders.dev/"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={web7}
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
