import { useState } from 'react';
import logo from '../assets/images/login-logo.png';
import bgWrapper from '../assets/images/bg_wrapper.png';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	return (
		<div className='min-h-screen bg-[#1b3a68]'>
			<div className='max-w-4xl mx-auto'>
				<div
					style={{
						backgroundImage: `url(${bgWrapper})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						width: '100%',
						height: '40px',
					}}></div>
				{/* Main Content */}

				<div className='bg-white pt-6 pr-6'>
					<div className='bg-blue-900 rounded-full px-4 py-2 text-white ml-auto max-w-fit cursor-pointer'>
						Client Extranet
					</div>
				</div>
				<div className='flex flex-col justify-center items-start bg-white shadow-md'>
					{/* Header */}

					<div className='flex items-center justify-center '>
						{/* Logo and Company Name */}
						<div className='flex items-center relative -top-7.5'>
							<img
								src={logo}
								alt='logo'
								className='object-contain '
							/>
						</div>

						{/* Navigation */}
						<div className='flex items-center gap-7.5 mb-3 border-y-2 border-[#ffb303] py-1.5 mt-5.5 w-2xl '>
							<div className=' text-gray-600 hover:text-gray-800 text-xs'>
								HOME
							</div>
							<button className='text-gray-600 hover:text-gray-800 text-xs'>
								DOCUMENT CENTER
							</button>
							<button className='text-gray-600 hover:text-gray-800 text-xs'>
								REQUEST SERVICE
							</button>
							<button className='text-gray-600 hover:text-gray-800 text-xs'>
								PAYMENTS
							</button>
							<button className='text-gray-600 hover:text-gray-800 text-xs'>
								LOGOUT
							</button>
						</div>
					</div>

					<div className='p-6 bg-[#cfe8ff] max-w-2xl mx-auto my-24 border border-black outline-2 outline-blue-black outline-offset-6'>
						<div className='b-2 mb-4'>
							<h2 className='text-xs font-semibold text-gray-800'>
								Account Login
							</h2>
						</div>

						<div className='grid grid-cols-2 gap-8'>
							{/* Left Column - Sign In */}
							<div className='space-y-4'>
								<div>
									<p className='text-sm text-gray-700 mb-4'>
										<span className='font-semibold'>Sign-In</span> - Enter your
										User Name and Password below to access this system.
									</p>
								</div>

								<div className='space-y-3'>
									<div className='flex items-center'>
										<label className='w-24 text-sm text-gray-700 text-right mr-2'>
											UserName:
										</label>
										<input
											type='text'
											value={username}
											onChange={(e) => setUsername(e.target.value)}
											className='flex-1 px-2 py-1 text-sm focus:outline-none focus:border-blue-500 bg-white'
										/>
									</div>

									<div className='flex items-center'>
										<label className='w-24 text-sm text-gray-700 text-right mr-2'>
											Password:
										</label>
										<input
											type='password'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className='flex-1 px-2 py-1 bg-white  text-sm focus:outline-none focus:border-blue-500'
										/>
									</div>

									<div className='flex justify-center pt-2'>
										<button className='bg-orange-400 hover:bg-orange-500 text-black px-6 py-1 rounded text-sm font-medium border border-orange-600'>
											Login
										</button>
									</div>
								</div>
							</div>

							{/* Right Column - Forgot Password */}
							<div className='space-y-4'>
								<div>
									<p className='text-sm text-gray-700 mb-4'>
										<span className='font-semibold'>
											Forgot Your UserName or Password?
										</span>{' '}
										- Enter your E-Mail address below and your Username and
										Password will be sent to you via E-Mail.
									</p>
								</div>

								<div className='space-y-3'>
									<div className='flex items-center'>
										<label className='w-16 text-sm text-gray-700 text-right mr-2'>
											E-Mail:
										</label>
										<input
											type='email'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className='flex-1 px-2 py-1 bg-white text-sm focus:outline-none focus:border-blue-500'
										/>
									</div>

									<div className='flex justify-center pt-2'>
										<button className='bg-orange-400 hover:bg-orange-500 text-black px-6 py-1 rounded text-sm font-medium border border-orange-600'>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
