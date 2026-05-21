import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'STRENGTH ARTS',
    short_name: 'STRENGTH ARTS',
    description: '科学、研究、身体トレーニング、感覚認識、そして哲学。複数の視点から「強さ」を探求し、発展させるプラットフォーム。',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
