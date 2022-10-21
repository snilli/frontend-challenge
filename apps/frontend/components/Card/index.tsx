import { createStyles, Paper, Title } from '@mantine/core'
import { FC } from 'react'

const useStyles = createStyles((theme) => ({
	card: {
		width: 262,
		height: '100%',
		display: 'flex',
		flexDirection: 'column-reverse',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		backgroundSize: 'cover',
	},

	title: {
		fontWeight: 900,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: 32,
		marginTop: theme.spacing.xs,
	},
}))

interface CardProps {
	image: string
	title: string
}

const Card: FC<CardProps> = ({ image, title }) => {
	const { classes } = useStyles()

	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			sx={{
				backgroundImage: `url(${image})`,
			}}
			className={classes.card}
		>
			<div>
				<Title order={3} className={classes.title}>
					{title}
				</Title>
			</div>
		</Paper>
	)
}

export default Card
