import "./closeFriend.css";

function CloseFriend({ user }) {
  return (
    <div>
      <li className="sidebarFriendListItem">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
}

export default CloseFriend;
