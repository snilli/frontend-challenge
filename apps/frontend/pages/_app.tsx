import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { CatApiProvider, getCatApi } from '../contexts/CatApiContext'
declare module '@mantine/core' {
	export interface MantineThemeOther {
		color: {
			main: string
		}
	}
}

export default function App(props: AppProps) {
	const { Component, pageProps } = props
	const catApi = getCatApi('')
	return (
		<>
			<Head>
				<title>Mee</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					fontFamily: 'Montserrat',
					colorScheme: 'light',
					cursorType: 'default',
					other: {
						color: {
							main: '#291507',
						},
					},
				}}
			>
				<CatApiProvider catApi={catApi}>
					<Component {...pageProps} />
				</CatApiProvider>
			</MantineProvider>
		</>
	)
}
