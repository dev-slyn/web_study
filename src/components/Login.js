import { Link } from "react-router-dom";
import styles from "../css/Login.module.css";

export default function Login() {
  return (
    <div className={styles.body}>
      <div className={styles.input}>
        <input type="text" placeholder="아이디를 입력하세요." />
        <input type="password" placeholder="비밀번호를 입력하세요." />
      </div>
      <div className={styles.btn}>
        <button className={styles.loginBtn}>
          <Link className={styles.loginTxt} to="./Home">
            로그인
          </Link>
        </button>
      </div>
      <div className={styles.etc}>
        <Link className={styles.idPw} to="./Header">
          아이디/비밀번호 찾기
        </Link>
        <Link className={styles.join} to="./Join">
          회원가입
        </Link>
      </div>
    </div>
  );
}
