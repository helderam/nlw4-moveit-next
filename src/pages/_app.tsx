import '../styles/global.css'

/*
Permite reaproveitar todos paginas
- Cabeçalho
- Sidebar

Porem eh reacalculado para cada pagina

*/

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
