import {
  defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetExtra } from 'unocss-preset-extra'
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'

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
    presetExtra(),
    presetHeroPatterns(),
  ],
  shortcuts: [
    ['btn-primary', 'pt-6px pb-7px px-14px shadow-sm text-white cursor-pointer rounded bg-button-primary hover:bg-button-primary-hover transition-all font-sans font-700'],
    ['btn-round', 'relative transition-all self-center b-rounded-50 b-1 b-gray-200 cursor-pointer'],
    ['btn-secondary', 'px-2.5 py-1 hover:cursor-pointer active:bg-gray-200 hover:bg-gray-100 transition-all rounded font-600 text-sm font-sans'],
    ['btn-tertiary', 'px-1 py-1 hover:cursor-pointer active:bg-gray-300 hover:bg-gray-200 transition-all rounded font-600 text-sm font-sans z-3'],
  ],
  theme: {
    colors: {
      primary: '#e16259', // notion primary red
      buttonPrimary: '#121212', // primary
      buttonPrimaryHover: '#333333', // when hover ref-500
      primaryBackgroundColor: '#f6f5f4', // background color
    },
    textColor: {
      primary: '#121212', // primary
      highlight: '#ffed4a', // highlight
      danger: '#e3342f', // danger
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
