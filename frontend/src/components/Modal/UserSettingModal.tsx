import { useState } from "react";
import { userType } from "../../type/userTypes";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import style from "./UserSettingModal.module.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/modules/user";
import { useRouter } from "next/router";

interface propsType {
  setVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
  user_info: userType;
}

const UserSettingModal: React.FunctionComponent<propsType> = ({
  setVisible,
  visible,
  user_info,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<string>("");
  //회원탈퇴가 들어갈 axios 입니다. (회원탈퇴하고 메인페이지로 보내주어야하고 ATK 초기화.)
  const deleteAccount = () => {
    const withdrawal = axios
      .delete("https://j8b208.p.ssafy.io/api/oauth/kakao/delete", {
        headers: {
          Authorization: accessToken,
        },
      })
      .then(function (withdrawal) {
        //제대로 동작하면
        console.log(withdrawal);
        dispatch(logout()); //토큰 없애고
        router.push("/"); //랜딩페이지로 이동.
      })
      .catch((err) => {
        console.log(accessToken);

        console.log(err);
      });
  };

  const putAccount = () => {
    const put = axios
      .put("https://j8b208.p.ssafy.io/api/oauth/users", {
        headers: {
          Authorization: accessToken,
        },
        body: {
          user_gender: gender,
          user_age_range: age,
        },
      })
      .then(function (put) {
        //제대로 동작하면
        console.log(put);
        dispatch(logout()); //토큰 없애고
        router.push("/"); //랜딩페이지로 이동.
      })
      .catch((err) => {
        console.log(accessToken);

        console.log(err);
      });
  };

  const changeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setAge(target.value);
  };

  const changeGender = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    setGender(target.value);
  };

  return (
    <div className={style.userSettingModal}>
      <div className={style.userSettingModal_header}>
        <img
          className={style.userSettingModal_header_left}
          src="/assets/image/logo.png"
        ></img>
        <img
          className={style.userSettingModal_header_right}
          src="/assets/icons/topbar_img.png"
          onClick={() => {
            setVisible(!visible);
          }}
        />
      </div>
      <h2>개인 정보 수정</h2>
      <div className={style.userSettingModal_content}>
        <div className={style.userSettingModal_leftImg}>
          <img src="/assets/image/user_profile_img.png"></img>
        </div>
        <div className={style.userSettingModal_rightDesc}>
          <div>
            <p>이름 {user_info.user_name}</p>
          </div>
          <div>
            <p>이메일 {user_info.user_email}</p>
          </div>
          <div className={style.userSettingModal_rightDesc_age}>
            <label>연령대 </label>
            <input
              defaultValue={user_info.user_age_range}
              onChange={changeAge}
            />
            대
          </div>
          <div>
            <label>성별 </label>
            <input
              type="radio"
              name="gender"
              value="male"
              onClick={changeGender}
            />
            남
            <input
              type="radio"
              name="gender"
              value="female"
              onClick={changeGender}
            />
            여
          </div>
          <div>
            <span>선택 약관 동의 </span>
            <AiOutlineCheckCircle />
            <span>개인 정보 수집, 이용 동의(선택)</span>
          </div>
        </div>
      </div>
      <div className={style.userSettingModal_button}>
        <button
          className={style.userSettingModal_button_exit}
          onClick={deleteAccount}
        >
          회원 탈퇴
        </button>
        <button
          className={style.userSettingModal_button_update}
          onClick={putAccount}
        >
          개인정보 수정
        </button>
      </div>
    </div>
  );
};

export default UserSettingModal;
