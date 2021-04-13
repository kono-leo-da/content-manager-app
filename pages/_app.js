/*import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
*/
import "bulma/css/bulma.min.css"
import "../styles/globals.css"

function MainApp({ Component,pageProps }){
  return(
    <Component {...pageProps} />
  )
}

export default MainApp