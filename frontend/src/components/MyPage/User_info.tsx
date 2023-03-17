import style from './User_info.module.scss';
import Image from 'next/image';

const User_info = () => {
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    console.log("hello");
  };
  return (
    <div className={style.userInfo}>
      <div className={ style.userInfo_leftImg}>
        <Image src="/assets/image/user_profile_img.png" alt="image" width={100} height={100}/>
      </div>
      <div className={ style.userInfo_rightDesc}>
        <h3><Image src="/assets/icons/BookmarkCheckedIMG.png" alt="image" width={20} height={20} /> BookMark(55)</h3>
        <h3><Image src="/assets/icons/LikeCheckedICON.png" alt="image" width={20} height={20}/> Likes(38)</h3>     
      </div>
      <div className={style.user_info_setting}>
        <Image src="/assets/icons/user_info_setting_btn.png" alt="image" width={30} height={30} onClick={ onClickHandler}/>
      </div>
  </div>
  )
}

export default User_info;