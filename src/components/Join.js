import styles from "../css/Join.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

export default function Join() {
  return (
    <div className={styles.loginPage}>
      <form className={styles.loginForm}>
        <div className={styles.join}>회원가입</div>

        <div className={styles.input}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          <input
            minLength="2"
            id="username"
            name="username"
            type="text"
            placeholder="사용자 이름"
          />
        </div>

        <div className={styles.input}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          <input id="email" name="email" type="email" placeholder="이메일" />
        </div>

        <div className={styles.input}>
          <FontAwesomeIcon className={styles.icon} icon={faKey} />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
          />
        </div>

        <div className={styles.input}>
          <FontAwesomeIcon className={styles.icon} icon={faKey} />
          <input
            id="password_a"
            name="cpassword"
            type="password"
            placeholder="비밀번호 확인"
          />
        </div>
        <div className={styles.btn}>
          <button type="submit" className={styles.joinBtn}>
            완료
          </button>
        </div>
        <div className={styles.alreadyJoin}>
          이미 계정이 있으신가요? <Link to="./Login">로그인</Link>
        </div>
      </form>
    </div>
  );
}
