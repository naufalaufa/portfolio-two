import { AiFillGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import LogoImage from "./assets/images/logo-image.png";
import { useState } from "react";
import twitLogo from "./assets/images/twit.jpg";
import { AiFillTwitterCircle } from "react-icons/ai";
import netflixLogo from "./assets/images/NETFLIX-NEW-REV.png";
import crudsLogo from "./assets/images/crudsspngs.png";
import waImageCarousel from "./assets/images/wa.jpg";
import anyerCarousel from "./assets/images/anyer.jpg";
import gunungCarousel from "./assets/images/gunung.jpg";
import senyumCarousel from "./assets/images/senyum.jpg";
import pdfku from "./assets/pdf_20230525_094745_0000.pdf";

const App = () => {
  const handleTogleClick = () => {
    setNavbarLogo((prevSetNavbarLogo) => !prevSetNavbarLogo);
  };
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1680465312400-699557f4ed3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    },
  ];
  const [navbarLogo, setNavbarLogo] = useState(true);
  return (
    <div className="container">
      <nav className="nav-area ">
        <div className="text-area ">
          <FaReact
            size={40}
            className="logo-react absolute top-5 text-black p-1 shadow-md shadow-black"
          />

          <h1 className="text-text text-2xl  whitespace-nowrap sm:text-4xl font-bold">
            Hi , I Am
          </h1>
          <h1 className="text-text text-4xl sm:text-6xl sm:tracking-tighter font-bold">
            Mochamad Naufal Aufa Rifqi
          </h1>
          <h5 className="text-text-text whitespace-nowrap text-gray-500 text-sm font-bold">
            Front-end Developer
          </h5>
          <div className="text-text flex gap-2">
            <AiFillGithub
              size={40}
              className="bg-gray-400  shadow-lg shadow-black cursor-pointer"
            />
            <SiLinkedin
              size={40}
              className="bg-gray-400  shadow-lg shadow-black cursor-pointer"
            />
          </div>
        </div>
        <div className="hero-image">
          <section className="list-section">
            <span onClick={handleTogleClick} className="close">
              <RxHamburgerMenu className="logos-hamburger" />
            </span>
            {navbarLogo === true ? (
              <ul className="list-list flex justify-around mx-2 my-2">
                <li className="text-white  gap-10 rounded-lg p-2">
                  <a href="#aboutme">About Me</a>
                </li>
                <li className="text-white  gap-10 rounded-lg p-2">
                  <a href="#project">Project</a>
                </li>
                <li className="text-white  gap-10 rounded-lg p-2">
                  <a href="#gallery">Gallery</a>
                </li>
                <li className="text-black font-bold bg-white gap-10 rounded-lg p-2">
                  <a href="">Contact</a>
                </li>
              </ul>
            ) : null}
          </section>
          <img className="logos" src={LogoImage} alt="error" />
        </div>
      </nav>
      <section className="bg-black/80 w-full text-white p-2 px-10 my-10 rounded ">
        <h1 className="text-3xl font-semibold">JUST INFO </h1>
        <p>
          My portfolio website Using Tailwind css and React Js technology lets
          enjoy for the experience , have a nice day !!!
        </p>
      </section>
      <section id="aboutme" className="about-me text-center p-10">
        <h1 className="p-2 text-center font-bold text-4xl">ABOUT ME</h1>
        <div className="bg-white rounded-lg p-4 shadow-sm shadow-black ">
          <div className="flex items-center p-3 gap-2">
            <img src={twitLogo} alt="error" className="w-12 rounded-full" />
            <h1 className="font-bold">
              Naufal Aufa{" "}
              <span className="font-normal">
                @NaufalAufaaa <AiFillTwitterCircle className="inline" />
              </span>
            </h1>
          </div>
          <p className="whitespace-pre-wrap text-xl p-2 rounded ">
            Hi My name is Mochamad Naufal Aufa Rifqi , you can call me naufal ,
            2005 born man, interested in technology and design , Live in Jakarta
            , indonesian , aspires to be a professional front end developer
          </p>
          <span className=" font-bold p-2 bg-white shadow-md shadow-black hover:shadow-lg hover:shadow-black hover:bg-black hover:text-white rounded-md duration-75">
            <a href={pdfku} target="_blank" rel="noreferrer">
              View Resume
            </a>
          </span>
        </div>
      </section>
      <section id="project" className="project my-20  ">
        <h1 className="text-center font-bold text-4xl mb-5">PROJECT</h1>
        <div className=" flex flex-wrap sm:flex-nowrap bg-black/80 p-5 gap-10 text-white">
          <div>
            <h1 className="text-2xl font-bold ">NETFLIX CLONE</h1>
            <img src={netflixLogo} alt="error" />
            <p className="mt-10">
              Netflix clone project using react js technology, redux, firebase,
              Click image for view project , if there is a warning click details
              -VISIT THIS UNSAFE SITE-
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">CRUD </h1>
            <img className="w-[2700px]" src={crudsLogo} alt="error" />
            <p className="mt-10">
              CRUD USING REACT-BOOTSTAP , REDUX TOOLKIT , AND AXIOS , Click
              image for view project
            </p>
          </div>
        </div>
      </section>
      <section id="gallery" className="gallery">
        <div
          style={{ backgroundImage: `url(${slides[0].url})` }}
          className="carousel w-full h-full rounded bg-center"
        ></div>
      </section>
    </div>
  );
};

export default App;
