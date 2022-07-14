import React, { useEffect, useRef } from 'react';
import styles from './voca_write.module.scss';
import { useDispatch } from 'react-redux';
import { db } from '../../firebase';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { addWordFB } from '../../redux/modules/word';
import { useNavigate } from 'react-router-dom';

const VacaWrite = (props) => {

    const inputRef = useRef([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addWords = (e) => {
        e.preventDefault();
        // let value = inputRef.current.map((item, index) => item.value);
        dispatch(addWordFB({ word_title: inputRef.current[0].value, word_pronunciation: inputRef.current[1].value, word_mean: inputRef.current[2].value, word_ex_ch: inputRef.current[3].value, word_ex_kr: inputRef.current[4].value, }))
        navigate(`/`);

    }
    return (
        <div className={styles.write}>
            <h5 className={styles.title}>단어 추가하기</h5>
            <form>
                <ul>
                    <li>
                        <label htmlFor="input-word">단어</label>
                        <input type="text" id='input-word' maxLength='8' ref={el => (inputRef.current[0] = el)} required />
                    </li>
                    <li>
                        <label htmlFor="input-word">병음</label>
                        <input type="text" id='input-word' maxLength='16' ref={el => (inputRef.current[1] = el)} required />
                    </li>
                    <li>
                        <label htmlFor="input-word">의미</label>
                        <input type="text" id='input-word' maxLength='20' ref={el => (inputRef.current[2] = el)} required />
                    </li>
                    <li>
                        <label htmlFor="input-word">예문</label>
                        <input type="text" id='input-word' maxLength='30' ref={el => (inputRef.current[3] = el)} required />
                    </li>
                    <li>
                        <label htmlFor="input-word">해석</label>
                        <input type="text" id='input-word' maxLength='30' ref={el => (inputRef.current[4] = el)} required />
                    </li>
                </ul>
                <button onClick={addWords}>저장하기</button>
            </form>
        </div>
    );
}

export default VacaWrite;