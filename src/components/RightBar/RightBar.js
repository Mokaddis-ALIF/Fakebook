import React from 'react';
import './RightBar.css';
import { Users } from '../../dummyData';

const RightBar = ({ profile }) => {
	const HomeRightBar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img src="/assets/gift.png" alt="" className="birthdayImg" />
					<span className="birthdayText">
						<b>Karim</b> and <b>3 other friends</b> have birthday today.
					</span>
				</div>

				<div className="adContainer">
					<img src="/assets/coffee.jpg" alt="" className="rightbarAd" />
				</div>
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					{Users.map((user) => (
						<li key={user.id} className="rightbarFriend">
							<div className="rightbarProfileImgContainer">
								<img
									src={user?.profilePicture}
									alt=""
									className="rightbarProfileImg"
								/>
								<span className="rightbarOnline"></span>
							</div>
							<span className="rightbarUserName">{user?.username}</span>
						</li>
					))}
				</ul>
			</>
		);
	};
	const ProfileRightBar = () => {
		return (
			<>
				<h4 className="rightbarTitle">User information</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">City:</span>
						<span className="rightbarInfoValue">New York</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">From:</span>
						<span className="rightbarInfoValue">Madrid</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Relationship:</span>
						<span className="rightbarInfoValue">Single</span>
					</div>
				</div>
				<h4 className="rightbarTitle">User friends</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src="assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/2.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/3.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/4.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/5.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/6.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">John Carter</span>
					</div>
				</div>
			</>
		);
	};
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<ProfileRightBar />
			</div>
		</div>
	);
};

export default RightBar;
