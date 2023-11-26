
const deviceSizes = {
  mobile: '47.9375rem',
  tablet: '63.125rem',
  laptop: '120rem',
};

const theme = {
  darkMode: {
    color: '#ffffff',
    bgColor: '#202020',
    hoverColor: '#a3a3a3',

  },
  lightMode: {
    color: '#000000',
    bgColor: '#ffffff',
    hoverColor: 'var(--button-hover-color);',
  },
  device: {
    mobile: `(min-width: 20rem) and (max-width: ${deviceSizes.mobile})`,
    tablet: `(min-width: ${deviceSizes.mobile}) and (max-width: ${deviceSizes.tablet})`,
    laptop: `(min-width: ${deviceSizes.tablet}) and (max-width: ${deviceSizes.laptop})`,
  },

};




export default theme;
