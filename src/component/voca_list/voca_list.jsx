import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VocaItem from './voca_item';
import styles from './voca_list.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../firebase';
import { collection, getDoc, getDocs, addDoc } from 'firebase/firestore';
import { loadWordFB } from '../../redux/modules/word';

const VocaList = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadWordFB());
    })
    const word = useSelector((state) => state.word.voca);
    const navigate = useNavigate();

    return (
        <>
            <ul className={styles.list}>
                {word.map((word, index) => <VocaItem key={index} index={index} />)}
            </ul>
            <div className={styles.togo} onClick={() => navigate(`/write`)}>
                <span>
                    <FontAwesomeIcon icon={faPlus} className={styles.plus} />
                </span>
            </div>
        </>
    );

}
export default VocaList;