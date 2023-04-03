import { useState, useEffect } from "react";
import Modal_portal from "../Modal/Modal_portal";
import style from "./User_info.module.scss";
import Image from "next/image";
import UserSettingModal from "../Modal/UserSettingModal";
import { userType } from "../../type/userTypes";
import { imgLoader } from "../../utils/imgLoader";
import { ImageLoaderProps } from "next/image";

import { RootState, store } from "../../../store/store";
import axios from "axios";

interface MyComponentProps {
  userInfo: userType;
  bookmarkModify: boolean;
}

const User_info: React.FC<MyComponentProps> = ({
  userInfo,
  bookmarkModify,
}) => {
  const [likesCnt, setLikesCnt] = useState<number>();
  const [booksCnt, setBooksCnt] = useState<number>();
  const [visible, setVisible] = useState(false);

  const getUserInfo = store.getState().user.userInfo;

  useEffect(() => {
    // const atk = useSelector((state:RootState) => state.user.accessToken);
    const atk = store.getState().user.accessToken;
    axios
      .get("/api/mypage/cnt", {
        headers: {
          Authorization: atk,
        },
      })
      .then((response) => {
        const result = response.data.data;
        setBooksCnt(result.bookmark_count);
        setLikesCnt(result.likes_count);
        console.log(response);
      });
  }, [bookmarkModify]);

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setVisible(!visible);
  };

  return (
    <>
      {visible && (
        <Modal_portal>
          <UserSettingModal
            setVisible={setVisible}
            visible={visible}
            user_info={userInfo}
          />
        </Modal_portal>
      )}
      <div className={style.userInfo}>
        <div className={style.userInfo_leftImg}>
          <Image
            src={ getUserInfo.user_profile}
            loader={({ src, width, quality }: ImageLoaderProps) =>
              imgLoader({ src, width, quality })
            }
            alt="image"
            width={100}
            height={100}
          />
        </div>
        <div className={style.userInfo_rightDesc}>
          <h3>
            <Image
              src="/assets/icons/BookmarkCheckedIMG.png"
              loader={({ src, width, quality }: ImageLoaderProps) =>
                imgLoader({ src, width, quality })
              }
              alt="image"
              width={20}
              height={20}
            />{" "}
            BookMark({booksCnt})
          </h3>
          <h3>
            <Image
              src="/assets/icons/LikeCheckedICON.png"
              loader={({ src, width, quality }: ImageLoaderProps) =>
                imgLoader({ src, width, quality })
              }
              alt="image"
              width={20}
              height={20}
            />{" "}
            Likes({likesCnt})
          </h3>
        </div>
        <div className={style.userInfo_setting}>
            <Image 
            className={style.button}
              src="/assets/icons/user_info_setting_btn.png"
              loader={({ src, width, quality }: ImageLoaderProps) =>
                imgLoader({ src, width, quality })
              }
              alt="image"
              width={30}
              height={30}
              onClick={onClickHandler}
            />
        </div>
      </div>
    </>
  );
};

export default User_info;
