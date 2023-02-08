import React, { FC, FormEvent, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  checkEmailValid,
  checkFormValid,
  checkPasswordValid,
  checkRepeatPasswordValid,
  checkUserNameValid,
} from "../../app/reducers/formValidSlice";
import {
  toggleVisiblePass,
  toggleVisibleRepeatPass,
} from "../../app/reducers/showPassSlice";
import { auth } from "../../asyncActions/auth";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./Form.module.css";

interface IFormProps {}

export const Form: FC<IFormProps> = () => {
  const userNameInput = useRef<HTMLInputElement | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);
  const repeatPasswordInput = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const userNameValid = useAppSelector(
    (state) => state.formValid.userNameValid
  );
  const emailValid = useAppSelector((state) => state.formValid.emailValid);
  const passwordValid = useAppSelector(
    (state) => state.formValid.passwordValid
  );
  const repeatPasswordValid = useAppSelector(
    (state) => state.formValid.repeatPasswordValid
  );
  const formValid = useAppSelector((state) => state.formValid.formValid);
  const errorMessage = useAppSelector((state) => state.auth.error);
  const loading = useAppSelector((state) => state.loader.loading);
  const visiblePass = useAppSelector((state) => state.visiblePass.visiblePass);
  const visibleRepeatPass = useAppSelector(
    (state) => state.visiblePass.visibleRepeatPass
  );

  useEffect(() => {
    if (formValid) {
      dispatch(auth(emailInput.current?.value, passwordInput.current?.value));
    }
  }, [formValid]);

  function submitForm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(checkUserNameValid(userNameInput.current?.value));
    dispatch(checkEmailValid(emailInput.current?.value));
    dispatch(checkPasswordValid(passwordInput.current?.value));
    dispatch(
      checkRepeatPasswordValid({
        password: passwordInput.current?.value,
        repeatPassword: repeatPasswordInput.current?.value,
      })
    );
    dispatch(checkFormValid());
  }

  return (
    <form
      action=""
      onSubmit={(event) => submitForm(event)}
      className={` ${styles.loginForm} ${loading && styles.formLoading}`}
    >
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      <p className={styles.title}>Регистрация</p>
      <Input
        label="Имя"
        type="text"
        refElement={userNameInput}
        valid={userNameValid}
        validText={"Некорректное имя"}
      />
      <Input
        label="Электронная почта"
        type="text"
        refElement={emailInput}
        valid={emailValid}
        validText={"Некорректный email"}
      />
      <div className={styles.passWrapper}>
        <Input
          label="Пароль"
          type={visiblePass ? "text" : "password"}
          refElement={passwordInput}
          valid={passwordValid}
          validText={"Пароль ненадежный"}
        />
        <Button
          type="button"
          onClick={() => dispatch(toggleVisiblePass())}
          classBtn={`${visiblePass ? "passBtnShow" : "passBtnHide"}`}
        ></Button>
      </div>
      <div className={styles.passWrapper}>
        <Input
          label="Подтверждение пароля"
          type={visibleRepeatPass ? "text" : "password"}
          refElement={repeatPasswordInput}
          valid={repeatPasswordValid}
          validText={"Пароли не совпадают"}
        />
        <Button
          type="button"
          onClick={() => dispatch(toggleVisibleRepeatPass())}
          classBtn={visibleRepeatPass ? "passBtnShow" : "passBtnHide"}
        ></Button>
      </div>

      <Button type="submit" classBtn="formBtn">
        Зарегистрироваться
      </Button>
    </form>
  );
};
