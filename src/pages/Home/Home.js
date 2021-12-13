import React from 'react';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/RightBar/RightBar';
import SideBar from '../../components/SideBar/SideBar';
import Topbar from '../../components/Topbar/Topbar';
import './Home.css';

const Home = () => {
	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<SideBar />
				<Feed />
				<RightBar />
			</div>
		</>
	);
};

export default Home;
