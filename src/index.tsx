import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import "/node_modules/tailwindcss/tailwind.css"
import "./index.css"
import logo from "/cerebrexia/logo.png"
import cerebrexialogo from "/logo.png"
import two from "/cerebrexia/2.png"
import three from "/cerebrexia/3.png"
import video1 from "/cerebrexia/2611250-uhd_3840_2160_30fps.mp4"
import video2 from "/cerebrexia/12336975-hd_1920_1028_60fps.mp4"
import eventsimage2 from "/concept-nebula-with-galaxies-deep-space-cosmos-discovery-outer-space-stars-universe (1).jpg"
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
import educationalimage from "/images/Rectangle 30-2.png"
import informalimage from "/images/Rectangle 30-3.png"
import carousel1 from "/images/Rectangle 32.png"
import madnessunfolds from "/vecteezy_galaxy-background-with-falling-star-vector-space-galaxy_7120314.jpg"
import page5img from "/IMG_20230124_181538.jpg"
import Hamburger from 'hamburger-react'
import culturall from "/cultural.jpeg"
import sportss from "/sports.jpeg"
import art from "/art.jpeg"
import literary from "/literary.jpeg"
import swarmay from "/swarmay.jpeg"
import flamenco from "/flamenco.jpeg"
import gottalent from "/gottalent.jpeg"
import stardust from "/stardust.jpeg"
import dharohar from "/dharohar.jpeg"
import lensanity from "/lensanity.jpeg"
import cinematica from "/cinematica.jpeg"
import memecentral from "/memecentral.jpeg"
import montage from "/montage.jpeg"
import venust from "/venust.jpeg"
import volleyball from "/volleyball.jpeg"
import tabletennis from "/tabletennis.jpeg"
import badminton from "/badminton.jpeg"
import chess from "/chess.jpeg"
import rubikscube from "/rubikscube.jpeg"
import kabaddi from "/kabaddi.jpeg"
import carrom from "/carrom.jpeg"
import athletics from "/athletics.jpeg"
import bgmi from "/bgmi.jpeg"
import cricket from "/cricket.jpeg"
import football from "/football.jpeg"
import chitraganga from "/chitraganga.jpeg"
import aripan from "/aripan.jpeg"
import cybercreation from "/cybercreation.jpeg"
import mehendidelight from "/mehendidelight.jpeg"
import magicmask from "/magicmask.jpeg"
import recycledwonders from "/recycledwonders.jpeg"
import clinicalcartoons from "/clinicalcartoons.jpeg"
import tattootitans from "/tattootitans.jpeg"
import doodledreams from "/doodledreams.jpeg"
import sculpturespectacle from "/sculpturespectacle.jpeg"
import teesplash from "/teesplash.jpeg"
import tmkoc from "/tmkoc.jpeg"
import popculture from "/popculture.jpeg"
import generalquiz from "/generalquiz.jpeg"
import spellbee from "/spellbee.jpeg"
import hridaya from "/hridaya.jpeg"
import agora from "/agora.jpeg"
import gallery1 from "/gallery/1dcdc3ab-d3d5-4587-93d7-e84deba8304b.jpg"
import gallery2 from "/gallery/e45b0d15-b08b-42d6-bd71-7fe09b8a3388.jpg"
import gallery3 from "/gallery/IMG_1992.jpg"
import gallery4 from "/gallery/IMG_1993.jpg"
import gallery5 from "/gallery/IMG_1994.jpg"
import gallery6 from "/gallery/IMG_1995.jpg"
import gallery7 from "/gallery/IMG_1996.jpg"
import gallery8 from "/gallery/IMG_1997.jpg"
import gallery9 from "/gallery/IMG_1999.jpg"
import gallery10 from "/gallery/IMG_2002.jpg"
import gallery11 from "/gallery/IMG_2003.jpg"
import gallery12 from "/gallery/IMG_2004.jpg"
import gallery13 from "/gallery/IMG_2005.jpg"
import gallery14 from "/gallery/IMG_2006.jpg"
import gallery15 from "/gallery/IMG_2007.jpg"
import gallery16 from "/gallery/IMG_2008.jpg"
import gallery17 from "/gallery/IMG_2010.jpg"
import gallery18 from "/gallery/IMG_2011.jpg"
import gallery19 from "/gallery/IMG_2012.jpg"
import gallery20 from "/gallery/IMG_2013.jpg"
import gallery21 from "/gallery/IMG_2014.jpg"
import gallery22 from "/gallery/IMG_2015.jpg"
import gallery23 from "/gallery/IMG_2016.jpg"
import gallery24 from "/gallery/IMG_2017.jpg"
import gallery25 from "/gallery/IMG_9168.jpg"
import gallery26 from "/gallery/IMG_9169.jpg"
import gallery27 from "/gallery/IMG_9186.jpg"
import gallery28 from "/gallery/IMG_9188.jpg"
import gallery29 from "/gallery/IMG_9189.jpg"

import proniteimage1 from "/image.png"
import proniteimage2 from "/image1.png"
import proniteimage3 from "/image2.png"

import Typewriter from "typewriter-effect"
import hero from "/bg.png"
import { motion, useAnimate } from "framer-motion"
enum State {
  Home,
  Registration,
  Events,
  Sponsors,
  Gallery,
  TnC,
  Cultural,
  Sports,
  Literary,
  Art,
}

/*function Hamburger() {
  return (
    <svg height="32px" viewBox="0 0 32 32" width="32px" className="fill-white">
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    </svg>
  )
}*/

function Cross() {
  return (
    <svg width="64px" height="64px" viewBox="0 -0.5 32 32" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
<path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#ffffff"/>
</svg>



  );


}

function Arrow({stroke, bg}) {
  return (
    <>
    <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={bg != "#000000" ? "bg-darkbg rounded-full hidden lg:block" : "bg-white rounded-full hidden lg:block"}>
<path d="M7 17L17 7M17 7H8M17 7V16" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={bg != "#000000" ? "bg-darkbg rounded-full block lg:hidden" : "bg-white rounded-full block lg:hidden"}>
<path d="M7 17L17 7M17 7H8M17 7V16" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</>
  );

}

const cardVariants = {
  offscreen: {
     y: 50
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
    <div
    className="px-12 lg:px-40 py-16">
      <motion.div
        initial={{opacity: 0,  y: 50}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
      <h1 className="text-5xl lg:text-6xl font-bold text-center text-white py-8">PRONITES</h1>
      </motion.div>
      
      <div
      className="grid lg:grid-cols-3 gap-16">
        <motion.div
        initial={{opacity: 0,  y: 50}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-proniteimage1 bg-cover">
          <ProniteCard />
        </motion.div>
        <motion.div
        initial={{opacity: 0,  y: 50}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-proniteimage2 bg-cover">
          <ProniteCard />
        </motion.div>
        <motion.div
        initial={{opacity: 0,  y: 50}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-proniteimage3 bg-cover">
          <ProniteCard />
        </motion.div>
      </div>
    </div>
  )
}


function GlassButton({ text, onClick }) {
  return (
    <button className="rounded-[44px] border border-[#B0A2A2] bg-[#d9d9d9]/[.10] backdrop-blur-[5.6px] px-4 lg:px-8 py-4 text-base lg:text-2xl" onClick={onClick}>
      {text}
    </button>
  );
}


function Page1({ setState }) {
  const [ scope, animate ] = useAnimate();
  const [ hamburgerState, setHamburgerState ] = useState(0);
  const toggleHamburger = () => {
    if (hamburgerState == 0) animate(".therest", { left: 0 }, { duration: 0.2 });
    else animate(".therest", { left: -9999 }, { duration: 0.2 });
    setHamburgerState(hamburgerState => (hamburgerState + 1) % 2);
  };
  const setStateAndCross = (state) => {
    setState(state);
    toggleHamburger();
  };
  return (
    <div ref={scope} className="min-h-screen flex flex-col px-4 md:px-24 bg-hero bg-cover text-white relative">
      <div className="hidden md:flex font-bold z-10 w-full justify-between pt-8">
        <button onClick={() => setState(State.Home)}>Home</button>
        <button onClick={() => setState(State.Registration)}>Registration</button>
        <button onClick={() => setState(State.Events)}>Events</button>
        <button onClick={() => setState(State.Sponsors)}>Sponsors</button>
        <button onClick={() => setState(State.Gallery)}>Gallery</button>
        <button onClick={() => setState(State.TnC)}>Terms and Conditions</button>
      </div>
      <div className={ "ham therest absolute flex flex-col h-screen z-40 left-[-9999px] bg-darkbg w-screen justify-around text-5xl font-league" }>
        <div className="flex justify-center items-center">
          <img src={cerebrexialogo} className="w-2/3" />
        </div>
        <div className="absolute top-0 right-0 pt-8">
          <Hamburger toggled={hamburgerState == 1} toggle={toggleHamburger} />
        </div>
        <button onClick={() => setStateAndCross(State.Home)}>Home</button>
        <button onClick={() => setStateAndCross(State.Registration)}>Registration</button>
        <button onClick={() => setStateAndCross(State.Events)}>Events</button>
        <button onClick={() => setStateAndCross(State.Sponsors)}>Sponsors</button>
        <button onClick={() => setStateAndCross(State.Gallery)}>Gallery</button>
        <button onClick={() => setStateAndCross(State.TnC)}>Terms and Conditions</button>
      </div>
      <div className="pt-8 self-end md:hidden z-30">
        <Hamburger toggled={hamburgerState == 1} toggle={toggleHamburger} />
      </div>
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-20">25-27th October 2024</h1>
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-8">IGIMS Presents</h1>
      <h1 className="text-center text-7xl sm:text-[10rem] md:text-[11rem] lg:text-[20rem] font-league py-4 lg:py-20">
      <motion.div
        initial={{opacity: 0,  y: 50}}
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
        initial={{opacity: 0,  y: 50}}
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
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between py-8 lg:py-24 px-16 lg:px-24">
        <GlassButton text="Register Now" onClick={() => setState(State.Registration)} />
        <GlassButton text="View Events" onClick={() => setState(State.Events)} />
      </div>
      </motion.div>
      <div className="self-center absolute bottom-0 h-full flex">
        <div className="inline-flex justify-center items-end h-full">
          <div className="lg:h-1/2 flex justify-center items-end">
            <img src={logo} className="lg:h-full object-scale-down" />
          </div>
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

function getMonthDifference(startDate, endDate) {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
}

function getDayDiff(startDate, endDate) {
  const msInDay = 24 * 60 * 60 * 1000;

  return Math.floor(Math.abs(endDate - startDate) / msInDay) % 30;
}

function getHoursDiff(startDate, endDate) {
  const msInHour = 1000 * 60 * 60;

  return Math.round(Math.abs(endDate - startDate) / msInHour) % 24;
}

function Page2() {
  let eventDate = new Date('2024-10-25')
  let now = new Date()
  return (
    <div className="w-full px-4 lg:px-40 text-white py-8 flex flex-col gap-8 bg-madness bg-cover">
      <motion.div
        initial={{opacity: 0,  y: 50}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
      <h1 className="font-bold text-xl lg:text-4xl">The Madness Unfolds In :</h1>
      </motion.div>
      <div className="flex flex-row w-full border border-white justify-between text-white items-center p-4 lg:p-16 rounded-full gap-4 text-2xl lg:text-5xl rounded-[44px] border border-[#B0A2A2] bg-[#d9d9d9]/[.10] backdrop-blur-[5.6px]">
        <BigBox number={"0"} string="Months" />
        <h1 className="text-xl lg:text-7xl">:</h1>
        <BigBox number={getDayDiff(now, eventDate)} string="Days" />
        <h1 className="text-xl lg:text-7xl">:</h1>
        <BigBox number={getHoursDiff(now, eventDate)} string="Hours" />
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
        <motion.div
        initial={{opacity: 0,  y: 50}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
        ><p className="text-xl md:text-2xl font-bold rounded-[44px] border border-[#B0A2A2] bg-[#d9d9d9]/[.10] backdrop-blur-[5.6px] p-8">IGIMS brings you the first of its kind socio-cultural festival amongst medical fraternity on the Land of Buddha, the place which not only gave INDIA but also the world the brightest of the brains, where the igniting minds will meet. To experience the everlasting thrill of unlimited music, dance, drama, entertainment amalgamated with the essence of knowledge and culture. A platform which would not only englighten, but would also give an excellent opportunity to interact with best brains of the country from senior doctors to renowned dignitaries and tycoons.</p></motion.div>
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
        <h1 className="text-4xl text-center font-bold">About Indira Gandhi Institute of Medical Sciences</h1>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col justify-between gap-4">
            <p className="text-xl lg:text-3xl rounded-[44px] border border-[#B0A2A2] bg-[#d9d9d9]/[.10] backdrop-blur-[5.6px] p-8">
            Indira Gandhi Institute of Medical Sciences (IGIMS) was established in 1983 as an autonomous organization on the pattern of AIIMS, New Delhi.
It is the torchbearer of tertiary healthcare and medical academics in the state of Bihar. Our institution is renowned for its dedication to nurturing bright minds, encouraging innovation, and promoting research across various disciplines.
Indira Gandhi Institute of Medical Sciences is an experience that does not limit itself to a couple of lines.
Situated in the heart of Patna, our campus serves as a hub for cultural diversity and academic exploration. From cutting-edge research facilities to a vibrant student community, IGIMS offers a nurturing environment that empower students to excel in both academics and extracurricular activities.</p>
            <button className="w-full bg-button py-4 rounded-lg"><a href="https://igims.org/" target="_blank" className="text-center">Visit The Website</a></button>
          </div>
          <img src={page5img} className="object-scale-down order-first" />
        </div>
      </div>
    </div>
  );
}


function EventCard({ imageUrl, heading, text, onClick }) {
  return (
      <motion.div
        initial={{opacity: 0,  y: 50}}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
      className="md:basis-1/2 lg:basis-1/3 p-12">
      <div className="bg-textbox rounded-xl h-full flex flex-col justify-between">
        <img src={imageUrl} className="w-full rounded-xl" />
        <div className="p-4 h-full">
          <div className="flex flex-col gap-4 justify-between h-full">
            <div>
              <h1 className="text-xl font-bold">{heading}</h1>
              <p>{text}</p>
            </div>
            <button className="bg-button w-full py-1 rounded-lg" onClick={onClick}>Register Now</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EventCardWithoutMotion({ imageUrl, heading, text, onClick }) {
  return (
      <div className="md:basis-1/2 lg:basis-1/3 p-12">
      <div className="bg-textbox rounded-xl h-full flex flex-col justify-between">
        <img src={imageUrl} className="w-full rounded-xl" />
        <div className="p-4 h-full">
          <div className="flex flex-col gap-4 justify-between h-full">
            <div>
              <h1 className="text-xl font-bold">{heading}</h1>
              <p>{text}</p>
            </div>
            <button className="bg-button w-full py-1 rounded-lg" onClick={onClick}>Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page4({ setState }) {
  return (
    <div className="relative bg-eventsimagee bg-cover text-white">
      <div className="relative z-10">
        <h1 className="font-bold text-7xl text-center pt-4">
          <Typewriter
            options={{
              strings: ['EVENTS'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="flex flex-wrap justify-center items-stretch p-0 xl:p-40">
          <EventCard imageUrl={culturall} heading="KALAKRITI (Cultural Competitions)" text="As the festive season approaches, the streets light up and the air fills with joy.🎆 To amplify your excitement, Cerebrexia - The Annual Fest of IGIMS, Patna proudly presents “Kalakriti,” a cultural extravaganza where your talents can truly shine.✨ Showcase your art and let the world admire it. Submit your entries now for a chance to win amazing prizes.🏆Stay tuned for more updates on this year’s “Kalakriti.”📢" onClick={() => setState(State.Cultural)} />
          <EventCard imageUrl={literary} heading="INK & INSPIRATION (Literary Competitions)" text="🖋️✨ Ready to showcase your literary brilliance? Our Literary Competition is here, bringing together the art of words in every form! From poetic verses 📝 to thought-provoking debates 🗣️, soulful shayari 🎤 to brain-teasing quizzes 🤔, there's something for every wordsmith!

Unleash your creativity, challenge your mind, and let your voice be heard!" onClick={() => setState(State.Literary)} />
          <EventCard imageUrl={art} heading="AURORA (Art Competitions)" text="Artistic Expressions Unite and Unleash Your Creativity!
Join Aurora, the art events of Cerebrexia 2024 featuring digital art, Painting🖌️, tattoo art, mehendi, rangoli, face painting & t-shirt painting clay art and many more!!🎨
Meet talented artists, learn new techniques & showcase your skills!" onClick={() => setState(State.Art)} />
          <EventCardWithoutMotion imageUrl={sportss} heading="IGNITRO (Sports Competitions)" text="The Ultimate Sports Fiesta 🎉🏆We are excited to invite you to our fest’s sporting events, where passion, adrenaline, and excitement collide! Experience an unparalleled showcase of Cricket 🏏, Volleyball 🏐, Badminton 🏸, Table Tennis 🏓, Athletics 🏃♂️💨, and more—all in one place! 🌟

Join us for a sporting event like never before! Participants can register via Google Forms 📝 to be part of this thrilling experience. Registrations will remain open until October 12th. All matches will take place on our campus." onClick={() => setState(State.Sports)} />
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
            <div className="py-2 px-2">
              <h3 className="font-bold">Contact Us</h3>
              <p>IGIMS, Patna, Bihar</p>
              <p>igims.cerebrexia@gmail.com</p>
              <p>Mayank - +916201581144</p>
              <p>Ashutosh - +919504078839</p>
              <p>Priyanshi - +916205761609</p>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.855668290953!2d85.08735887421037!3d25.609711877447698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5793d036c7e9%3A0xf3c735dd4ca2d604!2sIGIMS!5e0!3m2!1sen!2sin!4v1723070080745!5m2!1sen!2sin" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[300px]" style={{ border: 0 }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <form action="/submitquery" method="POST" className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Having a Problem?</h1>
            <input required type="email" name="email" placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2" />
            <textarea required name="query" placeholder="Write Your Query" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2" />
            <button className="bg-button w-full py-1 rounded-lg">Submit</button>
          </form>
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
  const [ scope, animate ] = useAnimate();
  const [ hamburgerState, setHamburgerState ] = useState(0);
  const toggleHamburger = () => {
    if (hamburgerState == 0) animate(".therest", { left: 0 }, { duration: 0.2 });
    else animate(".therest", { left: -9999 }, { duration: 0.2 });
    setHamburgerState(hamburgerState => (hamburgerState + 1) % 2);
  };
  const setStateAndCross = (state) => {
    setState(state);
    toggleHamburger();
  };
  return (
    <div ref={scope} className="sticky top-0 z-40">
      <div className="hidden lg:flex justify-between p-6 bg-hero text-white">
          <div className="pl-2">
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
      <div className={ "ham therest absolute flex flex-col h-screen z-10 left-[-9999px] bg-darkbg w-screen justify-between text-white text-5xl font-league" }>
        <div className="flex justify-center items-center">
          <img src={cerebrexialogo} className="w-2/3" />
        </div>
        <div className="absolute top-0 right-0 pt-8">
          <Hamburger toggled={hamburgerState == 1} toggle={toggleHamburger} />
        </div>
        <button onClick={() => setStateAndCross(State.Home)}>Home</button>
        <button onClick={() => setStateAndCross(State.Registration)}>Registration</button>
        <button onClick={() => setStateAndCross(State.Events)}>Events</button>
        <button onClick={() => setStateAndCross(State.Sponsors)}>Sponsors</button>
        <button onClick={() => setStateAndCross(State.Gallery)}>Gallery</button>
        <button onClick={() => setStateAndCross(State.TnC)}>Terms and Conditions</button>
      </div>
      <div className="left-0 right-0 flex text-white justify-between items-center lg:hidden bg-hero px-4 py-2 z-40">
        <h1>CEREBREXIA</h1>
        <Hamburger toggled={hamburgerState == 1} toggle={toggleHamburger} />
      </div>
      <hr className="hidden lg:block text-white" />
    </div>
  );
}

function Event({ img, name, desc, button, onClick }) {
  return (
    <div
    className="flex flex-col lg:flex-row gap-4 items-between w-full px-8">
      <div className="lg:basis-1/4">
        <img src={img} className="" />
      </div>
      <div className="lg:basis-3/4 text-white flex flex-col justify-center lg:px-24">
        <div className="flex flex-col gap-8">
            <h1 className="text-4xl lg:text-5xl">{name}</h1>
            <p className="text-xl">{desc}</p>
          <button className="bg-button w-full py-2 rounded-lg" onClick={onClick}>{button}</button>
        </div>
      </div>
    </div>
  );
}

function EventComingSoon({ name, desc }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-between w-full px-8">
      <div className="lg:basis-1/4">
        <img src={eventimg} className="" />
      </div>
      <div className="lg:basis-3/4 text-white flex flex-col justify-center lg:px-24">
        <div className="flex flex-col gap-8">
            <h1 className="text-4xl lg:text-7xl">{name}</h1>
            <p className="text-xl">{desc}</p>
          <p className="w-full text-center text-xl py-2 rounded-lg">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

function SponsorCard({ head, sub }) {
  return (
    <div className="basis-1/3 flex border border-white text-white bg-[#d9d9d9]/[.06] rounded-[44px] backdrop-blur-[87.15px] p-4 items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-sm lg:text-xl font-bold">{head}</h1>
        <p className="text-xs lg:text-md">{sub}</p>
      </div>
      <div className="bg-white rounded-full w-full aspect-square lg:w-24 lg:h-24">
      </div>
    </div>
  );
}

function EventCard2({ imageUrl, heading, text, link }) {
  return (
    <div className="bg-white rounded-xl h-full">
      <div className="p-2 flex flex-col justify-between h-full">
        <div className="rounded-xl">
          <img src={imageUrl} className="rounded-xl" />
        </div>
        <div className="py-4 flex flex-col justify-between h-full">
          <div>
            <h1 className="text-xl lg:text-2xl text-[#585757] font-bold">{heading}</h1>
            <p className="text-[#808080]">{text}</p>
          </div>
          <a href={link} target="_blank" className="text-center bg-button rounded-lg text-white w-full py-2">Register</a>
        </div>
      </div>
    </div>
  );
}

function EventCard3({ imageUrl, heading, text, link, link2 }) {
  return (
    <div className="bg-white rounded-xl h-full">
      <div className="p-2 flex flex-col justify-between h-full">
        <div className="rounded-xl">
          <img src={imageUrl} className="rounded-xl" />
        </div>
        <div className="py-4 flex flex-col justify-between h-full">
          <div>
            <h1 className="text-xl lg:text-2xl text-[#585757] font-bold">{heading}</h1>
            <p className="text-[#808080]">{text}</p>
          </div>
          <div className="flex flex-col gap-4">
            <a href={link} target="_blank" className="text-center bg-button rounded-lg text-white w-full py-2">Register (Men)</a>
            <a href={link2} target="_blank" className="text-center bg-button rounded-lg text-white w-full py-2">Register (Women)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body({ state, setState }) {
  const [registrationState, setRegistrationState] = useState(0);
  const [numParticipants, setNumParticipants] = useState(0);
  const [freereg, setFreereg] = useState(0);
  const [promo_code, setPromoCode] = useState("");
  const [alertShown, setAlertShown] = useState(false);
  if (promo_code.toLowerCase() == "thala7" && numParticipants == 6 && !alertShown) {
    setAlertShown(true);
    alert("You are eligible for free basic registration of Participant 8");
  }
  if (promo_code.toLowerCase() == "chiku18" && numParticipants == 7 && !alertShown) {
    setAlertShown(true);
    alert("You are eligible for free basic registration of Participant 9");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
//    fetch("/api/create-users");
  };
  if (state == State.Registration) {
    return (
      <div className="flex flex-col lg:flex-row border-b border-white">
        <img src={registerNow} className="hidden lg:inline lg:basis-0 lg:grow lg:w-0" />
        <div className="bg-registernow bg-fixed bg-no-repeat bg-contain pt-[126vw] lg:pt-0 lg:basis-0 lg:grow lg:w-0 lg:border-l border-white lg:bg-none">
        <div className="bg-darkbg h-full">
          <form className="px-16 py-8 text-white flex flex-col gap-4" method="POST" action="/ccavRequestHandler">
            <input className="hidden" name="num_participants" value={numParticipants.toString()} />
            <h1 className="text-4xl font-bold">Be a Part of the Wonderful Experience</h1>
            <div className="rounded-[44px] border border-[#B0A2A2] bg-[#d9d9d9]/[.10] backdrop-blur-[5.6px] px-4 lg:px-8 py-4">
            <p><strong>BR Benefits:</strong></p>
<p>🎉 <strong>Access to all Cerebrexia events</strong></p>
<p>🚌 <strong>Bus Transportation facilities</strong> on designated routes of IGIMS Patna</p>
<p>🩺 <strong>Complimentary access to Medical Workshops</strong> led by eminent faculty of IGIMS Patna (limited seats):</p>
<ul>
<li>Basic Life Support Workshop (BLS)</li>
</ul>
<p>💪 <strong>Participation in:</strong></p>
<ul>
<li>Arm Wrestling</li>
<li>Dare to Dart</li>
<li>Push-up Challenge</li>
</ul>
<p>👀 <strong>Audience viewership</strong> across all events held under Cerebrexia, IGIMS Patna</p>
</div>
<hr />                                                                                                                                                                                                               <p>Feel free to register and enjoy these exclusive benefits!</p>

            <p><span className="text-[#999999]">You can reach us anytime via</span> <a href="mailto:igims.cerebrexia@gmail.com">igims.cerebrexia@gmail.com</a></p>
            <div>
              <p>Name</p>
              <input placeholder="Name" name="billing_name" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" required />
            </div>
            <div>
              <p>Email</p>
              <input placeholder="Email ID" type="email" name="billing_email" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" required />
            </div>
            <div>
              <p>Phone number</p>
              <input placeholder="Phone number" name="billing_tel" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" required />
            </div>
            <div>
              <p>College/School Name</p>
              <input placeholder="College/School Name" name="college_name" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
            </div>
            <div>
              <p>Batch</p>
              <input placeholder="Batch" name="batch" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
            </div>
            {Array.from({length: numParticipants}).map((it, index) => (
              <>
              <h1 className="text-lg font-bold">Participant {index+2}</h1>
              <div>
                <p>Name</p>
                <input placeholder="Name" name={"pname"+index} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" required />
              </div>
              <div>
                <p>Email</p>
                <input type="email" placeholder="Email ID" name={"pemail"+index} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" required />
              </div>
              <div>
                <p>College/School Name</p>
                <input placeholder="College/School Name" name={"pcollege_name"+index} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              <div>
                <p>Batch</p>
                <input placeholder="Batch" name={"pbatch"+index} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              </>
            ))}
              { promo_code.toLowerCase() == "thala7" && numParticipants == 6 &&
              <>
              <h1 className="text-lg font-bold">Participant 8</h1>
              <div>
                <p>Name</p>
                <input placeholder="Name" name={"pname6"} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" required />
              </div>
              <div>
                <p>Email</p>
                <input type="email" placeholder="Email ID" name={"pemail6"} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" required />
              </div>
              <div>
                <p>College/School Name</p>
                <input placeholder="College/School Name" name={"pcollege_name6"} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              <div>
                <p>Batch</p>
                <input placeholder="Batch" name={"pbatch6"} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              </>
              }
              { promo_code.toLowerCase() == "chiku18" && numParticipants == 7 &&
              <>
              <h1 className="text-lg font-bold">Participant 9</h1>
              <div>
                <p>Name</p>
                <input placeholder="Name" name={"pname7"} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" required />
              </div>
              <div>
                <p>Email</p>
                <input type="email" placeholder="Email ID" name={"pemail7"} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" required />
              </div>
              <div>
                <p>College/School Name</p>
                <input placeholder="College/School Name" name={"pcollege_name7"} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              <div>
                <p>Batch</p>
                <input placeholder="Batch" name={"pbatch7"} className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" />
              </div>
              </>
              }
            <div>
              <p>Promo Code</p>
              <input placeholder="Promo Code" name="promo_code" className="bg-darkbg border border-placeholder placeholder:text-placeholder rounded p-4 w-full" value={promo_code} onChange={(promo_code) => setPromoCode(promo_code.target.value)} />
            </div>
              { numParticipants != 7 &&
              <button className="bg-button font-bold w-full p-4 rounded-lg" onClick={() => { setNumParticipants(x => Math.min(7, x+1)); event.preventDefault(); }}>Add Participant</button> }
              { numParticipants != 0 &&
                <button className="bg-button font-bold w-full p-4 rounded-lg" onClick={() => { setNumParticipants(x => Math.max(0, x-1)); event.preventDefault(); }}>Remove Participant {numParticipants+1}</button> }
              <div className="flex gap-2">
                <input type="checkbox" required value="tnc" /><span>I agree with the <span><button className="inline" onClick={() => setState(State.TnC)}>Terms & Conditions</button></span></span>
              </div>
              <button className="bg-white text-darkbg font-bold w-full p-4 rounded-lg">Finish Registration</button>
            </form>
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
              <button className="w-full bg-darkbg text-white py-2 rounded-lg" onClick={() => setState(State.Registration)}>Register Now</button>
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
          <h1 className="text-6xl text-white font-bold py-4 px-1">EVENTS</h1>
          <div className="flex flex-col gap-4">
            <EventComingSoon name="Proshows" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" />
            <Event img={culturall} name="KALAKRITI (Cultural Competitions)" desc="As the festive season approaches, the streets light up and the air fills with joy.🎆 To amplify your excitement, Cerebrexia - The Annual Fest of IGIMS, Patna proudly presents “Kalakriti,” a cultural extravaganza where your talents can truly shine.✨ Showcase your art and let the world admire it. Submit your entries now for a chance to win amazing prizes.🏆Stay tuned for more updates on this year’s “Kalakriti.”📢" button="Checkout The Events" onClick={() => setState(State.Cultural)} />
            <Event img={sportss} name="IGNITRO (Sports Competitions)" desc="The Ultimate Sports Fiesta 🎉🏆We are excited to invite you to our fest’s sporting events, where passion, adrenaline, and excitement collide! Experience an unparalleled showcase of Cricket 🏏, Volleyball 🏐, Badminton 🏸, Table Tennis 🏓, Athletics 🏃♂️💨, and more—all in one place! 🌟

Join us for a sporting event like never before! Participants can register via Google Forms 📝 to be part of this thrilling experience. Registrations will remain open until October 12th. All matches will take place on our campus." button="Register Now" onClick={() => setState(State.Sports)} />
            <Event img={literary} name="INK & INSPIRATION (Literary Competitions)" desc="🖋️✨ Ready to showcase your literary brilliance? Our Literary Competition is here, bringing together the art of words in every form! From poetic verses 📝 to thought-provoking debates 🗣️, soulful shayari 🎤 to brain-teasing quizzes 🤔, there's something for every wordsmith!

Unleash your creativity, challenge your mind, and let your voice be heard!" button="Register Now" onClick={() => setState(State.Literary)} />
            <Event img={art} name="AURORA (Art Competitions)" desc="Artistic Expressions Unite and Unleash Your Creativity!
Join Aurora, the art events of Cerebrexia 2024 featuring digital art, Painting🖌️, tattoo art, mehendi, rangoli, face painting & t-shirt p
ainting clay art and many more!!🎨
Meet talented artists, learn new techniques & showcase your skills!" button="Register Now" onClick={() => setState(State.Art)} />
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
                <h1 className="text-center text-5xl lg:text-9xl text-white">CULTURAL EVENTS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkbg px-16 py-8 lg:px-24">
          <a href="https://drive.google.com/file/d/1Lvzo2wd9RoD2eF8xop5Q6IATzVUmAX-V/view" className="text-center block text-white bg-button rounded-lg py-4" target="_blank">Brochure Link</a>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
          <EventCard2 imageUrl={venust} heading="VENUST - The Fashion Show Competition" text="Get ready to walk the ramp at VENUST!🌟. Unleash your creativity with themes like Fantasy, retro and Indian history!✨️👗🎶. Register solo or with a team and make your fashion dream come true!🎉 Get a chance to share the ramp with celebrity showstopper and also win exciting cash prizes💸💰. Tap the link in our bio and join us today✨️🌟" link="https://forms.gle/yN7TzJGZ3Q9SYb3A7" />
          <EventCard2 imageUrl={flamenco} heading="Flamenco - The Ultimate Dance Competition" text="Isn't it tremendous how the world comes alive when music fills the air, and feet begin to tap a rhythm that delights the heart? ❤️
That's the beauty of dance that you are about to experience .
Get ready to show your moves .💃" link="https://forms.gle/wz4v9GAHbnQ47sS49" />
          <EventCard2 imageUrl={swarmay} heading="Swarmay: Where Voices Unite!" text="Join the melodic revolution!🎵❤️
Unleash your inner rockstar and mesmerize the crowd.
Electrifying performances, soulful harmonies, and musical magic✨
Let the rhythm take control and make your voice heard.
Showcase your vocal talents and mesmerize the crowd with soulful performances and harmonious vibes." link="https://forms.gle/p7W5WWjySPdbHqqA8" />
          <EventCard2
            imageUrl={dharohar}
            heading="Dharohar"
            text="CEREBREXIA - The Annual Fest at IGIMS, Patna - brings to you DHAROHAR, a platform to Flaunt the Magic of Indian Culture.🌟🌟

✨ Revive the Beauty of Multiculturalism.✨

Participate in Celebrating the  Festivities Showcasing our Cultural Tapestry.🤩

Choose your Culture, Expand your Palette and represent your Style through Dances, Costumes and Festivals.💫

Participate and win Exciting Prizes!!!
🎊🎊"
            link="https://forms.gle/3KaGdKWcbGa8YNez8"
          />
          <EventCard2
            imageUrl={gottalent}
            heading="Got Talent"
            text="🌟 Get ready to showcase your unique talents at Got Talent! 🌈✨ Whether you Rap, Stand-up, mimicry juggle, or dazzle with your creativity, this is your moment to shine! 🎤💃🕺Bring your A-game, and let’s see what you’ve got! 💥🔥 Are you ready to be the star of the show? 🌠🌟"
            link="https://forms.gle/cbZ4zuQPCEsXhbXS7"
          />
          <EventCard2
            imageUrl={lensanity}
            heading="Lensanity - Photography Competition"
            text='Attention photographers! 📸✨

Ready to capture the moment?
Capture the essence of a moment, preserving it forever.
 Enter our photography competition for a chance to showcase your talent.🤩

"Every photograph is a story waiting to be told."
'
            link="https://forms.gle/qGRW1hURSjGBWa8r5"
          />
          <EventCard2
            imageUrl={stardust}
            heading="Stardust- Bollywood Scene Recreation Competition"
            text="Mirror, mirror, on the wall, who's the best mimic of them all?Madness has a name and it's Bollywood 🤩

Stardust invites you to recreate Your Favourite bollywood scene or scenes from web series ✨Bollywood: where sanity takes a backseat and drama takes overShowcase your inner talent and win exciting prizes🏆 🥇"
            link="https://forms.gle/Qqbsdt6Yim7JJnU3A"
          />
          <EventCard2
            imageUrl={montage}
            heading="Montage - Reel Making Competition"
            text="Reel in the spotlight ,Shine so bright ✨
Where creativity meets clarity , Reel it !!!🤩
Montage invites you to unleash your creativity
Participate in reel competition and showcase your talent!
Win exciting prizes 🏆🥇
Register now !
Let the reels roll !!💥"
            link="https://forms.gle/DazrrBWuchFaPV6fA"
          />
          <EventCard2
            imageUrl={cinematica}
            heading="Cinematica - Film Making Competition"
            text='"Lights, 📸, action—your moment is here! Cenematica invites visionary filmmakers, storytellers, and dreamers to step up and seize the spotlight. " Here every frame counts and every story matters".  Roll the 📽️, break the mold, and let your creativity shine!"'
            link="https://forms.gle/S7rcfbbbjtKqrmwQ9"
          />
          <EventCard2
            imageUrl={memecentral}
            heading="Memecentral - Meme Making Competition"
            text="Get ready to unleash your creativity! 💥💥We are elated to announce Memecentral, where humor meets originality.

Whether you're a seasoned meme creator or just love a good laugh 😃😸, this is your chance to showcase your wit and win exciting prizes 🏆. Stay tuned for more details, and start crafting those hilarious memes!"
            link="https://forms.gle/Zdr23MvW4baw3jA47"
          />
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
                <h1 className="text-center text-6xl lg:text-9xl text-white">SPORTS EVENTS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkbg px-16 py-8 lg:px-24">
          <a href="https://drive.google.com/file/d/14sbvcGiT8TP4o4Sq4FKIGQ15OGejvwAn" className="text-center block text-white bg-button rounded-lg py-4" target="_blank">Brochure Link</a>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
          <EventCard3
            imageUrl={cricket}
            heading="Cricket 🏏"
            text="The cricket tournament is eagerly anticipated in the sports calendar. Teams will engage in thrilling matches, showcasing their batting, bowling, and fielding talents. Fans will flock to stadiums or tune in to experience the excitement of spectacular sixes and crucial wickets."
            link="https://forms.gle/jr4pYvvXvyEgNWCQ8" link2="https://forms.gle/E1EaKURXcNn25jWj7"
          />
          <EventCard2
            imageUrl={football}
            heading="Football⚽️ 🥅"
            text="The football tournament is about to kick off, igniting fan passion across campuses. College teams will compete fiercely for the coveted trophy, with the stadiums buzzing as players dribble, pass, and score stunning goals."
            link="https://forms.gle/CNgH5164XcW9CuCXA"
          />
          <EventCard2
            imageUrl={volleyball}
            heading="Volleyball🏐"
            text="The upcoming volleyball tournament promises fierce competition and electrifying rallies. Teams from various colleges will take to the courts to display their skills and teamwork."
            link="https://forms.gle/gW5hXaTaVmgA3Bqj9"
          />
          <EventCard2
            imageUrl={tabletennis}
            heading="Table Tennis🏓"
            text="This table tennis tournament will be a whirlwind of energy, as players from different colleges face off. Fast-paced rallies and sharp reflexes will keep spectators captivated throughout the event."
            link="https://forms.gle/UHbqkgLHkFoQPAtp9"
          />
          <EventCard2
            imageUrl={badminton}
            heading="Badminton 🏸"
            text="The badminton tournament will resonate with the sound of shuttlecocks flying across the court. Athletes will demonstrate remarkable agility and precision through powerful smashes and graceful rallies."
            link="https://forms.gle/v7WjPHyA9PHQeaqx7"
          />
          <EventCard2
            imageUrl={rubikscube}
            heading="Rubik’s Mania 🧊"
            text="Rubik's Mania will sweep through the fest as participants from various colleges embrace the challenge of solving this vibrant puzzle. The event will foster creativity, problem-solving, and friendly competition among enthusiasts."
            link="https://forms.gle/7ajhzg27NrnZUB3d8"
          />
          <EventCard2
            imageUrl={chess}
            heading="Chess ♟️"
            text="The chess tournament will unfold in a captivating atmosphere as players engage in a battle of wits. Spectators will watch closely, anticipating each strategic move on the board."
            link="https://forms.gle/ipWZRKYsRBd8TGYe9"
          />
          <EventCard3
            imageUrl={kabaddi}
            heading="Kabaddi"
            text='The Kabaddi tournament promises to be an exciting showcase of strength and strategy. Teams from different colleges will clash on the field, creating thrilling moments as players attempt to tag opponents while chanting "Kabaddi, Kabaddi."'
            link="https://forms.gle/c6utZDD2JeS7ZYyTA" link2="https://forms.gle/2V9mXhLHYP1fYMkH8"
          />
          <EventCard2
            imageUrl={carrom}
            heading="Carrom 🪙"
            text="The carrom tournament at the fest is set to begin, highlighting players’ skills and strategies. Crowds will gather to cheer for their favorites, generating an electrifying atmosphere. With rising tension and excitement, it promises to be a highlight of the festivities."
            link="https://forms.gle/JT8udRyqZmLz95cn7"
          />
          <EventCard2
            imageUrl={athletics}
            heading="Athletics 🏃🏃🏃"
            text="Athletes are ready to sprint in the much-anticipated 100M race, with competitors from various colleges lining up. The crowd will eagerly watch as runners dash towards the finish line."
            link="https://forms.gle/b9tRLvW8sbjQU9YU7"
          />
          <EventCard2
            imageUrl={bgmi}
            heading="BGMI🔫"
            text="The BGMI tournament is about to start, attracting top gaming talent. Squads will drop into the virtual battleground, competing fiercely for victory. Spectators will follow the intense firefights and strategic maneuvers as teams vie for supremacy."
            link="https://forms.gle/A2TyVWvH13ZPVCq28"
          />
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
  } else if (state == State.Literary) {
    return (
      <>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={educational} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0"><h1 className="text-white text-center text-4xl lg:text-9xl font-bold">LITERARY EVENTS</h1></div>
          </div>
        </div>
        <div className="bg-darkbg px-16 py-8 lg:px-24">
          <a href="https://drive.google.com/file/d/1AJS9-UL0sbkGaNgEa9yTPlfL162G1FF7" className="text-center block text-white bg-button rounded-lg py-4" target="_blank">Brochure Link</a>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8">
            <EventCard2
              imageUrl={hridaya}
              heading="Hridaya (Bayan-e-jazbaat)"
              text="Are you a literary enthusiast? 🌟 Do you wish to share your deepest thoughts with the world? 🌍

Here's your golden opportunity! ✨

CEREBREXIA, the annual fest of IGIMS, Patna, proudly presents ‘HRIDAYA’, the literary fiesta. Let your literary brilliance shine and captivate the audience with your inspiring and intriguing ideas. Stand a chance to win exciting prizes! 🏆"
              link="https://docs.google.com/forms/d/e/1FAIpQLSf39lSQ7I2fUp2yNzpZOJX7T8tqdV9MV2gPlsFI0MOhpFaA1w/viewform?usp=sf_link"
            />
            <EventCard2
              imageUrl={generalquiz}
              heading="General Quiz"
              text="Test your general knowledge and win! 🤔
Join our General quiz  and compete with others to show off your vast sea of knowledge! 🏆
From history to science, we've got it all covered! 
Don't miss out on the fun and prizes! 🎁
Sign up now."
              link="https://forms.gle/VnqMyn1bgXGgfVCy8"
            />
            <EventCard2
              imageUrl={popculture}
              heading="Pop Culture Quiz"
              text="Get ready to level up your pop culture game! 🚀
Test your knowledge of movies, TV shows, music, and more! 🎬
From classic hits to latest trends, we've got all the questions! 🎤
Join us for the quiz like no other! 🎉
Sign up now and show off your fandom!
#PopCultureQuiz"
              link="https://forms.gle/V4WFidz5KuVaPnwA8"
            />
            <EventCard2
              imageUrl={tmkoc}
              heading="TMKOC"
              text="Hey TMKOC fans, let's play! 🤔
Test your knowledge of Gokuldham's favorite residents! 🏠
From Jethalal's jokes to Babita's sass, we've got questions! 😂
Join us for a quiz that's sure to make you laugh! 🎉
Sign up now and show off your TMKOC love! #TMKOCQuiz #TaarakMehtaKaOoltahChashmah"
              link="https://forms.gle/Ms46jrDkmjfNCz2B8"
            />
            <EventCard2
              imageUrl={spellbee}
              heading="Spell Bee Competition"
              text='The buzz is in the air !" Ever felt proud of your mastery on words ? Allow us to give you the stage to showcase your linguistic skills and be crowned as the spelling bee 🐝 champion.'
              link="https://forms.gle/kXDxR1YRtCLjsQT88"
            />
            <EventCard2
              imageUrl={agora}
              heading="Agora - The Debate Competition"
              text="The stage is set for a battle of wits, a clash of ideas and a showcase of eloquence. We let you convince everyone with your perspective. We invite you in a solo debate competition, to take one on one with your opponent."
              link="https://forms.gle/NrUi3K7kb9tfLbc4A"
            />
          </div>
        </div>
        <div className="flex bg-darkbg py-8">
          <div className="inline-block relative w-full">
            <img src={educationalimage} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div class="h-full flex justify-center items-center">
                <h1 className="text-xl lg:text-5xl text-white">CEREBREXIA</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (state == State.Art) {
    return (
      <>
        <div className="flex bg-darkbg">
          <div className="inline-block relative w-full">
            <img src={educational} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0"><h1 className="text-white text-center text-3xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[15rem] font-bold">ART EVENTS</h1></div>
          </div>
        </div>
        <div className="bg-darkbg px-16 py-8 lg:px-24">
          <a href="https://drive.google.com/file/d/1x7Ki4HUxdyh6Cqk_d_WBR2XMJozp9Xcg/view?usp=drivesdk" className="text-center block text-white bg-button rounded-lg py-4" target="_blank">Brochure Link</a>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8 bg-darkbg">
            <EventCard2
              imageUrl={chitraganga}
              heading="CHITRAGANGA - The Painting Competition"
              text="Hey artists 🖌️ !! lets grab the opportunity once again to brushstrokes our Brilliance. 

Lets showcase our spectrum of expressions and vibrant variations through our hues of imagination🌈.Lets paint the dream and play a game of palette perfection🎨 where ones compete for visionary vibes and matches ones brush and soul.❤️🪩✨"
              link="https://forms.gle/sbxRBYixBJEwqrsZ8"
            />
            <EventCard2
              imageUrl={aripan}
              heading="ARIPAN - The Rangoli Competition"
              text="As we gather to create💫 and compete, our rangoli designs become a testament to skill🪷, creativity, and passion. Each intricate pattern and vibrant color🌸 is a reflection of our dedication and artistry.

May our creations inspire and awe👏🏻, as we strive to outdo one another in this celebration of beauty🌺 and talent. Let the best design win, but may the true victory be in the joy of creation🙌🏻, the pride of presentation, and the spirit of friendly competition🌼 that brings us together ♥️"
              link="https://forms.gle/r8TrqiS9FK1AhpjJ9"
            />
            <EventCard2
              imageUrl={cybercreation}
              heading="CYBER CREATION - The Digital Art Competition"
              text="'Digital technology as a part of creativity.'🎨😃It's time to show your creativity, 🪂 technical skill and a deep understanding of the theme.

GET ready to express 🎴 your🫵🏻 'unique vision'.Draw🍁 inspiration from your personal experience, emotion or create a message🪁 that your artwork conveys."
              link="https://forms.gle/tMNLtQG97ste4sE97"
            />
            <EventCard2
              imageUrl={mehendidelight}
              heading="Mehendi Delights - The Mehendi Competition"
              text="Capturing the Beauty of Traditions'🎊Get ready to ink🌿 happiness on 👐🏽 hands. Embrace the artistry ❦ and cute mehndi covered hands😍. 

Don't miss your chance to enjoy Heena-licious vibes 🌼🍃 and showcase your talent through radiating mehendi elegance !!🍁🍂

Warning:- May Cause Heena Obsession 😅😎"
              link="https://forms.gle/4uirEAYt2GUXhuPv9"
            />
            <EventCard2
              imageUrl={magicmask}
              heading="Magic Mask - The Face Painting Competition"
              text="'Turning Faces🎭 into Mystical Magic masks' 🪄We're excited to invite you to an enchanting face painting 🖌️ event where your imagination can take shape.

💎Don't miss out on this colourful experience 🎆Your participation will be a highlight of our event.🥂🥂"
              link="https://forms.gle/z4kMbGQppewQDSrw5"
            />
            <EventCard2
              imageUrl={recycledwonders}
              heading="Recycled Wonders - The Waste Art Competition"
              text="♻️Repurpose,Renew ,Recycle!! ✨Take your chance, create and make a difference!Whether you're an artist,a DIY enthusiast or simply passionate about sustainability, this your chance to shine.

💫💫We welcome you to celebrate the magic 🪄of recycling . Let's transform the ordinary into the extraordinary.Give waste a secondchance😉."
              link="https://forms.gle/gMEzdhYzhmZgHhEg7"
            />
            <EventCard2
              imageUrl={clinicalcartoons}
              heading="CLINICAL CARTOONS - Medical Subject Caricature Event"
              text="Medical ⚕️ CaricatureCalling all artists 👨🎨 and medical professionals🏥with a flair for humor! Dive into the world of creativity🤩with our Medical Caricature Competition, where wit meets 🤝 artistry.

This is your chance to transform the everyday scenarios of the medical field into fun 😄 insightful ✨, and amusing caricatures."
              link="https://forms.gle/6PDcR6LGkH1eX3nBA"
            />
            <EventCard2
              imageUrl={tattootitans}
              heading="TATTOO TITANS - Tattoo Art Event"
              text="' Play with symbols and imagery'🌟Ready to Showcase 👁️🗨️ your best and 💢favourite work in one setting ?🔱 It's time to symbolise your interest🕸️, conviction, cultural background🔰 even cherished relationship or pledges of love."
              link="https://forms.gle/GAuvdw8ejVEA7gC59"
            />
            <EventCard2
              imageUrl={doodledreams}
              heading="DOODLE DREAMS - Doodle Art Event"
              text="Get Ready to Doodle Your Heart Out! 🎨✏️🚀Unleash your inner artist and dive into a world where imagination knows no bounds! 
🌈 Draw, color, and create your way to the top as you showcase your unique flair and creativity. 🌟 It’s all about fun, expression, and celebrating the joy of art. 

🎉Join us for an electrifying doodle art experience and let your creativity run wild with a colourful celebration of artistic talent💫."
              link="https://forms.gle/V8a5FCUZazwmann8A"
            />
            <EventCard2
              imageUrl={sculpturespectacle}
              heading="SCULPTURE SPECTACLE - Clay Art Competition"
              text="Unleash your creativity✨ and join us 🤝for an exciting Clay Art 🖼️ Competition that promises to be a celebration 🎉 of imagination and skill! Whether you're a seasoned artist or a passionate amateur, this is your chance to mold, shape, and transform clay into stunning 🤩 works of art."
              link="https://forms.gle/LrKWhfEkmn6Br3AS8"
            />
            <EventCard2
              imageUrl={teesplash}
              heading="TEE SPLASH - T-Shirt Painting Competition"
              text="Give your 🫵🏻hands a chance to resonate with flowing colours 🎨on “ canvas of creativity “ and paint 🖌️your passion for life.

Lets gather along to express on the Tee (👕)and wear our imagination with the “threads of Art”.Join the astonishing event with all your heart and design your dreams to create the 💫“FABRIC OF EXPRESSION “❤️"
              link="https://forms.gle/iB1LoC4zxAKWoH17A"
            />
          </div>
        </div>
        <div className="flex bg-darkbg py-8">
          <div className="inline-block relative w-full">
            <img src={informalimage} className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div class="h-full flex justify-center items-center">
                <h1 className="text-xl lg:text-5xl text-white">CEREBREXIA</h1>
              </div>
            </div>
          </div>
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
        initial={{opacity: 0,  y: 50}}
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
            initial={{opacity: 0,  y: 50}}
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
          <div className="grid py-4 grid-cols-2 gap-4 px-4 xl:grid-cols-4 xl:px-40">
            <div className="bg-placeholder"><img src={gallery29} /></div> 
            <div className="bg-placeholder"><img src={gallery3} /></div> 
            <div className="bg-placeholder"><img src={gallery4} /></div> 
            <div className="bg-placeholder"><img src={gallery5} /></div> 
            <div className="bg-placeholder"><img src={gallery6} /></div> 
            <div className="bg-placeholder"><img src={gallery7} /></div> 
            <div className="bg-placeholder"><img src={gallery8} /></div> 
            <div className="bg-placeholder"><img src={gallery9} /></div> 
            <div className="bg-placeholder"><img src={gallery10} /></div> 
            <div className="bg-placeholder"><img src={gallery11} /></div> 
            <div className="bg-placeholder"><img src={gallery12} /></div> 
            <div className="bg-placeholder"><img src={gallery13} /></div> 
            <div className="bg-placeholder"><img src={gallery14} /></div> 
            <div className="bg-placeholder"><img src={gallery15} /></div> 
            <div className="bg-placeholder"><img src={gallery16} /></div> 
            <div className="bg-placeholder"><img src={gallery17} /></div> 
            <div className="bg-placeholder"><img src={gallery18} /></div> 
            <div className="bg-placeholder"><img src={gallery19} /></div> 
            <div className="bg-placeholder"><img src={gallery20} /></div> 
            <div className="bg-placeholder"><img src={gallery21} /></div> 
            <div className="bg-placeholder"><img src={gallery22} /></div> 
            <div className="bg-placeholder"><img src={gallery23} /></div> 
            <div className="bg-placeholder"><img src={gallery24} /></div> 
            <div className="bg-placeholder"><img src={gallery25} /></div> 
            <div className="bg-placeholder"><img src={gallery26} /></div> 
            <div className="bg-placeholder"><img src={gallery27} /></div> 
            <div className="bg-placeholder"><img src={gallery28} /></div> 
          </div>
          <div class="flex flex-col items-center gap-4">
            <button className="w-3/4 bg-white rounded-full px-4 py-4 lg:py-8 lg:px-8 text-xs xl:text-3xl font-bold flex items-center justify-between">Join The Fun <Arrow stroke="#ffffff" bg="#ffffff" /></button>
            <button className="w-3/4 border-4 border-white rounded-full px-4 py-4 lg:py-8 lg:px-8 text-xs xl:text-3xl text-white font-bold flex items-center justify-between">Take A Look At The Events <Arrow stroke="#000000" bg="#000000" /></button>
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
              <div className="h-full flex flex-col justify-between pt-4">
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
                <h1 className="text-white text-center text-3xl lg:text-8xl font-bold py-4">TERMS AND CONDITIONS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-darkbg text-white px-4 lg:px-24">
<h1 className="text-3xl font-bold">01 / Introduction</h1>

<h2 className="text-xl font-bold">Welcome to CEREBREXIA'24!</h2>

<p>These terms and conditions govern the use of CEREBREXIA's website, found at https://cerebrexiaigims.com/index.html. All communications will be conducted via our Instagram page, which you must follow for updates. Our Instagram page can be found here: https://www.instagram.com/igimsfest?igsh=dGp6ejN4bmVmZmN6.</p>

<p>CEREBREXIA IGIMS Patna is not responsible for any missed communications posted on this page.</p>

<p>By accepting the terms and conditions on our website, you confirm that you are following our Instagram page.</p>

<p>In these terms, "Client," "You," and "Your" refer to the user accessing this website. These terms also apply to all agreements, including the "Terms and Conditions," "Privacy Statement," "Disclaimer Notice," and related documents. "CEREBREXIA, IGIMS Patna," "Ourselves," "We," "Ours," and "Us" refer to our organization. "Party," "Parties," or "Us" includes both the user and us. All terms and phrases pertain to the provision of support to the client in the most effective manner to meet their needs regarding our services. The use of singular, plural, he/she, or they is interchangeable and refers to the same entities.</p>

<p>By accessing this website, you agree to these terms and conditions. If you do not agree to these terms, please do not use CEREBREXIA'24.</p>

<h1 className="text-3xl font-bold">02 / Cookies</h1>

<p>Our website uses cookies to enhance functionality and improve user experience. By browsing our website, you consent to the use of cookies in line with CEREBREXIA, IGIMS Patna's privacy policy.</p>

<p>Cookies are commonly used by interactive websites to gather user information on each visit. They help us improve certain areas of the website to make navigation easier. Additionally, cookies may be employed by some of our affiliate and advertising partners.</p>

<h1 className="text-3xl font-bold">03 / Privacy Policy</h1>

<p>All content on CEREBREXIA, IGIMS Patna's website is owned exclusively by CEREBREXIA, IGIMS Patna and/or its licensors unless stated otherwise. All intellectual property rights are reserved. You may access this content for personal use only, subject to the terms outlined here.</p>

<p>You must not:</p>

<p>Replicate CEREBREXIA, IGIMS Patna content</p>
<p>Sell, rent, or sublicense CEREBREXIA, IGIMS Patna content</p>
<p>Copy or reproduce CEREBREXIA, IGIMS Patna materials</p>
<p>Republish articles from CEREBREXIA, IGIMS Patna</p>
<p>This Agreement is effective as of the date stated. Some pages of our website allow users to post messages and exchange information or opinions. Comments are not filtered, edited, published, or reviewed by CEREBREXIA, IGIMS Patna before appearing on the site. The views expressed in comments are those of the individual commenter and do not reflect the views of CEREBREXIA, IGIMS Patna, its affiliates, or its agents. CEREBREXIA, IGIMS Patna is not liable for any comments or for any resulting liabilities, damages, or expenses to the extent permitted by law.</p>
<br />
<p>CEREBREXIA, IGIMS Patna reserves the right to review and remove any comments that are objectionable, offensive, or violate our terms and conditions. By posting comments, you warrant that:</p>
<br />
<p>The comments do not infringe on any intellectual property rights, including copyrights, patents, or trademarks of third parties</p>
<p>You have the authority to post the comments and possess all necessary permissions and licenses</p>
<p>The comments do not invade privacy, or contain slanderous, inflammatory, or libelous content</p>
<p>The comments will not be used for advertising, solicitation, or promotion of any trade, custom, company, or illegal activity</p>
<p>By submitting comments, you grant CEREBREXIA, IGIMS Patna a non-exclusive right to use, reproduce, modify, and allow others to use your comments in any format or media.</p>
<br />
<h1 className="text-3xl font-bold">04 / Hyperlinking to Our Content</h1>
<br />
<p>The following organizations may link to our website without prior written consent:</p>
<br />
<p>Government agencies</p>
<p>Search engines</p>
<p>News organizations</p>
<p>Distributors of online directories, in the same manner they link to other businesses featured in their directories</p>
<p>Except for non-profit organizations, charity shopping centers, and charity fundraising organizations, which are not permitted to link to our site</p>
<p>These groups may link to our homepage, publications, or other content, provided the link:</p>
<br />
<p>Is not misleading</p>
<p>Does not suggest sponsorship, endorsement, or approval of the linking party and its products/services</p>
<p>Does not imply any affiliation with us</p>
<p>Comes from an organization with a good reputation</p>
<p>Is used in the context of general resource information</p>
<p>Requests for links from the following types of organizations may be considered and approved:</p>
<br />
<p>Information sources frequently used by consumers or businesses</p>
<p>Web-based communities</p>
<p>Associations representing charities</p>
<p>Online directory distributors</p>
<p>Internet portals</p>
<p>Accounting, law, and consulting firms</p>
<p>Commercial associations and educational institutions</p>
<p>Link requests from these organizations will be approved if:</p>

<p>The link does not negatively impact our reputation or that of our accredited firms</p>
<p>The organization has no disciplinary issues with us</p>
<p>The benefit of the link’s visibility outweighs the impact of our absence</p>
<p>The link is placed in a general resource information context</p>
<p>The link to our homepage is accurate and not misleading</p>
<p>The link does not imply sponsorship, endorsement, or approval</p>
<p>The link aligns with the theme of the linking party’s website</p>
<p>If you represent one of the organizations listed above and wish to link to our website, please email CEREBREXIA, IGIMS Patna.</p>

<p>Approved organizations may link to our website using:</p>

<p>Our company name</p>
<p>The URL being linked to</p>
<p>Relevant terminology that fits the context and style of the linking party’s site</p>
<p>Without a trademark license agreement, the use of the CEREBREXIA, IGIMS Patna logo or any artwork for linking purposes is not permitted.</p>
<br />
<h1 className="text-3xl font-bold">05/ Frames</h1>
<p>You may not include anything into our Web Pages that changes the visual presentation or appearance of our Website inside frames without our express prior written consent.</p>
<br />
<h1 className="text-3xl font-bold">06/ Content Liability</h1>
<p>Anything that appears on your website is not our responsibility. You promise to defend us from any allegations made against us on your website. No link(s) that could be construed as defamatory, obscene, or illegal should be included on any website. Neither should any link(s) that violate third-party rights or that support their infringement or other violation.</p>
<br />
<h1 className="text-3xl font-bold">07/ Reservation & Rights</h1>
<p>We have the right to ask you to take down any link to our website, or all links.</p>
<p>You consent to our right to request the immediate removal of any connections to our website. Furthermore, we reserve the right to update these terms and conditions as well as its linking policy at any time. You agree to be governed by and comply with these linking terms and conditions if you link to our website on a regular basis.</p>
<br />
<h1 className="text-3xl font-bold">08/ Disclaimer</h1>
<p>We disclaim any and all representations, warranties, and conditions with regard to our website and the use of our website to the fullest extent authorized by law. This disclaimer in no way:</p>
<p>Limit or exclude both our and your responsibility for wrongful harm resulting; Limit or exclude both our and your responsibility for wrongful harm resulting;</p>
<p>The restrictions and prohibitions of liability set forth in this Section and elsewhere in this disclaimer: (a) are subject to the previous sentence; and (b) govern any liabilities emerging under the disclaimer, including liabilities originating in contract, in negligence, or in any other tort.</p>
<br />
<h1 className="text-3xl font-bold">9/ Refund Policy</h1>
<br />
<p>Refunds will not be issued for events, competitions, workshops, merchandise, or accommodation. Candidates who have paid for these items are solely responsible for attending the events, competitions, and workshops, as well as collecting any purchased merchandise.</p>


<h1 className="text-3xl font-bold">Code of conduct</h1>
<br />
<br />
<div className="text-xl font-bold">
<p>No Substance Abuse: </p>
<p>Strict no liquor policy.The use of drugs or alcohol is strictly prohibited during the event. Violators will be immediately removed from the event.</p>
<p>There will be police officials in civil dress to ensure there is no drinking and ruckus in the event.</p></div>
<br />
<p>Respect for Others: All participants, organizers, and attendees must treat each other with respect, regardless of background, culture, gender, or other individual differences.</p>
<p>Ethical Behavior: Participants are expected to uphold ethical standards in all competitions and academic events. Cheating, plagiarism, and other forms of unethical behavior are strictly prohibited.</p>
<p>Safety First: Ensuring personal and others' safety is paramount during all events. Any actions that could cause harm or damage are strictly forbidden.</p>
<p>No Discrimination: Discrimination based on race, ethnicity, gender, religion, sexual orientation, or any other factors is prohibited. Violations of this policy will result in disqualification.</p>
<br />
<p>Respect for Property: All participants, organizers, and attendees must respect college property and that of others. Any damage will lead to immediate disqualification, and the responsible participant will be held liable for repairs.</p>
<p>Fair Play: Competitions must be conducted fairly. Any attempts to manipulate or cheat will not be tolerated. Participants must adhere to the rules and regulations of each competition.</p>
<p>No Harassment: Harassment of any kind—physical, verbal, or sexual—is strictly prohibited. Offenders will be removed from the event.</p>
<p>Compliance with the Law: Participants must adhere to all local laws and regulations. Any illegal activities will result in immediate removal from the event.</p>
<p>By participating in CEREBREXIA’24 all involved agree to follow this Code of Conduct. The college reserves the right to enforce compliance, which may include disqualification and removal from the premises.</p>

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
        <Page4 setState={setState} />
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
        <Header setState={setState} />
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
