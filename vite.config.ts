import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: [
				'assets/logos/favicon.svg',
				'assets/logos/link.svg',
				'assets/logos/icon-192.png',
				'assets/logos/icon-512.png',
			],
			manifest: {
				name: 'LINK App',
				short_name: 'LINK',
				description: 'Aplicativo da Rede de Jovens LINK',
				start_url: '/app',
				scope: '/app/',
				display: 'standalone',
				background_color: '#0A0A0A',
				theme_color: '#ED193A',
				icons: [
					{
						src: '/assets/logos/icon-192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable'
					},
					{
						src: '/assets/logos/icon-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				]
			},
			workbox: {
				navigateFallback: '/app',
				runtimeCaching: [
					{
						urlPattern: ({ url }) => url.pathname.startsWith('/app'),
						handler: 'NetworkFirst',
						options: {
							cacheName: 'app-pages',
							expiration: {
								maxEntries: 50,
								maxAgeSeconds: 60 * 60 * 24 * 7
							}
						}
					},
					{
						urlPattern: ({ request }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'image',
						handler: 'CacheFirst',
						options: {
							cacheName: 'app-assets',
							expiration: {
								maxEntries: 100,
								maxAgeSeconds: 60 * 60 * 24 * 30
							}
						}
					}
				]
			},
			devOptions: {
				enabled: true
			}
		})
	],
})
