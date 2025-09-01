/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Disable default container sizes
    container: {
      // Default values will be overridden
      center: true,
      padding: '0',
    },
    extend: {
      container: {
        center: true, 
        padding:'18px',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1280px",
        },
      },
      fontFamily: {
        "Everett": ["TWK Everett", "sans-serif"],
        "FK_Grotesk": ["FK Grotesk Neue Trial", "sans-serif"],
        "GTAmerica": ["GT America Trial", "sans-serif"],
      },
      colors:{
        'primaryColor':'#181A1F',
        'bannerBg':'#EFB90B',
        'secondaryColor':'#1A1A1AB2',
        'borderColor':'#E6E6E6',
        'cardBg':'#FAFAFA',

      },
      spacing:{
        '222':'222px',
        '322':'322px',
        '350':'350px',
        '370':'370px',
        '430':'430px',
        '494':'494px',
        '558':'558px',
        '580':'580px',
        '587':'587px',
        '596':'596px',
        '620':'620px',
        '635':'635px',
        '720':'720px',
        '803':'803px',
        '986':'986px',
        
      },
      fontSize:{
        '22xl':'22px',
        '24xl': '24px',
        '26xl': '26px',
        '28xl':'28px',
        '30xl': '30px',
        '32xl':'32px',
        '40xl':'40px',
        '42xl':'42px',
        '44xl':'44px',
        '48xl':'48px',
        '50xl':'50px',
        '56xl':'56px',
        '60xl':'60px',
        '64xl':'64px',
        '80xl':'80px',
      },

      lineHeight: {
        '8': '30px',
        '32':'32px',
        '34':'34px',
        '38':'38px',
        '40':'40px',
        '42':'42px',
        '44':'44px',
        '50':'50px',
        '52':'52px',
        '54':'54px',
        '56':'56px',
        '60':'60px',
        '64':'64px',
        '70':'70px',
        '80':'80px',
        '90':'90px',
      },


      boxShadow:{
        'boxShadow_1':'6px 6px 32px 0px #0000000F',
        'box-shadow_2': '0px 6px 24px 0px #A13B050D',
        'box-shadow_3': '0px 2px 0px 0px #EBEBEB',

        
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.41) 100%)',
        'btn-gradient_2': 'linear-gradient(165.96deg, rgba(255, 193, 7, 0.24) 7.5%, rgba(255, 193, 7, 0.8) 92.5%)',
        'btn-gradient_3': 'linear-gradient(165.96deg, rgba(255, 106, 42, 0.24) 7.5%, rgba(221, 66, 0, 0.8) 92.5%)',
        'btn-gradient_4': 'radial-gradient(54.68% 142.6% at 53.78% 110.84%, #FFF6D3 0%, #FFC817 100%)',
        'btn-gradient_5': 'linear-gradient(180deg, #FFDA35 0%, #FFD61F 100%)',
        'btn-gradient_6': 'linear-gradient(165.96deg, rgba(27, 27, 27, 0.24) 7.5%, rgba(27, 27, 27, 0.8) 92.5%)',
        'btn-gradient_7': 'radial-gradient(54.68% 142.6% at 53.78% 110.84%, #FFF6D3 0%, #FFF6D3 100%)'


      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' }, // Less bounce (adjust this %)
        },
      },
      animation: {
        'bounce-soft-slow': 'bounce-soft 2s ease-in-out infinite',
      },

      borderRadius: {
        'r_50':'50px',
      },

    },
  },
  plugins: [],
}
