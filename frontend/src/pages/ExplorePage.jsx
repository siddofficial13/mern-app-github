import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Repos from "../components/Repos";
const ExplorePage = () => {
	

	const [loading, setLoading] = useState(false);
	const [repos, setRepos] = useState([]);
	const [selectedLanguage, setSelectedLanguage] = useState('');
	const exploreRepos = async (language) => {
		setLoading(true);
		setRepos([]);

        try{
			const res = await fetch("/api/explore/repos/" + language);
			const {repos} = await res.json();
			setRepos(repos);
			setSelectedLanguage(language); 
		} catch(err){
			toast.error(err.message);
		} finally{
			setLoading(false);
		}
	};
	
	return (
		<div className='px-4 py-14'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories Among These Techstacks...</h1>
				<div className='flex flex-wrap gap-4 my-4 justify-center p-4'>
					<img src='/javascript.svg' alt='JavaScript' className='h-11 sm:h-20 cursor-pointer'
					onClick={() => exploreRepos('javascript')}
					/>
					<img src='/typescript.svg' alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer' 
					onClick={() => exploreRepos('typescript')}
					/>
					<img src='/c++.svg' alt='C++ logo' className='h-11 sm:h-20 cursor-pointer' 
					onClick={() => exploreRepos('c++')}
					/>
					<img src='/python.svg' alt='Python logo' className='h-11 sm:h-20 cursor-pointer' 
					onClick={() => exploreRepos('python')}
					/>
					<img src='/java.svg' alt='Java logo' className='h-11 sm:h-20 cursor-pointer' 
					onClick={() => exploreRepos('java')}
					/>
				</div>
        <div className='flex flex-wrap gap-4 my-4 justify-center p-4'>
					<img src='/swift.svg' alt='Swift logo' className='h-11 sm:h-20 cursor-pointer' 
					onClick={() => exploreRepos('swift')}
					/>
					<img src='/csharp.svg' alt='C# logo' className='h-11 sm:h-20 cursor-pointer' 
					onClick={() => exploreRepos('csharp')}
					/>
					<img src='/css.svg' alt='CSS logo' className='h-11 sm:h-20 cursor-pointer' 
					onClick={() => exploreRepos('css')}
					/>
					<img src='/html.svg' alt='Html logo' className='h-11 sm:h-20 cursor-pointer' 
					onClick={() => exploreRepos('html')}
					/>
				</div>
				{repos.length > 0 && (
					<h2 className='text-lg font-semibold text-center my-4'>
						<span className='bg-gradient-to-br from-blue-500 to-blue-100 text-blue-900 font-medium me-2 px-2.5 py-0.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300'>
							{selectedLanguage.toUpperCase()}{" "}
						</span>
						Repositories
					</h2>
				)}
				{!loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}
				{loading && <Spinner />}
			</div>
		</div>
	);
};
export default ExplorePage