module.exports = {
  theme: {
    screens: {
      xs: "0px",
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },	  
    extend: {},
  },
  variants: {
	margin: ['responsive', 'direction'],
	padding: ['responsive', 'direction'],	  
	borderRadius: ['responsive', 'direction'],	  
	border: ['responsive', 'direction'],	  
	textAlign: ['responsive', 'direction'],	  
  },
  plugins: [require('tailwindcss-dir')()]
}
