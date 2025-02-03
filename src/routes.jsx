import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
	HOME_ROUTE,
	DASHBOARD_ROUTE
} from './utils/consts.js'

const HomePage = lazy(() => import('./Pages/HomePage'))

const DashboardLayout = lazy(() => import('./Layouts/DashboardLayout'))
const DashboardPage = lazy(() => import('./Pages/DashboardPage/index.js'))

export const useRoutes = () => {
	return (
		<Routes>
			<Route path={HOME_ROUTE} element={<HomePage />}>
				<Route index element={<HomePage />} />				
			</Route>
			<Route path={HOME_ROUTE} element={<DashboardLayout />}>
				<Route path={DASHBOARD_ROUTE} element={<DashboardPage />} />
			</Route>

			<Route path="*" element={<HomePage />} />
		</Routes>
	)
}