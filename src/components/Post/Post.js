import React, { useState } from 'react';
import './Post.css';
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../dummyData';

const Post = ({ post }) => {
	const { desc, photo, date, like, comment, userId } = post;
	const [likes, setLikes] = useState(like);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => {
		setLikes(isLiked ? likes - 1 : likes + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							src={Users.filter((u) => u.id === userId)[0].profilePicture}
							alt=""
							className="postProfileImg"
						/>
						<span className="postUserName">
							{Users.filter((u) => u.id === userId)[0].username}
						</span>
						<span className="postDate">{date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{desc}</span>
					<img className="postImg" src={photo} alt="" srcset="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							className="likeIcon"
							src="/assets/like.png"
							alt=""
							onClick={likeHandler}
						/>
						<img
							className="likeIcon"
							src="/assets/heart.png"
							alt=""
							onClick={likeHandler}
						/>
						<span className="postLikeCounter">{likes}</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
