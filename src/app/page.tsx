import Hello from '@pages/hello'
import Resume from '@pages/resume'
import Portifolio from '@pages/portfolio'
import Contact from '@pages/contact'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {

  return (
    <main >
      <Hello />
      <Resume />
      <Portifolio />
      {/* <Contact /> */}
      <Analytics />
    </main>
  )
}
