const SortRepos = () => {
	return (
		<div className='mb-2 flex justify-center lg:justify-end p-4'>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass transition-colors duration-200  
                hover:bg-gray-800`}
			>
				Most Recent
			</button>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass transition-colors duration-200  
                hover:bg-gray-800`}
			>
				Most Stars
			</button>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass transition-colors duration-200  
                hover:bg-gray-800`}
			>
				Most Forks
			</button>
		</div>
	);
};

export default SortRepos