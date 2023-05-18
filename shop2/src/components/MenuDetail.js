import { useState, useEffect } from "react";

const MenuDetail = ({ menuData }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [doubleChecked, setDoubleChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCarouselIndex((carouselIndex + 1) % 2);
    }, 3000);
  });

  return (
    <div className="menu-detail-container">
      <div className="menu-info">
        <div className="menu-carousel">
          {carouselIndex == 0 ? (
            <div>
              <img src={"img/" + menuData.carouselImgName[0]} />
            </div>
          ) : (
            <div>
              <img src={"img/" + +menuData.carouselImgName[1]} />
            </div>
          )}
        </div>
        <div className="menu-info-detail">
          <div className="menu-info-detail">
            <h2>{menuData.menuName}</h2>
            <p>{menuData.desc}</p>
            {menuData.option ? (
              <div className="option">
                <input
                  type="checkbox"
                  name="option_chk"
                  onClick={() => setDoubleChecked(!doubleChecked)}
                ></input>
                <span>한솥밥 곱빼기</span>
                <span>+300원</span>
              </div>
            ) : null}
            <div className="total"></div>
            <span>기본가격:{menuData.price}</span>&nbsp;&nbsp;&nbsp;
            <span>
              최종가격:{" "}
              {doubleChecked == true
                ? Number(menuData.price) + Number(menuData.option.doublePrice)
                : Number(menuData.price)}
            </span>
          </div>
        </div>
      </div>
      <div className="menu-info-more">열량, 알레르기</div>
    </div>
  );
};
export default MenuDetail;
