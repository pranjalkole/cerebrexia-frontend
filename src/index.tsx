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
    <svg height="32px" viewBox="0 0 32 32" width="32px" className="fill-white">
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    </svg>
  )
}


function Page1({ setState }) {
  const [ hamburgerState, setHamburgerState ] = useState(0);
  const clickHamburger = () => {
    setHamburgerState(1);
  };
  const clickCross = () => {
    setHamburgerState(0);
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
      <div className={ hamburgerState == 0 ? "ham hidden" : "ham absolute flex flex-col h-screen z-10 left-0 bg-darkbg w-screen justify-around" }>
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
      <button className="self-end md:hidden" onClick={clickHamburger}>
        <Hamburger />
      </button>
      <h1 className="text-center text-7xl sm:text-[10rem] md:text-[11rem] lg:text-[20rem] font-league">
        <Typewriter
          options={{
            strings: ['CEREBREXIA'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
        <button className="rounded-[44px] border border-[#B0A2A2] bg-[#d9d9d9]/[.10] backdrop-blur-[5.6px] px-8 py-1 text-xl">Register Now</button>
        <button className="rounded-[44px] border border-[#B0A2A2] bg-[#d9d9d9]/[.10] backdrop-blur-[5.6px] px-8 py-1 text-xl">View Events</button>
      </div>
      <div className="self-center absolute bottom-0 h-full flex">
        <div className="inline-flex justify-center items-end">
          <img src={logo} className="max-h-1/2 object-scale-down" />
        </div>
      </div>
    </div>
  )
}

function BigBox( {number, string }) {
  return (
    <div className="border-2 rounded border-white aspect-[4/3] rounded-lg text-white text-center flex flex-col justify-center basis-0 grow">
      <h1 className="font-bold">{number}</h1>
      <h1>{string}</h1>
    </div>
  )
}

function Page2() {
  return (
    <div className="px-40 text-white py-8 bg-lightbg flex flex-col gap-8">
      <h1 className="font-bold text-4xl">The Madness Unfolds In :</h1>
      <div className="flex justify-around text-white items-center gap-4 text-5xl">
        <BigBox number="3" string="Months" />
        <h1 className="text-7xl">:</h1>
        <BigBox number="47" string="Days" />
        <h1 className="text-7xl">:</h1>
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
      <div className="relative z-10 text-center py-8 px-24">
        <h1 className="text-4xl font-bold">
          <Typewriter
            options={{
              strings: ['What Is CEREBREXIA?'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-xl">IGIMS brings you the first of its kind socio-cultural festival amongst medical fraternity on the Land of Buddha, the place which not only gave INDIA but also the world the brightest of the brains, where the igniting minds will meet. To experience the everlasting thrill of unlimited music, dance, drama, entertainment amalgamated with the essence of knowledge and culture. A platform which would not only englighten, but would also give an excellent opportunity to interact with best brains of the country from senior doctors to renowned dignitaries and tycoons.</p>
      </div>
    </div>
  );
}

function Page4() {
  return (
    <div className="relative bg-darkbg text-white">
      <video autoPlay loop className="w-full h-full object-cover z-0 absolute">
        <source src={video2} />
      </video>
      <div className="relative flex flex-col gap-8 z-10 py-8 px-24">
        <h1 className="text-4xl font-bold">The Theme of 2024</h1>
        <div className="flex gap-4">
          <img src={two} className="object-scale-down" />
          <div className="flex flex-col gap-4">
            <p className="text-3xl">Cerebrexia is a grand festival that invites attendees to embark on an interstellar journey through the cosos, celebrating the wonders of space, the mysteries of the universe, and the fascinating possibility of extraterrestrial life. The highlight of the fest is the visit from the Alien Empress, a benevolent and wise ruler from a distant galaxy, who graces Earth with her presence to share cosmic wisdom and celebrate with humankind</p>
            <button className="bg-button w-full py-2 rounded-lg font-bold">Register Now</button>
          </div>
        </div>
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
      <div className="relative flex flex-col gap-8 z-10 py-8 px-24">
        <h1 className="text-4xl text-right font-bold">About Indira Gandhi Institute of Medical Science</h1>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <p className="text-xl">IGIMS brings you the first of its kind socio-cultural festival amongst medical fraternity on the Land of Buddha, the place which not only gave INDIA but also the world the brightest of the brains, where the igniting minds will meet. To experience the everlasting thrill of unlimited music, dance, drama, entertainment amalgamated with the essence of knowledge and culture. A platform which would not only englighten, but would also give an excellent opportunity to interact with best brains of the country from senior doctors to renowned dignitaries and tycoons.</p>
            <button className="bg-button w-full py-2 rounded-lg">Visit The Website</button>
          </div>
          <img src={three} className="object-scale-down" />
        </div>
      </div>
    </div>
  );
}


function EventCard({ imageUrl, heading, text }) {
  return (
    <div className="rounded-xl bg-textbox">
      <img src={imageUrl} className="w-full rounded-xl" />
      <div className="m-4">
        <h1 className="text-xl font-bold">{heading}</h1>
        <p>{text}</p>
        <button className="bg-button w-full py-1 rounded-lg">Register Now</button>
      </div>
    </div>
  );
}

function Page6() {
  return (
    <div className="bg-lightbg text-white">
      <h1 className="text-8xl text-center">Events</h1>
      <hr className="text-white" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
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
    <div className="bg-darkbg text-white py-12 flex justify-center">
      <div className="inline-flex flex-col">
        <div className="flex gap-8">
          <div className="border-r border-white">
            <h2 className="border-b border-white text-2xl font-bold">CEREBREXIA</h2>
            <div>
              <h3 className="font-bold">Contact Us</h3>
              <p>IGIMS, Patna, Bihar</p>
              <p>Youremail@gmail.com</p>
              <p>+1 800 854-36-80</p>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.855668290953!2d85.08735887421037!3d25.609711877447698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5793d036c7e9%3A0xf3c735dd4ca2d604!2sIGIMS!5e0!3m2!1sen!2sin!4v1723070080745!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Having a Problem?</h1>
            <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2" />
            <textarea placeholder="Write Your Query" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2" />
            <button className="bg-button w-full py-1 rounded-lg">Submit</button>
          </div>
        </div>
        <div className="flex justify-between font-bold">
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
    <div className="flex justify-between px-4 py-2 bg-hero text-white">
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
  );
}

function Event({ name, desc, button, onClick }) {
  return (
    <div className="flex gap-4 items-between w-full">
      <div className="basis-1/4">
        <img src={eventimg} className="" />
      </div>
      <div className="basis-3/4 text-white">
        <h1 className="text-4xl">{name}</h1>
        <p>{desc}</p>
        <button className="bg-button w-full py-1 rounded-lg" onClick={onClick}>{button}</button>
      </div>
    </div>
  );
}

function SponsorCard({ head, sub }) {
  return (
    <div className="basis-1/3 flex border border-white text-white bg-[#d9d9d9]/[.06] rounded-[44px] backdrop-blur-[87.15px] p-4 items-center justify-between">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">{head}</h1>
        <p>{sub}</p>
      </div>
      <div className="bg-white rounded-full w-24 h-24">
      </div>
    </div>
  );
}

function Body({ state, setState }) {
  const [registrationState, setRegistrationState] = useState(0);
  if (state == State.Registration) {
    return (
      <div className="min-h-screen flex border-b border-white">
      	<form method="POST" name="customerData" action="https://api.cerebrexia2024igimspatna.com/ccavRequestHandler">
		<table width="40%" height="100" border='1' align="center">
			<caption>
				<font size="4" color="blue"><b>Integration Kit</b></font>
			</caption>
		</table>
		<table width="40%" height="100" border='1' align="center">
			<tr>
				<td>Parameter Name:</td>
				<td>Parameter Value:</td>
			</tr>
			<tr>
				<td colspan="2">Compulsory information</td>
			</tr>
			<tr>
				<td>Merchant Id</td>
				<td><input type="text" name="merchant_id" id="merchant_id" value="2797244" /> </td>
			</tr>
			<tr>
				<td>Order Id</td>
				<td><input type="text" name="order_id" value="1" /></td>
			</tr>
			<tr>
				<td>Currency</td>
				<td><input type="text" name="currency" value="INR" /></td>
			</tr>
			<tr>
				<td>Amount</td>
				<td><input type="text" name="amount" value="1.00" /></td>
			</tr>
			<tr>
				<td>Redirect URL</td>
				<td><input type="text" name="redirect_url"
					value="http://192.168.2.49:8085/ccavResponseHandler" />
				</td>
			</tr>
			<tr>
				<td>Cancel URL</td>
				<td><input type="text" name="cancel_url"
					value="http://192.168.2.49:8085/ccavResponseHandler" />
				</td>
			</tr>
			<tr>
				<td>Language</td>
				<td><input type="text" name="language" id="language" value="EN" /></td>
			</tr>
			<tr>
				<td colspan="2">Billing information(optional):</td>
			</tr>
			<tr>
				<td>Billing Name</td>
				<td><input type="text" name="billing_name" value="Peter" /></td>
			</tr>
			<tr>
				<td>Billing Address:</td>
				<td><input type="text" name="billing_address"
					value="Santacruz" /></td>
			</tr>
			<tr>
				<td>Billing City:</td>
				<td><input type="text" name="billing_city" value="Mumbai" /></td>
			</tr>
			<tr>
				<td>Billing State:</td>
				<td><input type="text" name="billing_state" value="MH" /></td>
			</tr>
			<tr>
				<td>Billing Zip:</td>
				<td><input type="text" name="billing_zip" value="400054" /></td>
			</tr>
			<tr>
				<td>Billing Country:</td>
				<td><input type="text" name="billing_country" value="India" />
				</td>
			</tr>
			<tr>
				<td>Billing Tel:</td>
				<td><input type="text" name="billing_tel" value="0229874789" />
				</td>
			</tr>
			<tr>
				<td>Billing Email:</td>
				<td><input type="text" name="billing_email"
					value="testing@domain.com" /></td>
			</tr>
			<tr>
				<td colspan="2">Shipping information(optional):</td>
			</tr>
			<tr>
				<td>Shipping Name</td>
				<td><input type="text" name="delivery_name" value="Sam" />
				</td>
			</tr>
			<tr>
				<td>Shipping Address:</td>
				<td><input type="text" name="delivery_address"
					value="Vile Parle" /></td>
			</tr>
			<tr>
				<td>Shipping City:</td>
				<td><input type="text" name="delivery_city" value="Mumbai" />
				</td>
			</tr>
			<tr>
				<td>Shipping State:</td>
				<td><input type="text" name="delivery_state" value="Maharashtra" />
				</td>
			</tr>
			<tr>
				<td>Shipping Zip:</td>
				<td><input type="text" name="delivery_zip" value="400038" /></td>
			</tr>
			<tr>
				<td>Shipping Country:</td>
				<td><input type="text" name="delivery_country" value="India" />
				</td>
			</tr>
			<tr>
				<td>Shipping Tel:</td>
				<td><input type="text" name="delivery_tel" value="0221234321" />
				</td>
			</tr>
			<tr>
				<td>Merchant Param1</td>
				<td><input type="text" name="merchant_param1"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Merchant Param2</td>
				<td><input type="text" name="merchant_param2"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Merchant Param3</td>
				<td><input type="text" name="merchant_param3"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Merchant Param4</td>
				<td><input type="text" name="merchant_param4"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Merchant Param5</td>
				<td><input type="text" name="merchant_param5"
					value="additional Info." /></td>
			</tr>
			<tr>
				<td>Promo Code:</td>
				<td><input type="text" name="promo_code" value=""/></td>
			</tr>
			<tr>
				<td>Customer Id:</td>
				<td><input type="text" name="customer_identifier" value=""/></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="Checkout" /></td>
			</tr>
		</table>
	</form>

        <img src={registerNow} className="basis-0 grow w-0" />
        <div className="basis-0 grow w-0 border-l border-white bg-darkbg">
          <div className="px-16 py-8 text-white flex flex-col gap-4">
          {registrationState == 0
            ?
            <>
              <h1>Be a Part of the Wonderful Experience</h1>
              <p>You can reach us anytime via <a>Your@gmail.com</a></p>
              <div>
                <p>Name</p>
                <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
                <p>Email</p>
                <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
                <p>Phone number</p>
                <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <div>
                <p>College Name</p>
                <input placeholder="Email ID" className="bg-textbox border border-placeholder placeholder:text-placeholder rounded p-2 w-full" />
              </div>
              <button className="bg-button w-full py-1 rounded-lg" onClick={() => setRegistrationState(1)}>Get started</button>
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
    );
  } else if (state == State.Events) {
    return (
      <>
        <div className="py-24 flex items-center bg-events">
          <h1 className="w-1/2 text-8xl text-white">Showcase Your TALENTS In The EVENTS Held In CEREBREXIA</h1>
        </div>
        <hr className="text-white" />
        <div className="flex gap-2 bg-lightbg py-12 px-4">
          <div className="bg-white basis-3/4 flex relative rounded-lg">
            <div className="basis-3/4 bg-white px-4 flex flex-col justify-center items-center gap-4">
              <h1 className="text-darkbg text-4xl font-bold">Join Us On This Fun Fiesta</h1>
              <button className="w-full bg-darkbg text-white py-2 rounded-lg">Register Now</button>
            </div>
            <div className="w-1/4 absolute bottom-0 right-0">
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
            <hr className="text-white" />
            <Event name="Cultural Competitions" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Checkout The Events" onClick={() => setState(State.Cultural)} />
            <hr className="text-white" />
            <Event name="Sports" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Sports)} />
            <hr className="text-white" />
            <Event name="Educational" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Educational)} />
            <hr className="text-white" />
            <Event name="Informal" desc="Get ready to be blown away at the ProShow - the ultimate spectacle of talent and entertainment at our fest!" button="Register Now" onClick={() => setState(State.Informal)} />
            <hr className="text-white" />
          </div>
        </div>
      </>
    );
  } else if (state == State.Cultural) {
    return (
      <>
        <div className="min-h-screen bg-cultural">
          <h1 className="text-9xl">CULTURAL EVENTS</h1>
        </div>
        <div className="bg-darkbg">
          <h2 className="text-white">Cerebrexia organizes varous cultural events promoting the cultural integrity</h2>
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
        <div className="bg-culturalimage">
          <h1>CEREBREXIA</h1>
        </div>
      </>
    );
  } else if (state == State.Sports) {
    return (
      <>
        <div className="min-h-screen bg-sports">
          <h1 className="text-9xl">SPORTS EVENTS</h1>
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
        <div className="flex">
          <div className="inline-block relative">
            <img src={sportsimage} />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"><h1 className="text-white text-3xl">CEREBREXIA</h1></div>
          </div>
        </div>
      </>
    );
  } else if (state == State.Educational) {
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
          <div className="inline-block relative">
            <img src={galleryimage} />
            <div className="absolute top-0 left-0 right-0 bottom-0"><h1 className="text-white text-center text-[15rem] font-bold">GALLERY</h1></div>
          </div>
        </div>
        <hr className="text-white" />
        <div className="bg-darkbg">
          <h1 className="font-league text-[20rem] text-center text-white">OUR LEGACY</h1>
          <img src={carousel1} className="w-full px-4" />
          <div className="flex justify-center gap-2">
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
            <div className="w-24 aspect-square bg-placeholder"></div> 
          </div>
          <div className="grid grid-cols-4 gap-4 p-4">
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
          <div className="inline-block relative">
            <img src={galleryimage} />
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="h-full flex flex-col justify-between">
                <h1 className="text-white text-center text-[12rem] font-bold">SPONSORS</h1>
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
        <Page5 />
        <hr className="text-white" />
        <Page6 />
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
