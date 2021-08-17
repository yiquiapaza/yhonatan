import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
	return (
		<Router>
			<nav className='bg-white py-2 md:py-4'>
				<div className='container px-4 mx-auto md:flex md:items-cente'>
					<div className='flex justify-between items-center'>
						<Link to='/'>
							<h1 className='font-bold uppercase text-xl'>
								Yhonatan J. Iquiapaza
							</h1>
						</Link>
					</div>
					<div className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'>
						<Link
							className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
							to='/'
						>
							<span>Home</span>
						</Link>
						<Link
							className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
							to='/publications'
						>
							<span>Publications</span>
						</Link>
						<Link
							className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
							to='/about'
						>
							<span>About</span>
						</Link>
					</div>
				</div>
			</nav>
		</Router>
	);
};

export default Header;
