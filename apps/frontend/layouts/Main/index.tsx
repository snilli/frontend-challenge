import { AppShell, Container } from '@mantine/core'
import { FC, PropsWithChildren } from 'react'
import LayoutFooter from './footer'
import LayoutHeader from './header'

const MainLayout: FC<PropsWithChildren> = (props) => {
	return (
		<AppShell padding={0} header={<LayoutHeader />} footer={<LayoutFooter />}>
			<Container px="6rem" size={1440}>
				{props.children}
			</Container>
		</AppShell>
	)
}

export default MainLayout
