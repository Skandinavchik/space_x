import { Link } from 'react-router-dom'
import { navItems } from '../constants'
import { INavItem } from '../types/navBar.type'


const NavBar = () => {

	const renderNavBar = (navItems: INavItem[]) => {
		return navItems.map(navItem => {
			return (
				<li key={navItem.title}>
					<Link
						to={navItem.path}
						className='py-2 font-mono'
					>
						{navItem.title}
					</Link>
				</li>
			)
		})
	}

	return (
		<header>
			<nav className='fixed top-0 w-full px-4 xl:px-0 h-14 bg-slate-50 shadow-md flex justify-center items-center z-50'>
				<ul className='xl:container w-full flex justify-between'>
					{renderNavBar(navItems)}
				</ul>
			</nav>
		</header>
	)
}

export default NavBar