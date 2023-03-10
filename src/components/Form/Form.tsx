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
  const errorMessage = useAppSelector((state) => state.auth.error?.data.error);
  const errorStatus = useAppSelector((state) => state.auth.error?.status);
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
      {errorStatus === 400 && (
        <div className={styles.errorStatus}>
          try to use
          <br /> email: eve.holt@reqres.in <br /> password: pistol
        </div>
      )}
      <p className={styles.title}>??????????????????????</p>
      <Input
        label="??????"
        type="text"
        refElement={userNameInput}
        valid={userNameValid}
        validText={"???????????????????????? ??????"}
      />
      <Input
        label="?????????????????????? ??????????"
        type="text"
        refElement={emailInput}
        valid={emailValid}
        validText={"???????????????????????? email"}
      />
      <div className={styles.passWrapper}>
        <Input
          label="????????????"
          type={visiblePass ? "text" : "password"}
          refElement={passwordInput}
          valid={passwordValid}
          validText={"???????????? ????????????????????"}
        />
        <Button
          type="button"
          onClick={() => dispatch(toggleVisiblePass())}
          tab={-1}
          classesBtn={[
            "passBtn",
            `${visiblePass ? "passBtnShow" : "passBtnHide"}`,
          ]}
        ></Button>
      </div>
      <div className={styles.passWrapper}>
        <Input
          label="?????????????????????????? ????????????"
          type={visibleRepeatPass ? "text" : "password"}
          refElement={repeatPasswordInput}
          valid={repeatPasswordValid}
          validText={"???????????? ???? ??????????????????"}
        />
        <Button
          type="button"
          onClick={() => dispatch(toggleVisibleRepeatPass())}
          tab={-1}
          classesBtn={[
            "passBtn",
            `${visibleRepeatPass ? "passBtnShow" : "passBtnHide"}`,
          ]}
        ></Button>
      </div>

      <Button type="submit" classesBtn={["formBtn"]}>
        ????????????????????????????????????
      </Button>
    </form>
  );
};
