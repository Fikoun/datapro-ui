import 'tailwindcss/dist/tailwind.css'
import '../styles/globals.css'

import { Navbar } from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp
