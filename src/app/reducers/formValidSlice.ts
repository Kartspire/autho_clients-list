import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPassword } from "../../models/IPassword";

interface IFormState {
  formValid: boolean;
  userNameValid: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  repeatPasswordValid: boolean;
}

const initialState: IFormState = {
  formValid: false,
  userNameValid: false,
  emailValid: false,
  passwordValid: false,
  repeatPasswordValid: false,
};

const formValidSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    checkUserNameValid(state, action: PayloadAction<string | undefined>) {
      !action.payload?.match(/^[а-яА-ЯёЁa-zA-Z]+$/)
        ? (state.userNameValid = true)
        : (state.userNameValid = false);
    },
    checkEmailValid(state, action: PayloadAction<string | undefined>) {
      !action.payload?.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
        ? (state.emailValid = true)
        : (state.emailValid = false);
    },
    checkPasswordValid(state, action: PayloadAction<string | undefined>) {
      // /^(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/

      !action.payload?.match(/^[а-яА-ЯёЁa-zA-Z]+$/)
        ? (state.passwordValid = true)
        : (state.passwordValid = false);
    },
    checkRepeatPasswordValid(state, action: PayloadAction<IPassword>) {
      action.payload.repeatPassword !== action.payload.password
        ? (state.repeatPasswordValid = true)
        : (state.repeatPasswordValid = false);
    },
    checkFormValid(state) {
      if (
        !state.userNameValid &&
        !state.emailValid &&
        !state.passwordValid &&
        !state.repeatPasswordValid
      ) {
        state.formValid = true;
      } else state.formValid = false;
    },
    resetValid(state) {
      state.formValid = false;
      state.userNameValid = false;
      state.emailValid = false;
      state.passwordValid = false;
      state.repeatPasswordValid = false;
    },
  },
});

export default formValidSlice.reducer;
export const {
  checkUserNameValid,
  checkEmailValid,
  checkPasswordValid,
  checkRepeatPasswordValid,
  checkFormValid,
  resetValid,
} = formValidSlice.actions;
