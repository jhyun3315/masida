import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

import style from "./Star.module.scss";

interface propsType {
  setScope: Dispatch<SetStateAction<number>>;
  current: number;
  rated: boolean;
}

const Star: React.FunctionComponent<propsType> = ({
  setScope,
  current,
  rated,
}) => {
  const [rating, setRating] = useState<number>(current);

  useEffect(() => {
    setScope(0);
    setRating(0);
  }, [rated]);

  const handleRating = (e: React.MouseEvent<HTMLElement>, value: number) => {
    const target = e.target as HTMLInputElement;
    const boundingRect = target.getBoundingClientRect();

    const starWidth = boundingRect.width;
    const clickX = e.clientX - boundingRect.left;

    let score = clickX / starWidth;

    score = value - 1 + Math.max(Math.min(score, 5), 0);
    if (score < 1) {
      score = 1;
    } else if (score < 2) {
      score = 2;
    } else if (score < 3) {
      score = 3;
    } else if (score < 4) {
      score = 4;
    } else if (score < 5) {
      score = 5;
    }
    setRating(score);
    setScope(parseFloat(score.toFixed(0)));
  };

  const getStarColor = (value: number, count: number) => {
    const filledCount = Math.floor(value);
    const filledWidth = value - filledCount;
    const starElements = [];

    for (let i = 0; i < filledCount; i++) {
      starElements.push(
        <span key={`filled-${i}`} style={{ color: "gold" }}>
          ★
        </span>
      );
    }

    if (filledWidth > 0) {
      const gradient = `linear-gradient(90deg, gold ${
        filledWidth * 100
      }%, #fff ${filledWidth * 100}%)`;
      const style = {
        backgroundImage: gradient,
        backgroundSize: "100% 100%",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
      };
      starElements.push(
        <span key="partially-filled" style={style}>
          ★
        </span>
      );
    } else {
      const style = {
        color: "transparent",
      };
    }

    for (let i = 0; i < count - filledCount - 1; i++) {
      starElements.push(
        <span key={`empty-${i}`} style={{ color: "#bbb" }}>
          ☆
        </span>
      );
    }
    return <div>{starElements}</div>;
  };

  return (
    <div className={style.reviewForm}>
      <div className={style.reviewInner}>
        <div className={style.ratingBox}>
          <div>
            {[1, 2, 3, 4, 5].map((value, index) => (
              <span
                style={{ zIndex: 100 }}
                key={value}
                onClick={(event) => {
                  handleRating(event, index + 1);
                }}
              >
                ☆
              </span>
            ))}
          </div>
          <div className={style.starArea}>{getStarColor(rating, 5)}</div>
        </div>
        <div className={style.rating_count}>{rating.toFixed(1)}</div>
      </div>
    </div>
  );
};

export default Star;
