import 'tailwindcss/tailwind.css'
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from 'recoil'

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) =>

  <SessionProvider session={session}>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </SessionProvider>


export default MyApp
