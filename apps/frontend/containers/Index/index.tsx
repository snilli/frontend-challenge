import { AppShell, Header, MantineProvider } from '@mantine/core'
import { FC } from 'react'

const IndexContainer: FC = () => {
	MantineProvider
	return (
		<AppShell
			padding="md"
			header={
				<Header
					height={60}
					withBorder={false}
					p="xs"
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gap: '10rem',
					}}
				>
					<div>sdsd</div>
					<div>sdsd</div>
					<div>sdsd</div>
					<div>sdsd</div>
				</Header>
			}
		>
			{/* Your application here */}
		</AppShell>
	)
}

export default IndexContainer
