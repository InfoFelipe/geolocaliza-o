import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import PrimeReact from 'primereact/api'; 

export default function App({ Component, pageProps }: AppProps) {
  PrimeReact.ripple = true;
  PrimeReact.autoZIndex = true;
  PrimeReact.appendTo = 'self';
  PrimeReact.cssTransition = false;
  PrimeReact.zIndex = {
    modal: 1100,    // dialog, sidebar
    overlay: 1000,  // dropdown, overlaypanel
    menu: 1000,     // overlay menus
    tooltip: 1100,   // tooltip
    toast: 1200     // toast
}
  return <Component {...pageProps} />
}
