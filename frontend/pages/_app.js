import '../styles/globals.css'



export default function myApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (

      <Component {...pageProps} />

  )
}