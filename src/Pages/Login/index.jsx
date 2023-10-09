import { Formik, Form, Field, ErrorMessage } from "formik";
import { Fragment } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "../../App";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebasceConfig";
import styles from "./styles.module.css"; // Import the CSS module
import Nav from "../../Components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";


const Login = () => {
  const valueReceivedByContext = useContext(UserAuthContext);
  const navigate = useNavigate();
  const defaultValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least one number and one uppercase letter, and be at least 6 characters long"
      ),
  });

  const onLogin = async (values) => {
    try {
      // Attempt to log in using Firebase Authentication
      await signInWithEmailAndPassword(auth, values.email, values.password);

      // If login is successful, handle form submission and navigate to the home page
      valueReceivedByContext.handleLogin();
      navigate("/");
      console.log("Form values:", values);
    } catch (error) {
      // If there's an error during login, handle the error (display error message, etc.)
      console.error(error.message);
      // For example, you could update the state to show an error message to the user:
      // setError("Invalid email or password");
    }
  };

  return (<>
  <Nav/>
    <Fragment>
      <div className={styles.main}>
        <div className={styles.container}>
          <Formik
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={onLogin}
          >
            <Form>
              <div className={styles.header}>
                <h2 className={styles.welcome_Text}>Login</h2>
                <label className={styles.email}>Email:</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`${styles.formControl} ${styles.styled_input}`}
                />
                <p className={styles.textDanger}>
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div>
                <label className={styles.email}>Password:</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className={`${styles.formControl} ${styles.styled_input}`}
                />
                <p className={styles.textDanger}>
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div className={styles.forgot_password }>Forgot Password</div>
              <button type="submit" className={`btn ${styles.btn}`}>
                Login
              </button>
              <br />

              <div className={styles.login_with}>
              or use social networks to sign in:
                <div className={styles.icons}>
                  {/* Add your icon components here */}
                  <FontAwesomeIcon icon={faFacebook}  size="2xl" /> &nbsp;
                  <FontAwesomeIcon icon={faTwitter}   size="2xl" />&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faLinkedin}  size="2xl"/>

                </div>

              </div>

              <Link to="/signup">
                
                <button type="submit" className={`btn ${styles.btn}`}>
                  SignIn
                </button>
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
    </>
  );
};

export default Login;
