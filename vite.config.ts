import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const base = mode === 'production' && process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '/';

  return {
    plugins: [react()],
    base,
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Separare React e ReactDOM
            'react-vendor': ['react', 'react-dom'],
            // Separare le librerie di calendario
            'calendar-vendor': [
              '@fullcalendar/core',
              '@fullcalendar/react',
              '@fullcalendar/daygrid',
              '@fullcalendar/timegrid',
              '@fullcalendar/interaction'
            ],
            // Separare le librerie UI
            'ui-vendor': [
              'bootstrap',
              'swiper',
              'aos',
              '@srexi/purecounterjs',
              'classnames'
            ],
            // Separare le librerie di routing e utilità
            'utils-vendor': [
              'react-router-dom',
              'react-markdown',
              'react-masonry-css',
              'uuid'
            ]
          }
        }
      },
      // Aumentare il limite di warning a 600kb per i chunk
      chunkSizeWarningLimit: 600,
      // Ottimizzazioni aggiuntive
      target: 'esnext',
      minify: 'esbuild'
    },
    // Ottimizzazioni per development
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@fullcalendar/core',
        '@fullcalendar/react',
        'swiper'
      ]
    }
  };
});