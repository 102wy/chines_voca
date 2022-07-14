import React, { useEffect, useRef, useState } from 'react';
import styles from './voca_item.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPenToSquare, faRightToBracket, faXmark } from '@fortawesome/free-solid-svg-icons'

const VocaItem = (props) => {
    const word = useSelector((state) => state.word.voca);
    const index = props.index;

    return (
        <li className={styles.item} >
            <h5>{word[index].word_title}</h5>
            <span>[{word[index].word_pronunciation}]</span>
            <p>{word[index].word_mean}</p>
            <div>{word[index].word_ex_ch}</div>
            <div>{word[index].word_ex_kr}</div>
            <div className={styles.buttonBox}>
                <button><FontAwesomeIcon icon={faCircleCheck} className={styles.buttonIcon} /></button>
                <button><FontAwesomeIcon icon={faPenToSquare} className={styles.buttonIcon} /></button>
                <button><FontAwesomeIcon icon={faXmark} className={styles.buttonIcon} /></button>
            </div>
        </li>
    );
}

export default VocaItem;