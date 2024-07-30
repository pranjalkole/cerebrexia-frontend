/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/index.tsx"],
  theme: {
    fontFamily: {
	    'league': 'League Gothic',
	    'montserrat': 'Montserrat',
    },
    extend: {
	    backgroundImage: {
		    'hero': "url('/bg.png')",
		    'events': "url('/cerebrexia/Untitled design (21).png')",
	    }
    },
  },
  plugins: [],
}

