import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { imgLoader } from '../../utils/imgLoader';
import { ImageLoaderProps } from 'next/image';
import style from './CommentModal.module.scss';

interface propsType{
    setVisible: Dispatch<SetStateAction<boolean>>;
    visible: boolean;
}

const CommentModal: React.FunctionComponent<propsType> = ({ setVisible, visible }) => {
  let [inputValue, setInputValue] = useState<string>("");

  const selectDifficulty = () => {

  }

  const writeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setInputValue(target.value);
  }
  
  return (
    <div className={style.userSettingModal}>
      <h2  onClick={() => {setVisible(!visible)}}>개인 정보 수정</h2>
      <div className={style.comment_sort}>
            <input
              type="radio"
              id="like"
              name="sort"
              className={style.comment_sort_btn}
            />
            <label htmlFor="like" className={style.comment_sort_label}>
              Comment
            </label>
            <input
              type="radio"
              id="rank"
              name="sort"
              className={style.comment_sort_btn}
            />
            <label htmlFor="rank" className={style.comment_sort_label}>
              Like
            </label>
          </div>
          <div className={style.comment_list}>

          </div>
          <div className={style.comment_write}>
            <hr />
            <div className={style.comment_write_box}>
              <div className={style.comment_write_box_left}>
                <Image src="/assets/icons/check.png"
                loader={({ src, width, quality }: ImageLoaderProps) => imgLoader({ src, width, quality })}
                alt="check"
                width={32}
                height={32} />
                댓글 쓰기
              </div>
            <div className={style.comment_write_box_right}>
              <div className={style.difficulty_selector}>
              <input
                type="radio"
                id="high"
                className={style.difficulty_selector_btn}
                name="level"
                value="상"
                onClick={selectDifficulty}
              />
              <label htmlFor="high" className={style.difficulty_selector_lev}>
                상
              </label>
              
              <input
                type="radio"
                id="medium"
                className={style.difficulty_selector_btn}
                name="level"
                value="중"
                onClick={selectDifficulty}
              />
              <label htmlFor="medium" className={style.difficulty_selector_lev}>
                중
              </label>
              
              <input
                type="radio"
                id="low"
                className={style.difficulty_selector_btn}
                name="level"
                value="하"
                onClick={selectDifficulty}
              />
              <label htmlFor="low" className={style.difficulty_selector_lev}>
                하
              </label>
             </div>
            </div>
            </div>
            <div>
              <textarea id="comment" className={style.write_commentarea} value = {inputValue} onChange={writeComment}>
              </textarea>
            </div>
          </div>
    </div>
  )
};

export default CommentModal;