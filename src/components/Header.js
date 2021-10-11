import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import img1 from "../image/img1.jpg";

export default function Header() {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <Link to="./Home" className={styles.link}>
          <FontAwesomeIcon className={styles.icon} icon={faHome} />
          <span className={styles.mainTxt}>외국어 공부</span>
        </Link>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <Link to="./WordList" className={styles.listLink}>
              단어장
            </Link>
          </li>
          <li>
            <Link to="./Papers" className={styles.listLink}>
              읽을거리
            </Link>
          </li>
          <li>
            <Link to="./Community" className={styles.listLink}>
              커뮤니티
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img className={styles.profile} src={img1} alt="profile" />
      </div>
    </div>
  );
}
