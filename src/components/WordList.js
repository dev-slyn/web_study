import { useEffect, useState } from 'react';
import styles from '../css/WordList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function WordList() {
  const [wordList, setWordList] = useState([]);
  const [countList, setCountList] = useState([0]);

  useEffect(() => {
    fetch('http://localhost:3001/lists')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWordList(data);
      });
  }, []);

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
  const [input, setInput] = useState('');

  const onTextChange = (e) => {
    setInput(e.target.value);
  };

  const onCheckEnter = (e) => {
    if (e.key === 'Enter') {
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
    <div >
      <div>
        <div className={styles.wordList}>{wordList.name}dd</div>
      </div>
      <div  countList={countList}>
        {countList &&
          countList.map((item, i) => (
            <div>
              <div onKeyPress={onCheckEnter}>
                {isOpenInputBox && (
                  <input
                    onSubmit={inputSubmit}
                    value={input}
                    onChange={onTextChange}
                    type="text"
                  />
                )}
              </div>
              <div>{isOpenInput && input}</div>
              <div>
                {isOpendBtn && (
                  <div onClick={toggle} className={styles.addBtn}>
                    <FontAwesomeIcon
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
