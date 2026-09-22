import profileImage from '../assets/profile.jpg';
const ProfileCard = () => {
    return(<>
     <div className="profile-card">

      <img
        src={profileImage}
        alt="Profile"
        className="profile-image"
      />

      <p>Gokul</p>

      <p className="role">Full Stack Developer</p>

      <button className="profile-button">
        View Profile
      </button>

    </div>
    </>);
}

export default ProfileCard