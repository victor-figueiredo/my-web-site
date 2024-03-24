import '@/styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Victor Figueiredo Website</title>
        <meta name="description" content="Desenvolvedor Frontend" />
      </Head>
      <NextIntlClientProvider
        locale={router.locale}
        timeZone="America/Sao_Paulo"
        messages={pageProps.messages}
      >
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </>
  )
}
