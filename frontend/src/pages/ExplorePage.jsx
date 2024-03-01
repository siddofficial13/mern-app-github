const ExplorePage = () => {
	return (
		<div className='px-4 py-14'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories Among These Techstacks...</h1>
				<div className='flex flex-wrap gap-4 my-4 justify-center p-4'>
					<img src='/javascript.svg' alt='JavaScript' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/typescript.svg' alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/c++.svg' alt='C++ logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/python.svg' alt='Python logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/java.svg' alt='Java logo' className='h-11 sm:h-20 cursor-pointer' />
				</div>
        <div className='flex flex-wrap gap-4 my-4 justify-center p-4'>
					<img src='/vite.svg' alt='Vite' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/swift.svg' alt='Swift logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/csharp.svg' alt='C# logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/css.svg' alt='CSS logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/html.svg' alt='Html logo' className='h-11 sm:h-20 cursor-pointer' />
				</div>
			</div>
		</div>
	);
};
export default ExplorePage