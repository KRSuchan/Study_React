import MenuCard from "./MenuCard";
function MenuRow({ menuInfo, setClickedMenu }) {
  // 3개의 객체를 담은 배열 menuInfo
  return (
    <div className="menu-container-row">
      {menuInfo.map((m, index) => (
        <MenuCard
          menuInfoEach={m}
          setClickedMenu={setClickedMenu}
          cardOrder={index}
        ></MenuCard>
      ))}
    </div>
  );
}
export default MenuRow;
