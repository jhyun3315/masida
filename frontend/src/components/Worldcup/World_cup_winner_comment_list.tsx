import style from "./World_cup_winner_comment_list.module.scss"
import { commentType } from "@/type/commentTypes";
import { detail_props } from "@/type/cocktailTypes";

const World_cup_winner_comments_list = (props : detail_props) =>{
    // id를 기준으로 댓글을 가져온다. (props.cocktail_id)
    
    const comments: commentType[] = [
        {
          comment_id: 1,
          comment_content: "string1",
          comment_rating: 1,
          comment_create_date: "string1",
          comment_difficulty: "string1",
          user_name: "string1",
          user_profile: "string1",
          writer_checker: true,
        },
        {
          comment_id: 2,
          comment_content: "string2",
          comment_rating: 2,
          comment_create_date: "string2",
          comment_difficulty: "string2",
          user_name: "string2",
          user_profile: "string2",
          writer_checker: true,
        },
        {
          comment_id: 3,
          comment_content: "string3",
          comment_rating: 3,
          comment_create_date: "string3",
          comment_difficulty: "string3",
          user_name: "string3",
          user_profile: "string3",
          writer_checker: true,
        },
      ];

    return(
        <>
        {comments.map((key) => (
            <div className={style.winner_cocktail_comment}>
                <div className={style.winner_cocktail_comment_user_comment}></div>
                <div className={style.winner_cocktail_comment_user_rating}></div>
                <div className={style.winner_cocktail_comment_difficulty}></div>
                <div className={style.winner_cocktail_comment_edit}></div>
                
                
                {key.comment_content}</div>
        ))}
        </>
    );
}

export default World_cup_winner_comments_list
