const theme = {
  title: 'light',
  color: {
    primary: {
      nth1: '#2AFCB0',
      nth2: '#25CC90'
    },
    gray: {
      nth1: '#252525',
      nth2: '#808080',
      nth3: '#C8C8C8',
      nth4: '#DADADA'
    },
    white: {
      nth1: '#FFFFFF',
      nth2: '#EFEFEF'
    },
    alert: {
      error: {
        nth1: '#FC3E3E',
        nth2: '#FF6565'
      },
      success: {
        nth1: '#28B446',
        nth2: '#25A35A'
      },
      warning: {
        nth1: '#FF9900',
        nth2: '#FFC93F',
        nth5: '#EE9A1B'
      }
    },
    modal: {
      nth1: 'rgba(0, 0, 0, 0.6);'
    },
    gradient: {
      nth1: 'linear-gradient(87.19deg, #199E6E 8.32%, #25CC90 96.23%)',
      nth2: 'linear-gradient(87.19deg, #1B1B1B 8.32%, #343434 96.23%)'
    }
  },
  container: {
    xl: '1240px',
    header: '90px'
  },
  font: {
    family: {
      brand: 'Poppins'
    },
    size: {
      xxxs: '10px',
      xxs: '12px',
      xs: '14px',
      sm: '16px',
      smd: '20px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      xxl: '48px',
      bg: '64px'
    },
    weight: {
      bold: 700,
      semiBold: 600,
      regular: 400
    }
  },
  spacing: {
    stack: {
      nano: '4px',
      small: '8px',
      xxxxs: '12px',
      xxxs: '16px',
      xxs: '24px',
      xs: '32px',
      sm: '40px',
      md: '48px',
      lg: '56px',
      xl: '64px',
      mxl: '72px',
      xxl: '80px',
      xxxl: '120px',
      bg: '160px',
      giant: '200px'
    },
    inline: {
      nano: '4px',
      small: '8px',
      xxxs: '16px',
      xxs: '24px',
      xs: '32px',
      sm: '40px',
      md: '48px',
      lg: '64px',
      xl: '80px'
    }
  },
  border: {
    width: {
      none: '0px',
      line: '1px',
      thin: '2px',
      medium: '4px',
      strong: '8px'
    },
    radius: {
      none: '0px',
      tiny: '2px',
      light: '4px',
      xMedium: '6px',
      medium: '8px',
      lmedium: '12px',
      large: '16px',
      big: '24px',
      xl: '32px',
      circle: '100%'
    }
  },
  shadow: {
    level1: '0px 2px 4px',
    level2: '0px 4px 8px',
    level3: '0px 8px 16px',
    level4: '0px 8px 24px 0px',
    level5: '0px 16px 32px'
  },
  opacity: {
    semiOpaque: '0.08',
    opaque: '0.64',
    medium: '0.32',
    semiTransparent: '0.16',
    transparent: '0.8'
  }
}

export { theme }