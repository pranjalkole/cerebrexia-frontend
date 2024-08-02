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
		    'educational': "url('/images/cultural events 1-2.png')",
		    'cultural': "url('/images/cultural events 1.png')",
		    'sportsimage': "url('/images/Rectangle 30-1.png')",
		    'educationalimage': "url('/images/Rectangle 30-2.png')",
		    'informalimage': "url('/images/Rectangle 30-3.png')",
		    'culturalimage': "url('/images/Rectangle 30.png')",
	    }
    },
  },
  plugins: [],
}

