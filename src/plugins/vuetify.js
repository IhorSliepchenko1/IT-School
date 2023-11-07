import 'vuetify/styles'
import { createVuetify } from 'vuetify'


export default createVuetify({
  theme: {
    options: {
      customProperties: true,
    },
    default: 'light',
    themes: {
      light: {
        primary: '#2196F3',
      },
    },
    cssVariables: {
      fontSize: '16px',
    },
  },
});

