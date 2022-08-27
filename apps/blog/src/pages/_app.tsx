import "../styles/globals.css"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import Head from "next/head"
// import { ThemeProvider } from "next-themes"
import MainLayout from "../components/layouts/MainLayout"
import { MyThemeContextProvider } from "../context/myThemeContext"
import ReactQueryProvider from "../context/reactQueryProvider"
import UiContextProvider from "../context/uiContextProvider"

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType
  }
}

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <UiContextProvider>
      <ReactQueryProvider>
        <MyThemeContextProvider>
          <Head>
            <meta />
          </Head>

          <MainLayout>
            {Component.PageLayout ? (
              <Component.PageLayout>
                <Component {...pageProps} />
              </Component.PageLayout>
            ) : (
              <Component {...pageProps} />
            )}
          </MainLayout>
        </MyThemeContextProvider>
      </ReactQueryProvider>
    </UiContextProvider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp
