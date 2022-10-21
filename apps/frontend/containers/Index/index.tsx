import { Carousel } from '@mantine/carousel'
import { createStyles, Grid, Select, Text } from '@mantine/core'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react'
import Card from '../../components/Card'
import Logo from '../../layouts/Main/logo'

const useStyles = createStyles(() => ({
	topBanner: {
		borderRadius: '3rem 3rem 0 0',
		height: 480,
		backgroundImage: 'url(images/HeroImagelg.png)',
		backgroundSize: '100% 100%',
		backgroundRepeat: 'no-repeat',
	},
	bottomBanner: {
		borderRadius: '0 0 3rem 3rem',
		height: 480,
		backgroundColor: '#E3E1DC',
	},
	bannerCol: {
		width: '320px',
	},
	carousel: {
		display: 'flex',
		height: 260,
		justifyContent: 'space-around',
	},
}))

interface breedsInfo {
	id: string
	name: string
	url: string
}

interface IndexContainerProps extends PropsWithChildren {
	breeds: Array<breedsInfo>
}
const IndexContainer: FC<IndexContainerProps> = (props) => {
	const { classes, theme } = useStyles()
	const [select, setSelect] = useState('')
	const router = useRouter()

	const mappingSelect = useMemo(() => {
		return (info: breedsInfo) => ({
			label: info.name,
			value: info.id,
		})
	}, [])
	const genSelectData = useCallback(
		(info: Array<breedsInfo>) => {
			return info.map(mappingSelect)
		},
		[mappingSelect],
	)
	const onSelectChange = useCallback((query: string) => {
		setSelect(query)
	}, [])
	const slides = props.breeds
		.filter((_, index) => index < 10)
		.map((breed) => (
			<Carousel.Slide key={breed.id}>
				<Card image={breed.url} title={breed.name} />
			</Carousel.Slide>
		))

	return (
		<Grid>
			<Grid.Col p={0} className={classes.topBanner}>
				<Grid mx="6rem" mt="6rem" className={classes.bannerCol} style={{ color: theme.white }}>
					<Logo colorContrast scale={2.5} />
					<Grid.Col my="1rem">
						<Text size={24}>Get to know more about your cat breed</Text>
					</Grid.Col>
					<Grid.Col>
						<Select
							size="lg"
							radius="xl"
							placeholder="Enter your breed"
							searchable
							data={genSelectData(props.breeds)}
							onSearchChange={onSelectChange}
							searchValue={select}
							nothingFound="No bleed"
							clearable
						/>
					</Grid.Col>
				</Grid>
			</Grid.Col>
			<Grid.Col p={0} className={classes.bottomBanner}>
				<Grid mt="2rem" mb="1rem" mx="4rem" style={{ color: theme.other.color.main }}>
					<Grid.Col>
						<Text weight={700} size={36}>
							Breeds for you to discover
						</Text>
					</Grid.Col>
					<Grid.Col className={classes.carousel}>
						<Carousel
							sx={{ flex: 1, maxWidth: 1090 }}
							height="100%"
							slideSize="246px"
							// breakpoints={[
							// 	{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 },
							// ]}
							slideGap="sm"
							controlsOffset="xs"
							align="start"
						>
							{slides}
						</Carousel>
					</Grid.Col>
				</Grid>
			</Grid.Col>
		</Grid>
	)
}

export default IndexContainer
