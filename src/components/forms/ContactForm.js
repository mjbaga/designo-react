
import Button from 'components/common/Button';
import PatternBox from 'components/layout/PatternBox';
import styles from './ContactForm.module.scss';
import useInput from 'hooks/use-input';
import errorIcon from 'assets/images/contact/desktop/icon-error.svg';

const nameFormat = /^[a-zA-Z,'.\-\s]+$/g;
const emailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const numericFormat = /^[0-9\b]+$/;
const isValidName = (value) => value.match(nameFormat);
const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.match(emailFormat);
const isNumeric = (value) => value.match(numericFormat);

const ContactForm = ({ children }) => {

  const errorImage = <img src={errorIcon} alt="error" />;

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isValidName);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty && isNumeric);

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && phoneIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    alert("Thank you for contacting us!");

    resetName();
    resetEmail();
    resetPhone();
    resetMessage();
  };

  return (
    <PatternBox type="bg-pattern-big-circle" classes={styles["contact-form"]}>
      <div className={`${styles.content} flow`}>
        {children}
      </div>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <div className={styles["control-group"]}>
          <div className={styles["form-control"]}>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && <p className={styles["error-text"]}>Must be a valid name!{errorImage}</p>}
          </div>
        </div>
        <div className={styles["control-group"]}>
          <div className={styles["form-control"]}>
            <input
              type='email'
              id='email'
              name='email'
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              placeholder='Email Address'
            />
            {emailHasError && <p className={styles["error-text"]}>Must be a valid email!{errorImage}</p>}
          </div>
        </div>
        <div className={styles["control-group"]}>
          <div className={styles["form-control"]}>
            <input
              type='text'
              id='phone'
              name='phone'
              value={phoneValue}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              placeholder='Phone'
            />
            {phoneHasError && <p className={styles["error-text"]}>Must be a valid phone number!{errorImage}</p>}
          </div>
        </div>
        <div className={styles["control-group"]}>
          <div className={styles["form-control"]}>
            <textarea 
              name="message" 
              id="message" 
              rows="5"
              resize="none"
              placeholder='Your Message'
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              value={messageValue}
            >
            </textarea>
            {messageHasError && <p className={styles["error-text"]}>Can't be empty!{errorImage}</p>}
          </div>
        </div>
        <div className={styles["form-actions"]}>
          <Button classes="btn-light" disabled={!formIsValid} type="button">Submit</Button>
        </div>
      </form>
    </PatternBox>
  )
}

export default ContactForm;