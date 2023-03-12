import {
  defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Inter',
      },
    }),
  ],
  shortcuts: [
    ['btn-primary', 'pt-6px pb-7px px-14px shadow-sm text-white cursor-pointer rounded bg-button-primary hover:bg-button-primary-hover transition-all text-normal font-sans font-700'],
    ['btn-round', 'box-border transition-all self-center b-rounded-50 cursor-pointer hover:b-15 hover:b-teal'],
    ['btn-secondary', 'px-2.5 py-1 hover:bg-gray-100 transition-all rounded font-600 text-sm font-sans'],
  ],
  theme: {
    colors: {
      primary: '#e16259', // notion primary red
      buttonPrimary: '#121212', // primary
      buttonPrimaryHover: '#333333', // when hover ref-500
    },
    textColor: {
      primary: '#121212',
      highlight: '#ffed4a',
      danger: '#e3342f',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
