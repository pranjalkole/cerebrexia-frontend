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
import sportsimage from "/images/Rectangle 30-1.png"
import galleryimage from "/images/actionvance-t7EL2iG3jMc-unsplash 1.png"
import carousel1 from "/images/Rectangle 32.png"
import Typewriter from "typewriter-effect";
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
    <svg height="32px" viewBox="0 0 32 32" width="32px" class="fill-white">
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    </svg>
  )
}


function Page1({ setState }) {
  const clickHamburger = () => {
    document.querySelector(".ham").className = "ham absolute flex flex-col h-screen z-10 left-0 bg-darkbg w-screen justify-around"
  };
  const clickCross = () => {
    document.querySelector(".ham").className = "ham hidden";
  };
  return (
    <div className="min-h-screen relative flex flex-col bg-hero text-white px-4 md:px-24">
      <div className="hidden md:flex z-10 justify-between pt-4">
        <button onClick={() => setState(State.Home)}>Home</button>
        <button onClick={() => setState(State.Registration)}>Registration</button>
        <button onClick={() => setState(State.Events)}>Events</button>
        <button onClick={() => setState(State.Sponsors)}>Sponsors</button>
        <button onClick={() => setState(State.Gallery)}>Gallery</button>
        <button onClick={() => setState(State.TnC)}>Terms and Conditions</button>
      </div>
      <div className="ham hidden">
        <div className="flex justify-between">
          <h1>CERBREXIA</h1>
          <p onClick={clickCross}>cross</p>
        </div>
        <button onClick={() => setState(State.Home)}>Home</button>
        <button onClick={() => setState(State.Registration)}>Registration</button>
        <button onClick={() => setState(State.Events)}>Events</button>
        <button onClick={() => setState(State.Sponsors)}>Sponsors</button>
        <button onClick={() => setState(State.Gallery)}>Gallery</button>
        <button onClick={() => setState(State.TnC)}>Terms and Conditions</button>
      </div>
      <button class="self-end md:hidden" onClick={clickHamburger}>
        <Hamburger />
      </button>
      <h1 className="text-center text-8xl md:text-[20rem] font-league"><Typewriter
  options={{
    strings: ['CEREBREXIA'],
    autoStart: true,
    loop: true,
  }}
/></h1>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
        <button class="rounded-full border border-white px-8 py-1 text-xl">Register Now</button>
        <button class="rounded-full border border-white px-8 py-1 text-xl">View Events</button>
      </div>
      <div class="self-center absolute bottom-0 h-full flex">
        <div class="inline-flex justify-center items-end">
          <img src={logo} class="h-1/2" />
        </div>
      </div>
    </div>
  )
}

function BigBox( {number, string }) {
  return (
    <div className="border rounded border-white aspect-[4/3] rounded-lg text-white text-center flex flex-col justify-center basis-0 grow">
      <h1 class="font-bold">{number}</h1>
      <h1>{string}</h1>
    </div>
  )
}

function Page2() {
  return (
    <div className="bg-cyan-950 px-40 text-white py-8 bg-lightbg">
      <h1 className="font-bold text-4xl">The Madness Unfolds In :</h1>
      <div className="flex justify-around text-white items-center gap-4 text-5xl">
        <BigBox number="3" string="Months" />
        <h1 class="text-7xl">:</h1>
        <BigBox number="47" string="Days" />
        <h1 class="text-7xl">:</h1>
        <BigBox number="15" string="Hours" />
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div class="relative text-white">
      <video autoPlay loop class="w-full h-full object-cover z-0 absolute">
        <source src={dj} />
      </video>
      <div class="relative z-10 text-center py-8 px-24">
        <h1 class="text-4xl font-bold">What Is CEREBREXIA?</h1>
        <p class="text-xl">IGIMS brings you the first of its kind socio-cultural festival amongst medical fraternity on the Land of Buddha, the place which not only gave INDIA but also the world the brightest of the brains, where the igniting minds will meet. To experience the everlasting thrill of unlimited music, dance, drama, entertainment amalgamated with the essence of knowledge and culture. A platform which would not only englighten, but would also give an excellent opportunity to interact with best brains of the country from senior doctors to renowned dignitaries and tycoons.</p>
      </div>
    </div>
  );
}

function Page4() {
  return (
    <div class="relative text-white">
      <video autoPlay loop class="w-full h-full object-cover z-0 absolute">
        <source src={video2} />
      </video>
      <div class="relative z-10 py-8 px-24">
        <h1 class="text-4xl font-bold">The Theme of 2024</h1>
        <div class="flex">
          <img src={two} />
          <div>
            <p class="text-xl">IGIMS brings you the first of its kind socio-cultural festival amongst medical fraternity on the Land of Buddha, the place which not only gave INDIA but also the world the brightest of the brains, where the igniting minds will meet. To experience the everlasting thrill of unlimited music, dance, drama, entertainment amalgamated with the essence of knowledge and culture. A platform which would not only englighten, but would also give an excellent opportunity to interact with best brains of the country from senior doctors to renowned dignitaries and tycoons.</p>
            <button class="bg-blue-500 w-full py-1 rounded-lg">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page5() {
  return (
    <div class="relative text-white">
      <video autoPlay loop class="w-full h-full object-cover z-0 absolute">
        <source src={video1} />
      </video>
      <div class="relative z-10 py-8 px-24">
        <h1 class="text-4xl font-bold">The Theme of 2024</h1>
        <div class="flex">
          <div>
            <p class="text-xl">IGIMS brings you the first of its kind socio-cultural festival amongst medical fraternity on the Land of Buddha, the place which not only gave INDIA but also the world the brightest of the brains, where the igniting minds will meet. To experience the everlasting thrill of unlimited music, dance, drama, entertainment amalgamated with the essence of knowledge and culture. A platform which would not only englighten, but would also give an excellent opportunity to interact with best brains of the country from senior doctors to renowned dignitaries and tycoons.</p>
            <button class="bg-blue-500 w-full py-1 rounded-lg">Visit The Website</button>
          </div>
          <img src={three} />
        </div>
      </div>
    </div>
  );
}


function EventCard({ imageUrl, heading, text }) {
  return (
    <div class="rounded-xl bg-textbox">
      <img src={imageUrl} class="w-full rounded-xl" />
      <div class="m-4">
        <h1 class="text-xl font-bold">{heading}</h1>
        <p>{text}</p>
        <button class="bg-button w-full py-1 rounded-lg">Register Now</button>
      </div>
    </div>
  );
}

function Page6() {
  return (
    <div class="bg-lightbg text-white">
      <h1 class="text-8xl text-center">Events</h1>
      <hr class="text-white" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
        <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
        <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
        <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
        <EventCard imageUrl={pexels} heading="Cultural Competitions" text="Cultural events and competitions to showcase your talents and present yourself" />
      </div>
    </div>
  );
}

function Footer({ setState }) {
  return (
    <div class="bg-darkbg text-white py-12 flex justify-center">
      <div class="inline-flex flex-col">
        <div class="flex gap-8">
          <div class="border-r border-white">
            <h2 class="border-b border-white text-2xl font-bold">CEREBREXIA</h2>
            <div>
              <h3 class="font-bold">Contact Us</h3>
              <p>IGIMS, Patna, Bihar</p>
              <p>Youremail@gmail.com</p>
              <p>+1 800 854-36-80</p>
            </div>
          </div>
          <iframe
            width="450"
            height="250"
            frameborder="0" style={{border: 0}}
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCTvVfLk-CsgOkH-C6Wwz_rR7FwbnaWfSY&center=-33.8569,151.2152"
            allowfullscreen>
          </iframe>
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl font-bold">Having a Problem?</h1>
            <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2" />
            <textarea placeholder="Write Your Query" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2" />
            <button class="bg-button w-full py-1 rounded-lg">Submit</button>
          </div>
        </div>
        <div class="flex justify-between font-bold">
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
  return (
    <div class="flex justify-between px-4 bg-hero text-white">
      <div>
        <h1>CEREBREXIA</h1>
      </div>
      <div class="flex gap-8">
        <button onClick={() => setState(State.Home)}>Home</button>
        <button onClick={() => setState(State.Registration)}>Registration</button>
        <button onClick={() => setState(State.Events)}>Events</button>
        <button onClick={() => setState(State.Sponsors)}>Sponsors</button>
        <button onClick={() => setState(State.Gallery)}>Gallery</button>
        <button onClick={() => setState(State.TnC)}>Terms and Conditions</button>
      </div>
    </div>
  );
}

function Event({ name, desc, button, onClick }) {
  return (
    <div class="flex gap-4 items-between w-full">
      <div class="basis-1/4">
        <img src={eventimg} class="" />
      </div>
      <div class="basis-3/4 text-white">
        <h1 class="text-4xl">{name}</h1>
        <p>{desc}</p>
        <button class="bg-button w-full py-1 rounded-lg" onClick={onClick}>{button}</button>
      </div>
    </div>
  );
}

function SponsorCard({ head, sub }) {
  return (
    <div class="basis-1/3 flex border border-white rounded-xl bg-button p-4 items-center justify-between">
      <div class="flex flex-col">
        <h1>{head}</h1>
        <p>{sub}</p>
      </div>
      <div class="bg-white rounded-full w-24 h-24">
      </div>
    </div>
  );
}

function Body({ state, setState }) {
  const [registrationState, setRegistrationState] = useState(0);
  if (state == State.Registration) {
    return (
      <div class="min-h-screen flex border-b border-white">
        <img src={registerNow} class="basis-0 grow w-0" />
        <div class="basis-0 grow w-0 border-l border-white bg-darkbg">
          <div class="px-16 py-8 text-white flex flex-col gap-4">
          {registrationState == 0
            ?
            <>
              <h1>Be a Part of the Wonderful Experience</h1>
              <p>You can reach us anytime via <a>Your@gmail.com</a></p>
              <div>
                <p>Name</p>
                <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
                <p>Email</p>
                <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
                <p>Phone number</p>
                <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
                <p>College Name</p>
                <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <button class="bg-button w-full py-1 rounded-lg" onClick={() => setRegistrationState(1)}>Get started</button>
            </>
            :
            <>
              <div>
              <p>Number of Participants</p>
              <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Name of the Participant 1</p>
              <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Email ID</p>
              <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Name of the Participant 1</p>
              <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Email ID</p>
              <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
              <p>Course UG/PG</p>
              <input placeholder="Email ID" class="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <button class="bg-button w-full py-1 rounded-lg" onClick={() => setRegistrationState(0)}>Proceed to Payment</button>
            </>
          }
          </div>
        </div>
      </div>
    );
  } else if (state == State.Events) {
    return (
      <>
        <div class="py-24 flex items-center bg-events">
          <h1 class="w-1/2 text-8xl text-white">Showcase Your TALENTS In The EVENTS Held In CEREBREXIA</h1>
        </div>
        <hr class="text-white" />
        <div class="flex gap-2 bg-lightbg py-12 px-4">
          <div class="bg-white basis-3/4 flex relative rounded-lg">
            <div class="basis-3/4 bg-white px-4 flex flex-col justify-center items-center gap-4">
              <h1 class="text-darkbg text-4xl font-bold">Join Us On This Fun Fiesta</h1>
              <button class="w-full bg-darkbg text-white py-2 rounded-lg">Register Now</button>
            </div>
            <div class="w-1/4 absolute bottom-0 right-0">
              <img src={logo} class="overflow-visible" />
            </div>
          </div>
          <div class="basis-1/4 border border-white rounded-lg">
            <p class="text-white px-2 py-4 font-bold">Unleash your Potential: From cultural showcases to sports competitions and educational events, Cerebrexia offers a platform to develop creativity, athleticism, and intellect.</p>
          </div>
        </div>
        <hr class="text-white" />
        <div class="bg-darkbg">
          <h1 class="text-6xl text-white font-bold">EVENTS</h1>
          <div class="flex flex-col gap-4">
            <Event name="Proshows" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" />
            <hr class="text-white" />
            <Event name="Cultural Competitions" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Checkout The Events" onClick={() => setState(State.Cultural)} />
            <hr class="text-white" />
            <Event name="Sports" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Sports)} />
            <hr class="text-white" />
            <Event name="Educational" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Educational)} />
            <hr class="text-white" />
            <Event name="Informal" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Informal)} />
            <hr class="text-white" />
          </div>
        </div>
      </>
    );
  } else if (state == State.Cultural) {
    return (
      <>
        <div class="min-h-screen bg-cultural">
          <h1 class="text-9xl">CULTURAL EVENTS</h1>
        </div>
        <div class="bg-darkbg">
          <h2 class="text-white">Cerebrexia organizes varous cultural events promoting the cultural integrity</h2>
          <div class="grid grid-cols-4 gap-4">
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
        <div class="bg-culturalimage">
          <h1>CEREBREXIA</h1>
        </div>
      </>
    );
  } else if (state == State.Sports) {
    return (
      <>
        <div class="min-h-screen bg-sports">
          <h1 class="text-9xl">SPORTS EVENTS</h1>
        </div>
        <div class="bg-darkbg">
          <h2>Cerebrexia organizes varous cultural events promoting the cultural integrity</h2>
          <div class="grid grid-cols-4 gap-4">
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
        <div class="flex">
          <div class="inline-block relative">
            <img src={sportsimage} />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"><h1 class="text-white text-3xl">CEREBREXIA</h1></div>
          </div>
        </div>
      </>
    );
  } else if (state == State.Educational) {
    return (
      <>
        <div class="min-h-screen bg-educational">
          <h1 class="text-9xl">CULTURAL EVENTS</h1>
        </div>
        <div>
          <h2>Cerebrexia organizes varous cultural events promoting the cultural integrity</h2>
          <div class="grid grid-cols-4 gap-4">
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
        <div class="bg-educationalimage">
          <h1>CEREBREXIA</h1>
        </div>
      </>
    );
  } else if (state == State.Informal) {
    return (
      <>
        <div class="min-h-screen bg-educational">
          <h1 class="text-9xl">CULTURAL EVENTS</h1>
        </div>
        <div>
          <h2>Cerebrexia organizes varous cultural events promoting the cultural integrity</h2>
          <div class="grid grid-cols-4 gap-4">
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
        <div class="bg-informalimage">
          <h1>CEREBREXIA</h1>
        </div>
      </>
    );
  } else if (state == State.Gallery) {
    return (
      <>
        <div class="flex bg-darkbg">
          <div class="inline-block relative">
            <img src={galleryimage} />
            <div class="absolute top-0 left-0 right-0 bottom-0"><h1 class="text-white text-center text-[15rem] font-bold">GALLERY</h1></div>
          </div>
        </div>
        <hr class="text-white" />
        <div class="bg-darkbg">
          <h1 class="font-league text-[20rem] text-center text-white">OUR LEGACY</h1>
          <img src={carousel1} class="w-full px-4" />
          <div class="flex justify-center gap-2">
            <div class="w-24 aspect-square bg-placeholder"></div> 
            <div class="w-24 aspect-square bg-placeholder"></div> 
            <div class="w-24 aspect-square bg-placeholder"></div> 
            <div class="w-24 aspect-square bg-placeholder"></div> 
            <div class="w-24 aspect-square bg-placeholder"></div> 
          </div>
          <div class="grid grid-cols-4 gap-4 p-4">
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
          </div>
        </div>
      </>
    );
  } else if (state == State.Sponsors) {
    return (
      <>
        <div class="flex bg-darkbg">
          <div class="inline-block relative">
            <img src={galleryimage} />
            <div class="absolute top-0 left-0 right-0 bottom-0">
              <div class="h-full flex flex-col justify-between">
                <h1 class="text-white text-center text-[12rem] font-bold">SPONSORS</h1>
                <div class="flex justify-between gap-4 px-4">
                  <SponsorCard head="Title Sponsor" sub="Name of the Brand" />
                  <SponsorCard head="Title Sponsor" sub="Name of the Brand" />
                  <SponsorCard head="Title Sponsor" sub="Name of the Brand" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="text-white" />
        <div class="bg-darkbg">
          <h1 class="font-league text-[20rem] text-center text-white">OUR LEGACY</h1>
          <img src={carousel1} class="w-full px-4" />
          <div class="flex justify-center gap-2">
            <div class="w-24 aspect-square bg-placeholder"></div> 
            <div class="w-24 aspect-square bg-placeholder"></div> 
            <div class="w-24 aspect-square bg-placeholder"></div> 
            <div class="w-24 aspect-square bg-placeholder"></div> 
            <div class="w-24 aspect-square bg-placeholder"></div> 
          </div>
          <div class="grid grid-cols-4 gap-4 p-4">
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
            <div class="aspect-square bg-placeholder"></div> 
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
  const [state, setState] = useState(State.Sponsors);
  if (state == State.Home) {
    return (
      <div class="font-montserrat">
        <Page1 setState={setState} />
        <hr class="text-white" />
        <Page2 />
        <hr class="text-white" />
        <Page3 />
        <hr class="text-white" />
        <Page4 />
        <hr class="text-white" />
        <Page5 />
        <hr class="text-white" />
        <Page6 />
        <hr class="text-white" />
        <Footer setState={setState} />
      </div>
    );
  } else {
    return (
      <div class="font-montserrat">
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
