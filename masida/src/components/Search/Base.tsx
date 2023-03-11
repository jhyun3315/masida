type base = {
  base_name: string;
};

const Base = () => {
  return (
    <>
      <div>
        <h3>베이스</h3>
        <div>
          <label>
            <input type="radio" name="color" value="blue" /> 보드카
          </label>
          <label>
            <input type="radio" name="color" value="red" /> 럼
          </label>
          <label>
            <input type="radio" name="color" value="blue" /> 진
          </label>
          <label>
            <input type="radio" name="color" value="red" /> 데킬라
          </label>
          <label>
            <input type="radio" name="color" value="blue" /> 위스키
          </label>
          <label>
            <input type="radio" name="color" value="red" /> 꼬냑
          </label>
        </div>
      </div>
    </>
  );
};

export default Base;
