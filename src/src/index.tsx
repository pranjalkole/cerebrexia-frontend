import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "/node_modules/tailwindcss/tailwind.css"
import logo from "/cerebrexia/logo.png"
import two from "/cerebrexia/2.png"
import three from "/cerebrexia/3.png"
import video1 from "/cerebrexia/2611250-uhd_3840_2160_30fps.mp4"
import video2 from "/cerebrexia/12336975-hd_1920_1028_60fps.mp4"
import dj from "/cerebrexia/dj.mp4"
import registerNow from "/cerebrexia/- the Wedding of - (1).png"
import pexels from "/cerebrexia/pexels-jibarofoto-2091375.jpg"
import eventimg from "/cerebrexia/pexels-lstan-2147029.jpg"
import eventsimage from "/cerebrexia/Untitled design (21).png"
import galleryimage from "/images/actionvance-t7EL2iG3jMc-unsplash 1.png"
import educational from "/images/cultural events 1-2.png"
import cultural from "/images/cultural events 1.png"
import sports from "/images/cultural events 1-1.png"
import sportsimage from "/images/Rectangle 30-1.png"
import culturalimage from "/images/Rectangle 30.png"
import carousel1 from "/images/Rectangle 32.png"
import madnessunfolds from "/vecteezy_galaxy-background-with-falling-star-vector-space-galaxy_7120314.jpg"

import proniteimage1 from "/image.png"
import proniteimage2 from "/image1.png"
import proniteimage3 from "/image2.png"

import Typewriter from "typewriter-effect"
import hero from "/bg.png"
import { motion } from "framer-motion"
enum State {
  Home,
  Registration,
  Events,
  Sponsors,
  Gallery,
  TnC,
  Cultural,
  Sports,
  Educational,
  Informal,
}

function Hamburger() {
  return (
    <svg height="32px" viewBox="0 0 32 32" width="32px" className="fill-white">
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    </svg>
  )
}

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

function ProniteCard({ imageUrl }) {
  return (
      <div className="w-full aspect-[3/4] bg-black bg-opacity-50 flex justify-center">
          <div className="text-white text-xl font-bold">COMING SOON</div>
      </div>
  );
}


function Component() {
  return (
    <div className="px-12 lg:px-40 py-16">
      <h1 className="text-5xl lg:text-6xl font-bold text-center text-white py-8">PRONITES</h1>
      
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="bg-proniteimage1 bg-cover">
          <ProniteCard />
        </div>
        <div className="bg-proniteimage2 bg-cover">
          <ProniteCard />
        </div>
        <div className="bg-proniteimage3 bg-cover">
          <ProniteCard />
        </div>
      </div>
    </div>
  )
}


function GlassButton({ text }) {
  return (
    <button className="rounded-[44px] border border-[#B0A2A2] bg-[#d9d9d9]/[.10] backdrop-blur-[5.6px] px-4 lg:px-8 py-4 text-md lg:text-2xl">
      {text}
    </button>
  );
}


function Page1({ setState }) {
  const [ hamburgerState, setHamburgerState ] = useState(0);
  const clickHamburger = () => {
    setHamburgerState(1);
  };
  const clickCross = () => {
    setHamburgerState(0);
  };
  const setStateAndCross = (state) => {
    setState(state);
    clickCross();
  };
  return (
    <div className="min-h-screen flex flex-col px-4 md:px-24 bg-hero bg-cover text-white">
      <div className="hidden md:flex font-bold z-10 w-full justify-between pt-8">
        <button onClick={() => setState(State.Home)}>Home</button>
        <button onClick={() => setState(State.Registration)}>Registration</button>
        <button onClick={() => setState(State.Events)}>Events</button>
        <button onClick={() => setState(State.Sponsors)}>Sponsors</button>
        <button onClick={() => setState(State.Gallery)}>Gallery</button>
        <button onClick={() => setState(State.TnC)}>Terms and Conditions</button>
      </div>
      <div className={ hamburgerState == 0 ? "ham hidden" : "ham absolute flex flex-col h-screen z-40 left-0 bg-darkbg w-screen justify-around" }>
        <div className="flex justify-between">
          <h1>CERBREXIA</h1>
          <p onClick={clickCross}>cross</p>
        </div>
        <button onClick={() => setStateAndCross(State.Home)}>Home</button>
        <button onClick={() => setStateAndCross(State.Registration)}>Registration</button>
        <button onClick={() => setStateAndCross(State.Events)}>Events</button>
        <button onClick={() => setStateAndCross(State.Sponsors)}>Sponsors</button>
        <button onClick={() => setStateAndCross(State.Gallery)}>Gallery</button>
        <button onClick={() => setStateAndCross(State.TnC)}>Terms and Conditions</button>
      </div>
      <button className="self-end md:hidden z-30" onClick={clickHamburger}>
        <Hamburger />
      </button>
      <h1 className="text-center text-7xl sm:text-[10rem] md:text-[11rem] lg:text-[20rem] font-league pt-24">
      <motion.div
        initial={{opacity: 0, y: 300}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <Typewriter
          options={{
            strings: ['CEREBREXIA'],
            autoStart: true,
            loop: true,
          }}
        />
        </motion.div>
      </h1>
      <motion.div
        initial={{opacity: 0, y: 300}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="z-20"
      >
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between px-16 lg:px-24">
        <GlassButton text="Register Now" />
        <GlassButton text="View Events" />
      </div>
      </motion.div>
      <div className="self-center absolute bottom-0 h-full flex">
        <div className="inline-flex justify-center items-end">
          <img src={logo} className="h-1/2 object-scale-down" />
        </div>
      </div>
    </div>
  )
}

function BigBox( {number, string }) {
  return (
    <div class="flex flex-col justify-center items-center">
      <h1 className="font-bold">{number}</h1>
      <h1>{string}</h1>
    </div>
  )
}

function Page2() {
  return (
    <div className="w-full px-2 lg:px-40 text-white py-8 flex flex-col gap-8 bg-madness bg-cover">
      <h1 className="font-bold text-xl lg:text-4xl">The Madness Unfolds In :</h1>
      <div className="flex flex-row w-full border border-white justify-between text-white items-center p-4 lg:p-16 rounded-full gap-4 text-2xl lg:text-5xl rounded-[44px] border border-[#B0A2A2] bg-[#d9d9d9]/[.10] backdrop-blur-[5.6px]">
        <BigBox number="3" string="Months" />
        <h1 className="text-xl lg:text-7xl">:</h1>
        <BigBox number="47" string="Days" />
        <h1 className="text-xl lg:text-7xl">:</h1>
        <BigBox number="15" string="Hours" />
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div className="relative bg-darkbg text-white">
      <video autoPlay loop className="w-full h-full object-cover z-0 absolute">
        <source src={dj} />
      </video>
      <div className="relative z-10 text-center flex flex-col gap-4 py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <h1 className="text-3xl md:text-5xl font-bold">
          <Typewriter
            options={{
              strings: ['What Is CEREBREXIA?'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-xl md:text-2xl font-bold">IGIMS brings you the first of its kind socio-cultural festival amongst medical fraternity on the Land of Buddha, the place which not only gave INDIA but also the world the brightest of the brains, where the igniting minds will meet. To experience the everlasting thrill of unlimited music, dance, drama, entertainment amalgamated with the essence of knowledge and culture. A platform which would not only englighten, but would also give an excellent opportunity to interact with best brains of the country from senior doctors to renowned dignitaries and tycoons.</p>
      </div>
    </div>
  );
}

function Page5() {
  return (
    <div className="relative bg-darkbg text-white">
      <video autoPlay loop className="w-full h-full object-cover z-0 absolute">
        <source src={video1} />
      </video>
      <div className="relative flex flex-col gap-8 z-10 py-8 px-12 lg:px-24">
        <h1 className="text-4xl text-center font-bold">About Indira Gandhi Institute of Medical Science</h1>
        <div className="flex flex-col xl:flex-row gap-4 py-4">
          <div className="flex flex-col justify-between gap-4">
            <p className="text-xl lg:text-3xl">IGIMS brings you the first of its kind socio-cultural festival amongst medical fraternity on the Land of Buddha, the place which not only gave INDIA but also the world the brightest of the brains, where the igniting minds will meet. To experience the everlasting thrill of unlimited music, dance, drama, entertainment amalgamated with the essence of knowledge and culture. A platform which would not only englighten, but would also give an excellent opportunity to interact with best brains of the country from senior doctors to renowned dignitaries and tycoons.</p>
            <button className="bg-button w-full py-4 rounded-lg">Visit The Website</button>
          </div>
          <img src={three} className="object-scale-down order-first lg:order-none" />
        </div>
      </div>
    </div>
  );
}


function EventCard({ imageUrl, heading, text }) {
  return (
    <div className="md:basis-1/2 lg:basis-1/3 p-12">
      <div className="bg-textbox rounded-xl">
        <img src={imageUrl} className="w-full rounded-xl" />
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-xl font-bold">{heading}</h1>
              <p>{text}</p>
            </div>
            <button className="bg-button w-full py-1 rounded-lg">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page4() {
  return (
    <div className="relative bg-lightbg text-white">
      <video autoPlay loop className="w-full h-full object-cover z-0 absolute">
        <source src={video2} />
      </video>
      <div className="relative z-10">
        <h1 className="text-8xl text-center pt-4">Events</h1>
        <div className="flex flex-wrap justify-center p-0 xl:p-40">
          <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
          <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
          <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
          <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
          <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
        </div>
      </div>
    </div>
  );
}

function Footer({ setState }) {
  return (
    <div className="bg-darkbg text-white py-12 flex justify-center border-t border-white">
      <div className="inline-flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          <div className="border-r border-white">
            <h2 className="border-b border-white text-2xl font-bold py-2">CEREBREXIA</h2>
            <div className="py-2">
              <h3 className="font-bold">Contact Us</h3>
              <p>IGIMS, Patna, Bihar</p>
              <p>Youremail@gmail.com</p>
              <p>+1 800 854-36-80</p>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.855668290953!2d85.08735887421037!3d25.609711877447698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5793d036c7e9%3A0xf3c735dd4ca2d604!2sIGIMS!5e0!3m2!1sen!2sin!4v1723070080745!5m2!1sen!2sin" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[300px]" style={{ border: 0 }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Having a Problem?</h1>
            <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2" />
            <textarea placeholder="Write Your Query" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2" />
            <button className="bg-button w-full py-1 rounded-lg">Submit</button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between font-bold">
          <button onClick={() => setState(State.Home)}>Home</button>
          <button onClick={() => setState(State.Registration)}>Registration</button>
          <button onClick={() => setState(State.Events)}>Events</button>
          <button onClick={() => setState(State.Sponsors)}>Sponsors</button>
          <button onClick={() => setState(State.Gallery)}>Gallery</button>
          <button onClick={() => setState(State.TnC)}>Terms and Conditions</button>
        </div>
      </div>
    </div>
  );
}

function Header({ setState }) {
  const [ hamburgerState, setHamburgerState ] = useState(0);
  const clickHamburger = () => {
    setHamburgerState(1);
  };
  const clickCross = () => {
    setHamburgerState(0);
  };
  const setStateAndCross = (state) => {
    setState(state);
    clickCross();
  };
  return (
    <>
      <div className="hidden lg:flex justify-between p-6 bg-hero text-white">
          <div>
            <h1>CEREBREXIA</h1>
          </div>
          <div className="flex gap-8">
            <button onClick={() => setState(State.Home)}>Home</button>
            <button onClick={() => setState(State.Registration)}>Registration</button>
            <button onClick={() => setState(State.Events)}>Events</button>
            <button onClick={() => setState(State.Sponsors)}>Sponsors</button>
            <button onClick={() => setState(State.Gallery)}>Gallery</button>
            <button onClick={() => setState(State.TnC)}>Terms and Conditions</button>
          </div>
      </div>
      <div className={ hamburgerState == 0 ? "ham hidden" : "ham absolute flex flex-col h-screen z-10 left-0 bg-darkbg w-screen justify-between text-white" }>
        <div className="flex justify-between">
          <h1>CERBREXIA</h1>
          <p onClick={clickCross}>cross</p>
        </div>
        <button onClick={() => setStateAndCross(State.Home)}>Home</button>
        <button onClick={() => setStateAndCross(State.Registration)}>Registration</button>
        <button onClick={() => setStateAndCross(State.Events)}>Events</button>
        <button onClick={() => setStateAndCross(State.Sponsors)}>Sponsors</button>
        <button onClick={() => setStateAndCross(State.Gallery)}>Gallery</button>
        <button onClick={() => setStateAndCross(State.TnC)}>Terms and Conditions</button>
      </div>
      <div className="flex text-white justify-between lg:hidden bg-hero">
        <h1>CEREBREXIA</h1>
        <button onClick={clickHamburger}>
          <Hamburger />
        </button>
      </div>
      <hr className="hidden lg:block text-white" />
    </>
  );
}

function Event({ name, desc, button, onClick }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-between w-full px-8">
      <div className="lg:basis-1/4">
        <img src={eventimg} className="" />
      </div>
      <div className="lg:basis-3/4 text-white flex flex-col justify-center lg:px-24">
        <div className="flex flex-col gap-8">
            <h1 className="text-4xl lg:text-7xl">{name}</h1>
            <p className="text-xl">{desc}</p>
          <button className="bg-button w-full py-2 rounded-lg" onClick={onClick}>{button}</button>
        </div>
      </div>
    </div>
  );
}

function SponsorCard({ head, sub }) {
  return (
    <div className="basis-1/3 flex border border-white text-white bg-[#d9d9d9]/[.06] rounded-[44px] backdrop-blur-[87.15px] p-4 items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-lg lg:text-xl font-bold">{head}</h1>
        <p>{sub}</p>
      </div>
      <div className="bg-white rounded-full w-24 h-24">
      </div>
    </div>
  );
}

function EventCard2({ imageUrl, heading, text }) {
  return (
    <div className="bg-white rounded-xl">
      <div className="p-2">
        <div className="rounded-xl">
          <img src={imageUrl} className="rounded-xl" />
        </div>
        <div className="py-4">
          <h2 className="text-lg lg:text-xl text-[#3F79E6] font-bold">DANCE</h2>
          <h1 className="text-xl lg:text-2xl text-[#585757] font-bold">Name Of The Dance Competition</h1>
          <p className="text-[#808080]">This will be a small description of the event</p>
          <button className="bg-button rounded-lg text-white w-full py-2">Register</button>
        </div>
      </div>
    </div>
  );
}

function Body({ state, setState }) {
  const [registrationState, setRegistrationState] = useState(0);
  if (state == State.Registration) {
    return (
      <div className="flex flex-col lg:flex-row border-b border-white">
        <img src={registerNow} className="hidden lg:inline lg:basis-0 lg:grow lg:w-0" />
        <div className="bg-registernow bg-fixed bg-no-repeat bg-contain pt-[131vw] lg:pt-0 lg:basis-0 lg:grow lg:w-0 lg:border-l border-white lg:bg-none">
        <div className="bg-darkbg h-full">
          <div className="px-16 py-8 text-white flex flex-col gap-4">
          {registrationState == 0
            ?
            <>
              <h1 className="text-4xl font-bold">Be a Part of the Wonderful Experience</h1>
              <p><span className="text-[#999999]">You can reach us anytime via</span> <a>Your@gmail.com</a></p>
              <div>
                <p>Name</p>
                <input placeholder="Name" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              <div>
                <p>Email</p>
                <input placeholder="Email ID" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              <div>
                <p>Phone number</p>
                <input placeholder="Phone number" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              <div>
                <p>College Name</p>
                <input placeholder="College number" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              <button className="bg-button font-bold w-full p-4 rounded-lg" onClick={() => setRegistrationState(1)}>Add Participant</button>
              <button className="bg-white text-darkbg font-bold w-full p-4 rounded-lg" onClick={() => setRegistrationState(1)}>Finish Registration</button>
            </>
            :
            <>
              <div>
              <p>Number of Participants</p>
              <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Name of the Participant 1</p>
              <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Email ID</p>
              <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Name of the Participant 1</p>
              <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Email ID</p>
              <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Course UG/PG</p>
              <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <button className="bg-button w-full py-1 rounded-lg" onClick={() => setRegistrationState(0)}>Proceed to Payment</button>
            </>
          }
          </div>
          </div>
        </div>
      </div>
    );
  } else if (state == State.Events) {
    return (
      <>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={eventsimage} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="h-full flex items-center">
                <h1 className="w-3/4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-white px-8">Showcase Your TALENTS In The <span className="font-bold">EVENTS</span> Held In CEREBREXIA</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 bg-lightbg py-12 px-4 lg:px-40">
          <div className="bg-white basis-3/4 flex relative rounded-lg p-8">
            <div className="lg:basis-3/4 bg-white px-4 flex flex-col justify-center items-center gap-4">
              <h1 className="text-darkbg text-4xl font-bold">Join Us On This Fun Fiesta</h1>
              <button className="w-full bg-darkbg text-white py-2 rounded-lg">Register Now</button>
            </div>
            <div className="hidden lg:block w-1/4 absolute bottom-0 right-0">
              <img src={logo} className="overflow-visible" />
            </div>
          </div>
          <div className="basis-1/4 border border-white rounded-lg">
            <p className="text-white px-2 py-4 font-bold">Unleash your Potential: From cultural showcases to sports competitions and educational events, Cerebrexia offers a platform to develop creativity, athleticism, and intellect.</p>
          </div>
        </div>
        <hr className="text-white" />
        <div className="bg-darkbg">
          <h1 className="text-6xl text-white font-bold">EVENTS</h1>
          <div className="flex flex-col gap-4">
            <Event name="Proshows" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" />
            <Event name="Cultural Competitions" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Checkout The Events" onClick={() => setState(State.Cultural)} />
            <Event name="Sports" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Sports)} />
            <Event name="Educational" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Educational)} />
            <Event name="Informal" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Informal)} />
          </div>
        </div>
      </>
    );
  } else if (state == State.Cultural) {
    return (
      <>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={cultural} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div class="h-full flex justify-center items-center">
                <h1 className="text-9xl text-white">CULTURAL EVENTS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkbg">
          <h2 className="text-white text-2xl lg:text-6xl p-8 text-center">Cerebrexia organizes various cultural events promoting the cultural integrity</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8 px-16 lg:px-24">
            <EventCard2 imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard2 imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard2 imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard2 imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard2 imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard2 imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard2 imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard2 imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
          </div>
        </div>
        <div className="flex bg-darkbg py-8">
          <div className="inline-block relative w-full">
            <img src={culturalimage} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div class="h-full flex justify-center items-center">
                <h1 className="text-xl lg:text-5xl text-white">CEREBREXIA</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (state == State.Sports) {
    return (
      <>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={sports} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div class="h-full flex justify-center items-center">
                <h1 className="text-9xl text-white">SPORTS EVENTS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkbg">
          <h2>Cerebrexia organizes varous cultural events promoting the cultural integrity</h2>
          <div className="grid grid-cols-4 gap-4">
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
          </div>
        </div>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={sportsimage} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div class="h-full flex justify-center items-center">
                <h1 className="text-5xl text-white">CEREBREXIA</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (state == State.Educational) {
    return (
      <>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={educational} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0"><h1 className="text-white text-center text-[15rem] font-bold">EDUCATIONAL EVENTS</h1></div>
          </div>
        </div>
        <div>
          <h2>Cerebrexia organizes varous cultural events promoting the cultural integrity</h2>
          <div className="grid grid-cols-4 gap-4">
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
          </div>
        </div>
        <div className="bg-educationalimage">
          <h1>CEREBREXIA</h1>
        </div>
      </>
    );
  } else if (state == State.Informal) {
    return (
      <>
        <div className="min-h-screen bg-educational">
          <h1 className="text-9xl">CULTURAL EVENTS</h1>
        </div>
        <div>
          <h2>Cerebrexia organizes varous cultural events promoting the cultural integrity</h2>
          <div className="grid grid-cols-4 gap-4">
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
            <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
          </div>
        </div>
        <div className="bg-informalimage">
          <h1>CEREBREXIA</h1>
        </div>
      </>
    );
  } else if (state == State.Gallery) {
    return (
      <>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={galleryimage} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0"><h1 className="py-4 text-white text-center text-6xl sm:text-8xl md:text-[8rem] lg:text-[11rem] xl:text-[15rem] font-bold">
      <motion.div
        initial={{opacity: 0, y: 300}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <Typewriter
          options={{
            strings: ['GALLERY'],
            autoStart: true,
            loop: true,
          }}
        />
            </motion.div></h1></div>
          </div>
        </div>
        <hr className="text-white" />
        <div className="bg-darkbg px-4">
          <motion.div
            initial={{opacity: 0, y: 300}}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8
              }
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <div>
            <h1 className="font-league text-7xl xl:text-[20rem] text-center text-white">
              OUR LEGACY
            </h1>
            </div>
          </motion.div>
          <div class="flex justify-center items-center">
            <img src={carousel1} className="w-3/4" />
          </div>
          <div className="flex justify-center gap-2 py-2">
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
          </div>
          <div className="grid py-4 grid-cols-2 gap-4 px-4 xl:grid-cols-4 xl:px-40">
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
          </div>
          <div class="flex flex-col items-center gap-4">
            <button className="w-3/4 bg-white rounded-full py-8 px-8 text-md xl:text-3xl font-bold">Join The Fun <span>Arrow</span></button>
            <button className="w-3/4 border-4 border-white rounded-full py-8 px-8 text-md xl:text-3xl text-white font-bold">Take A Look At The Events <span>Arrow</span></button>
          </div>
          <h1 className="font-league text-7xl xl:text-[20rem] text-center text-white">IGIMS PATNA</h1>
          <div class="flex justify-center items-center">
            <img src={carousel1} className="w-3/4" />
          </div>
          <div className="flex justify-center gap-2 py-2">
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
          </div>
          <div className="grid py-4 grid-cols-2 gap-4 px-4 xl:grid-cols-4 xl:px-40">
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
            <div className="aspect-square bg-placeholder"></div> 
          </div>
        </div>
      </>
    );
  } else if (state == State.Sponsors) {
    return (
      <>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={galleryimage} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="h-full flex flex-col justify-between">
                <h1 className="text-white text-center text-5xl lg:text-[12rem] font-bold">SPONSORS</h1>
                <div className="flex justify-between gap-4 px-4">
                  <SponsorCard head="Title Sponsor" sub="Name of the Brand" />
                  <SponsorCard head="Title Sponsor" sub="Name of the Brand" />
                  <SponsorCard head="Title Sponsor" sub="Name of the Brand" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkbg flex flex-col justify-center items-center">
          <h1>Title Sponsor</h1>
          <div className="w-40 h-40 bg-white"></div>
          <p>Name of the Brand</p>
        </div>
      </>
    );
  } else if (state == State.TnC) {
    return (
      <>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={galleryimage} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="h-full flex flex-col justify-between">
                <h1 className="text-white text-center text-3xl lg:text-8xl font-bold">TERMS AND CONDITIONS</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <h1>Hi</h1>
    );
  }
}

function App() {
  const [state, setState] = useState(State.Home);
  if (state == State.Home) {
    return (
      <div className="font-montserrat">
        <Page1 setState={setState} />
        <Page2 />
        <hr className="text-white" />
        <Page3 />
        <hr className="text-white" />
        <Page4 />
        <hr className="text-white" />
        <div className="bg-pronites bg-cover">
          <Component />
        </div>
        <hr className="text-white" />
        <Page5 />
        <hr className="text-white" />
        <Footer setState={setState} />
      </div>
    );
  } else {
    return (
      <div className="font-montserrat">
        <Header setState={setState}/>
        <Body state={state} setState={setState} />
        <Footer setState={setState} />
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
/* vim: set et sw=2: */
