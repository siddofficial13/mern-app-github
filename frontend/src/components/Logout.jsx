import { MdLogout } from "react-icons/md";
// TODO Implement Logout functionality

const Logout = () => {
	return (
		<>
			<img
				src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div className='p-2.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'>
				<MdLogout size={24} />
			</div>
		</>
	);
};
export default Logout;