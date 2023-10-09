import { Formik, Form, Field } from "formik";
import { Fragment } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../FirebasceConfig";
import { setDoc, doc } from "firebase/firestore";
import Nav from "../../Components/Navbar";
import styles from "./styles.module.css"; // Import the CSS module

const SignUp = () => {
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please enter your email"),
    contactNumber: yup.string().required("Please enter your contact number"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least one number and one uppercase letter, and be at least 6 characters long"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const handleSignup = async (values) => {
    navigate("/login");
    console.log("Form values:", values);
    await FSignup(values);
  };

  const FSignup = async (values) => {
    try {
      const { email, password, name, contactNumber } = values;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        name,
        email,
        contactNumber,
        password,
      });

      console.log("User data saved to Firestore:", {
        name,
        email,
        contactNumber,
      });
    } catch (error) {
      console.error(error.message);
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
            onSubmit={handleSignup}
          >
            <Form>
              <div className={styles.header2}>
                <div>
                  <h2 className={styles.welcome_Text}>Signup</h2>
                  <label className={styles.label}>Name:</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className={`form-control ${styles.styled_input}`}
                  />
                </div>
              </div>
              <div className={styles.header2}>
                <div>
                  <label className={styles.label}>Email:</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`form-control ${styles.styled_input}`}
                  />
                </div>
              </div>
              <div className={styles.header2}>
                <div>
                  <label className={styles.label}>Contact number:</label>
                  <Field
                    type="text"
                    name="contactNumber"
                    placeholder="Enter your contact number"
                    className={`form-control ${styles.styled_input}`}
                  />
                </div>
              </div>
              <div className={styles.header2}>
                <div>
                  <label className={styles.label}>Password:</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={`form-control ${styles.styled_input}`}
                  />
                </div>
              </div>
              <div className={styles.header2}>
                <div>
                  <label className={styles.label}>Confirm Password:</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter confirmed password"
                    className={`form-control ${styles.styled_input}`}
                  />
                </div>
              </div>
              <button type="submit" className={styles.btn}>
                Signup
              </button>
              <Link to="/login">
                <button
                  style={{ marginBottom: "2rem" }}
                  type="submit"
                  className={styles.btn}
                >
                  Go to Login Page
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

export default SignUp;
