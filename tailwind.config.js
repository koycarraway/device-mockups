module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: ['20px', '28px'],
      lg: ['24px', '32px'],
      xl: ['36px', '42px'],
      xxl: ['56px', '64px'],
      xxxl: ['80px', '86px'],
    }
  },
  variants: {
    backgroundImage: ['responsive'],
    gradientColorStops: ['responsive', 'hover', 'focus'],
    extend: {
      textOpacity: ['dark']
    }
  },
  plugins: [],
}
