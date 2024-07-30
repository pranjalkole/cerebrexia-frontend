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
    document.querySelector(".ham").className = "ham absolute flex flex-col h-screen z-10 left-0 bg-cyan-950 w-screen justify-around"
  };
  const clickCross = () => {
    document.querySelector(".ham").className = "ham hidden";
  };
  return (
    <div className="min-h-screen relative flex flex-col bg-hero text-white px-4 md:px-24">
      <div className="hidden md:flex justify-between pt-4">
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
    <div className="bg-cyan-950 px-40 text-white py-8">
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
    <div class="rounded bg-black">
      <img src={imageUrl} class="w-full rounded" />
      <div class="m-4">
        <h1 class="text-xl font-bold">{heading}</h1>
        <p>{text}</p>
        <button class="bg-blue-500 w-full py-1 rounded-lg">Register Now</button>
      </div>
    </div>
  );
}

function Page6() {
  return (
    <div class="bg-cyan-950 text-white">
      <h1 class="text-8xl text-center">Events</h1>
      <hr />
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
    <div class="bg-cyan-900 text-white py-12 flex justify-center">
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
            <input placeholder="Email ID" class="bg-black rounded p-2" />
            <textarea placeholder="Write Your Query" class="bg-black rounded p-2" />
            <button class="bg-blue-500 w-full py-1 rounded-lg">Submit</button>
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
        <button class="bg-blue-500 w-full py-1 rounded-lg" onClick={onClick}>{button}</button>
      </div>
    </div>
  );
}

function Body({ state, setState }) {
  const [registrationState, setRegistrationState] = useState(0);
  if (state == State.Registration) {
    return (
      <div class="min-h-screen flex">
        <img src={registerNow} class="basis-0 grow w-0" />
        <div class="basis-0 grow w-0 border-l border-white bg-cyan-950">
          <div class="px-16 py-8 text-white flex flex-col gap-4">
          {registrationState == 0
            ?
            <>
              <h1>Be a Part of the Wonderful Experience</h1>
              <p>You can reach us anytime via <a>Your@gmail.com</a></p>
              <div>
                <p>Name</p>
                <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <div>
              <p>Email</p>
              <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <div>
              <p>Phone number</p>
              <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <div>
              <p>College Name</p>
              <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <button class="bg-blue-500 w-full py-1 rounded-lg" onClick={() => setRegistrationState(1)}>Get started</button>
            </>
            :
            <>
              <div>
              <p>Number of Participants</p>
              <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <div>
              <p>Name of the Participant 1</p>
              <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <div>
              <p>Email ID</p>
              <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <div>
              <p>Name of the Participant 1</p>
              <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <div>
              <p>Email ID</p>
              <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <div>
              <p>Course UG/PG</p>
              <input placeholder="Email ID" class="bg-black rounded p-2 w-full" />
              </div>
              <button class="bg-blue-500 w-full py-1 rounded-lg" onClick={() => setRegistrationState(0)}>Proceed to Payment</button>
            </>
          }
        </div>

        </div>
      </div>
    );
  } else if (state == State.Events) {
    return (
      <>
        <div class="bg-events">
          <h1 class="w-1/2 text-9xl text-white">Showcase Your TALENTS In The EVENTS Held In CEREBREXIA</h1>
        </div>
        <hr />
        <div class="flex gap-2 bg-cyan-950 py-4">
          <div class="bg-white basis-3/4 flex relative">
            <div class="basis-3/4">
              <h1>Join Us On This Fun Fiesta</h1>
              <button>Register Now</button>
            </div>
            <div class="w-1/4 absolute bottom-0 right-0">
              <img src={logo} class="overflow-visible" />
            </div>
          </div>
          <div class="basis-1/4 border border-white">Join Us On This Fun Fiesta</div>
        </div>
        <hr />
        <div class="bg-cyan-950">
          <h1>EVENTS</h1>
          <div class="flex flex-col gap-4">
            <Event name="Proshows" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" />
            <hr />
            <Event name="Cultural Competitions" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Checkout The Events" onClick={() => setState(State.Cultural)} />
            <hr />
            <Event name="Sports" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Sports)} />
            <hr />
            <Event name="Educational" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Educational)} />
            <hr />
            <Event name="Informal" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Informal)} />
            <hr />
          </div>
        </div>
      </>
    );
  } else if (state == State.Cultural) {
    return (
      <>
        <div class="min-h-screen">
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
        <div>
          <h1>CEREBREXIA</h1>
        </div>
      </>
    );
  } else if (state == State.Sports) {
    return (
      <>
        <div class="min-h-screen">
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
        <div>
          <h1>CEREBREXIA</h1>
        </div>
      </>
    );
  } else if (state == State.Educational) {
    return (
      <>
        <div class="min-h-screen">
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
        <div>
          <h1>CEREBREXIA</h1>
        </div>
      </>
    );
  } else if (state == State.Informal) {
    return (
      <>
        <div class="min-h-screen">
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
        <div>
          <h1>CEREBREXIA</h1>
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
      <div class="font-montserrat">
        <Page1 setState={setState} />
        <hr />
        <Page2 />
        <hr />
        <Page3 />
        <hr />
        <Page4 />
        <hr />
        <Page5 />
        <hr />
        <Page6 />
        <hr />
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
