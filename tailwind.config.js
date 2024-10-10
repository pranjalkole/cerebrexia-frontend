/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/index.tsx"],
  theme: {
    fontFamily: {
	    'league': 'League Gothic',
	    'montserrat': 'Montserrat',
    },
    colors: {
	    'white': '#FFFFFF',
	    'lightbg': '#00334F',
	    'darkbg': '#04162A',
	    'button': '#5F8BE1',
	    'textbox': '#1C1A1A',
	    'placeholder': '#B4B2B2',
    },
    extend: {
	    backgroundImage: {
		    'hero': "url('/bg.png')",
		    'events': "url('/cerebrexia/Untitled design (21).png')",
		    'sports': "url('/images/cultural events 1-1.png')",
		    'cultural': "url('/images/cultural events 1.png')",
		    'sportsimage': "url('/images/Rectangle 30-1.png')",
		    'educationalimage': "url('/images/Rectangle 30-2.png')",
		    'informalimage': "url('/images/Rectangle 30-3.png')",
		    'culturalimage': "url('/images/Rectangle 30.png')",
		    'madness': "url('/vecteezy_galaxy-background-with-falling-star-vector-space-galaxy_7120314.jpg')",
		    'pronites': "url('/Leonardo_Phoenix_A_vibrant_otherworldly_concert_scene_set_in_t_0.jpg')",
		    'proniteimage1': "url('/image.png')",
		    'proniteimage2': "url('/image1.png')",
		    'proniteimage3': "url('/image2.png')",
		    'registernow': "url('/cerebrexia/- the Wedding of - (1).png')",
		    'eventsimagee': "url('/concept-nebula-with-galaxies-deep-space-cosmos-discovery-outer-space-stars-universe (1).jpg')",
	    }
    },
  },
  plugins: [],
}

