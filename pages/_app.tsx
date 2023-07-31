import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import '@fontsource/roboto-mono'; // Import the "Roboto Mono" font
 


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
