import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'

export default function App(props: AppProps) {
	const { Component, pageProps } = props

	return (
		<>
			<Head>
				<title>Mee`</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: 'light',
					cursorType: 'default',
					// primaryColor: 'red',
					// primaryShade: 6,
					// defaultRadius: 'sm',
					// defaultGradient: {
					// 	from: 'orange',
					// 	to: '#EF4F4E',
					// 	deg: 45,
					// },
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</>
	)
}
