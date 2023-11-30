import styles from './memberprofile.module.css';

const MemberProfile: React.FC<{ name: string; image: string }> = ({ name, image }) => {
    return (
      <div className={styles.profile}>
        <img src={image} alt={`${name}-image`} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p>Fullstack Developer</p>
      </div>
    );
};
  
export default MemberProfile;