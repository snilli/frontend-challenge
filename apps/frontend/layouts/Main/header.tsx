import { Container, createStyles, Header } from '@mantine/core'
import { FC } from 'react'
import Logo from './logo'

const useStyles = createStyles((theme) => ({
	// header: {
	// 	paddingTop: theme.spacing.sm,
	// 	backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
	// 	borderBottom: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
	// },
	// mainSection: {
	// 	paddingBottom: theme.spacing.sm,
	// },
}))

const LayoutHeader: FC = () => {
	// const { classes } = useStyles()
	return (
		<Header fixed={false} withBorder={false} height={56} sx={{ position: 'relative' }}>
			<Container px="6rem" py="2rem" size={1440}>
				<Logo colorContrast={false} />
			</Container>
		</Header>
	)
}

export default LayoutHeader
