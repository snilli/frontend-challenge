import { NextPage } from 'next'
import { useEffect } from 'react'
import IndexContainer from '../containers/Index'
import MainLayout from '../layouts/Main'
import { useBreedDispatcher } from '../store/breed/dispatcher'
import { useGetBreedsInfoSelector } from '../store/breed/selector'

const IndexPage: NextPage = () => {
	const { getBreedList } = useBreedDispatcher()
	const breeds = useGetBreedsInfoSelector()

	useEffect(() => {
		if (!breeds.length) {
			getBreedList()
		}
	}, [breeds.length, getBreedList])

	return (
		<MainLayout>
			<IndexContainer breeds={breeds} />
		</MainLayout>
	)
}

export default IndexPage
