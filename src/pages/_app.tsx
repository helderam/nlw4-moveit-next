import '../styles/global.css'

/*
Permite reaproveitar todos paginas
- Cabeçalho
- Sidebar

Porem eh reacalculado para cada pagina

*/

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )

}

export default MyApp
