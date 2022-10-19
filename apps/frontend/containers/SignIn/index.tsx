import { FC } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Button, Text } from '@mantine/core'

const Center = styled.div({
	width: '100vw',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

const SignInContainer: FC = () => {
	return (
		<Center>
			<Text size={48} weight="bold" color="green">
				Welcome to Sign In
			</Text>
			<Link href="/" passHref>
				<Button component="a" size="lg" variant="gradient">
					Back to Home
				</Button>
			</Link>
		</Center>
	)
}

export default SignInContainer
