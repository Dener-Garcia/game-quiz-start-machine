import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // comment base line for deploy out github pages
  //base: '/game-quiz-start-machine/',
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ceos: resolve(__dirname, 'src/pages/ceos.html'),
        flip: resolve(__dirname, 'src/pages/flip-card.html'),
        kaban: resolve(__dirname, 'src/pages/kaban1.html'),
        maker: resolve(__dirname, 'src/pages/maker-machine.html'),
        packer: resolve(__dirname, 'src/pages/packer-machine.html'),
        quebra: resolve(__dirname, 'src/pages/quebra-cabeca.html'),
        rpg: resolve(__dirname, 'src/pages/rpg-factory.html')
      },
    },
  },
})