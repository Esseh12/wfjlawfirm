const App = () => {
	return (
		<div className='min-h-screen bg-gray-100 flex items-center justify-center'>
			<div className='bg-white p-8 rounded-lg shadow-lg text-center'>
				<h1 className='text-2xl font-bold text-gray-800 mb-4'>
					Hello, Tailwind + React! 👋
				</h1>
				<p className='text-gray-600 mb-6'>
					If this looks styled, Tailwind is working! 🎉
				</p>
				<button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
					Click Me
				</button>
			</div>
		</div>
	);
};

export default App;
