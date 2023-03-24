import { useState } from 'react';
import Modal_portal from '../Modal/Modal_portal';
import style from './User_info.module.scss';
import Image from 'next/image';
import UserSettingModal from '../Modal/UserSettingModal';
import { userType } from '../../pages/mypage';
import { imgLoader } from '../../utils/imgLoader';
import { ImageLoaderProps } from 'next/image';

const User_info = (user_props: userType) => {
  const user_info = user_props;
  console.log(user_info);

  const [visible,setVisible] = useState(false);
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    console.log("sdsdsd");
    setVisible(!visible);
  };


  return (
    <>
      {visible &&
      <Modal_portal>
          <UserSettingModal setVisible={setVisible} visible={visible} user_info={ user_info} />
      </Modal_portal>}
      <div className={style.userInfo}>
        <div className={ style.userInfo_leftImg}>
          <Image src="/assets/image/user_profile_img.png" loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })} alt="image" width={100} height={100}/>
        </div>
        <div className={ style.userInfo_rightDesc}>
          <h3><Image src="/assets/icons/BookmarkCheckedIMG.png" loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })} alt="image" width={20} height={20} /> BookMark(55)</h3>
          <h3><Image src="/assets/icons/LikeCheckedICON.png" loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })} alt="image" width={20} height={20}/> Likes(38)</h3>     
        </div>
        <div className={style.user_info_setting}>
          <Image src="/assets/icons/user_info_setting_btn.png" loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })} alt="image" width={30} height={30} onClick={ onClickHandler}/>
        </div>
      </div>
    </>
  )
}

export default User_info;