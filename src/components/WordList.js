import { useState } from "react";
import styles from "../css/WordListSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function WordList() {
  const [countList, setCountList] = useState([0]);

  const onAddSection = () => {
    setIsOpenInputBox(false);
    setIsOpendBtn(true);
    setIsOpenInput(false);
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    setCountList(countArr);
    console.log(countList);
  };
  const [isOpenInputBox, setIsOpenInputBox] = useState(false);
  const [isOpendBtn, setIsOpendBtn] = useState(true);
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [input, setInput] = useState("");

  let count = 0;
  const onTextChange = (e) => {
    setInput(e.target.value);
  };

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  function toggle() {
    setIsOpenInputBox((wasOpened) => !wasOpened);
    setIsOpendBtn((wasOpendBtn) => !wasOpendBtn);
  }
  function inputSubmit() {
    setIsOpenInputBox((wasOpened) => !wasOpened);
  }
  function onSubmit() {
    setIsOpenInputBox((wasOpened) => !wasOpened);
    setIsOpenInput((wasOpened) => !wasOpened);
    onAddSection();
  }

  return (
    <div>
      <div countList={countList}>
        {countList &&
          countList.map((item, i) => (
            <div>
              <div onKeyPress={onCheckEnter}>
                {isOpenInputBox && (
                  <input
                    key={count++}
                    onSubmit={inputSubmit}
                    value={input}
                    onChange={onTextChange}
                    type="text"
                  />
                )}
                {console.log(count)}
              </div>
              <div>{isOpenInput && input}</div>
              <div>
                {isOpendBtn && (
                  <div className={styles.addBtn}>
                    <FontAwesomeIcon
                      onClick={toggle}
                      className={styles.plusIcon}
                      icon={faPlus}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
