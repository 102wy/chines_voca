import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

const initialState = {
  voca: [
    {
      word_title: "走",
      word_pronunciation: "zǒ",
      word_mean: "걷다 / 뛰다 / 움직이다 / 떠나다",
      word_ex_ch: "那么，我们走吧？",
      word_ex_kr: "어디, 이제 그만 일어날까?",
    },
  ],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word_list) {
  return {
    type: CREATE,
    word_list,
  };
}

//middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "words"));

    let word_list = [];
    word_data.forEach((word) => {
      word_list.push({ id: word.id, ...word.data() });
    });
    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "words"), word);
    const _word = await getDoc(docRef);
    const word_data = { id: _word.id, ..._word.data() };
    dispatch(createWord(word_data));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { voca: action.word_list };
    }
    case "word/CREATE": {
      const newWord = [state, action.word_list];
      return { voca: newWord };
    }
    default:
      return state;
  }
}
