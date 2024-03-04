import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
// TODO Implement Logout functionality

const Logout = () => {
	const { authUser, setAuthUser}= useAuthContext();
	const handleLogout = async () => {
		try {
            const res = await fetch("/api/auth/logout", {credentials: "include"});
			const data = await res.json();
			console.log(data);
			setAuthUser(null);
            
        } catch (err) {
            toast.error(err.message);
        }
	}
	return (
		<>
			<img
				src={authUser?.avatarUrl}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div className='p-2.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
			onClick={handleLogout}
			>
				<MdLogout size={24} />
			</div>
		</>
	);
};
export default Logout;