import { Container, createStyles, Footer, Grid, Text } from '@mantine/core'
import { FC } from 'react'
import Logo from './logo'

const useStyles = createStyles((theme) => ({
	footer: {
		position: 'relative',
	},
	footerContent: {
		borderRadius: '3rem 3rem 0 0',
		backgroundColor: theme.black,
	},
}))

const LayoutFooter: FC = () => {
	const { classes, theme } = useStyles()
	return (
		<Footer withBorder={false} height="6rem" fixed={false} className={classes.footer}>
			<Container px="6rem" py="1.4rem" size={1264} className={classes.footerContent}>
				<Grid columns={2} justify="center">
					<Grid.Col span={1}>
						<Logo colorContrast />
					</Grid.Col>
					<Grid.Col span={1}>
						<Text align="end" color={theme.white}>
							© Create by SNilli - devChallenge.id
						</Text>
					</Grid.Col>
				</Grid>
			</Container>
		</Footer>
	)
}

export default LayoutFooter
