import { userType } from '../../pages/mypage';
import { Dispatch, SetStateAction } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import style from './UserSettingModal.module.scss';

interface propsType{
    setVisible: Dispatch<SetStateAction<boolean>>;
    visible: boolean;
    user_info: userType;
}
  


const UserSettingModal: React.FunctionComponent<propsType> = ({ setVisible, visible,user_info }) => {
  
  return (
    <div className={style.userSettingModal}>
      <div className={style.userSettingModal_header}>
        <img className={ style.userSettingModal_header_left} src="/assets/image/logo.png"></img>
        <img className={style.userSettingModal_header_right} src="/assets/icons/topbar_img.png" onClick={() => {setVisible(!visible)}}/>
      </div>
      <h2>개인 정보 수정</h2>
      <div className={style.userSettingModal_content}>
        <div className={ style.userSettingModal_leftImg}>
          <img src="/assets/image/user_profile_img.png"></img>
        </div>
        <div className={ style.userSettingModal_rightDesc}>
          <div>
            <p>이름 { user_info.user_name}</p>
          </div>
          <div>
            <p>이메일 { user_info.user_email}</p>
          </div>
          <div className={ style.userSettingModal_rightDesc_age}>
            <label>연령대 </label>
            <input defaultValue={user_info.user_age_range}/>대
          </div>
          <div>
            <label>성별 </label>
            <input type="radio" />남
            <input type="radio"/>여
          </div>
          <div>
            <span>선택 약관 동의 </span>
            <AiOutlineCheckCircle/>
            <span>개인 정보 수집, 이용 동의(선택)</span>
          </div>
        </div>
      </div>
      <div className={ style.userSettingModal_button}>
        <button className={ style.userSettingModal_button_exit}>회원 탈퇴</button>
        <button className={ style.userSettingModal_button_update}>개인정보 수정</button>
      </div>
    </div>
  )
};

export default UserSettingModal;