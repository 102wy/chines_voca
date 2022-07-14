// import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

// const wordSlice = createSlice({
//   name: "word",
//   initialState: {
//     voca: [
//       {
//         id: "0",
//         word_title: "走",
//         word_pronunciation: "zǒ",
//         word_mean: "걷다 / 뛰다 / 움직이다 / 떠나다",
//         word_ex_ch: "那么，我们走吧？",
//         word_ex_kr: "어디, 이제 그만 일어날까?",
//       },
//       {
//         id: "1",
//         word_title: "走",
//         word_pronunciation: "zǒ",
//         word_mean: "걷다 / 뛰다 / 움직이다 / 떠나다",
//         word_ex_ch: "那么，我们走吧？",
//         word_ex_kr: "어디, 이제 그만 일어날까?",
//       },
//     ],
//   },
//   reducers: {
//     createWord: (state, action) => {
//       state.word_title.push(action.payload[0]);
//       state.word_pronunciation = action.payload[1];
//       state.word_mean = action.payload[2];
//       state.word_ex_ch = action.payload[3];
//       state.word_ex_kr = action.payload[4];
//     },
//   },
// });

// export const { changeWord, createWord } = wordSlice.actions;
// export default wordSlice.reducer;
