import style from "../styles/Ribbon.module.css";

const Ribbon = () => {
  return (
    <div className={style.ribbon}>
      <div className={style.red}></div>
      <div className={style.blue}></div>
      <div className={style.red}></div>
      <div className={style.white}></div>
      <div className={style.red}></div>
      <div className={style.blue}></div>
      <div className={style.red}></div>
    </div>
  );
};

export default Ribbon;
