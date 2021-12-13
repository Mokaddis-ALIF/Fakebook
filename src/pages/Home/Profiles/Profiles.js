import React from 'react';
import Feed from '../../../components/Feed/Feed';
import RightBar from '../../../components/RightBar/RightBar';
import SideBar from '../../../components/SideBar/SideBar';
import Topbar from '../../../components/Topbar/Topbar';
import './Profiles.css';

const Profiles = () => {
	return (
		<div>
			<Topbar />
			<div className="profile">
				<SideBar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src="/assets/post/3.jpeg"
								alt=""
								className="profileCoverImg"
							/>
							<img
								src="/assets/person/7.jpeg"
								alt=""
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">Alif</h4>
							<span className="profileInfoDesc">Hello!</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed />
						<RightBar profile />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profiles;
