import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MATRITSA — IT поддержка, 3D-печать, инженерные разработки',
    short_name: 'MATRITSA',
    description: 'IT поддержка организаций, 3D-моделирование и печать, инженерные разработки в Москве и МО, удалённо по всей России',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D1117',
    theme_color: '#00C8FF',
    icons: [
      {
        src: '/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
