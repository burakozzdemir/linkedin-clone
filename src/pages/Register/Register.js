/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import "./Register.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/userSlice";
import { NavLink } from "react-router-dom";
import SignInGoogle from "../../components/SignInGoogle/SignInGoogle";

const Register = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [name, SetName] = useState("");
  const [profilePic, SetprofilePic] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
            // <Navigate to={"/home"} replace={true} />;
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="register">
      <a href="http://localhost:3001/register">
        <img src="./Logo.png" alt="" />
      </a>
      <h2 className="register-h2">
        Get the most out of your professional life
      </h2>
      <div className="form-body">
        <form>
          <input
            value={name}
            onChange={(e) => SetName(e.target.value)}
            placeholder="Full name (required if registering)"
            type="text"
          />
          <input
            value={profilePic}
            onChange={(e) => SetprofilePic(e.target.value)}
            placeholder="Profile pic URL (optional)"
            type="text"
          />
          <input
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />

          <div>
            <p className="section-p">
              By clicking Accept and Join,you agree to LinkedIn's <br />
              <a
                className="link"
                href="https://tr.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement"
                target="_blank"
                rel="noreferrer"
              >
                User Agreement,
              </a>
              <a
                className="link1"
                href="https://tr.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Privacy Policy{" "}
              </a>{" "}
              and {""}
              <a
                className="link2"
                href="https://tr.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy"
                target="_blank"
                rel="noreferrer"
              >
                Cookie Policy.
              </a>
            </p>
          </div>
          <button className="btn-register-one" type="button" onClick={register}>
            Accept or Join
          </button>
          <p className="section2">or</p> 
          <hr className="section2-hr" />
        </form>
        <div className="google-register">
          <SignInGoogle />
        </div>
        <div>
          <p className="member-one-p">
            Already member of LinkedIn?{" "}
            <NavLink
              to="/login"
              style={() => ({ color: "white", textDecoration: "none" })}
            >
              <span className="register-now">Register Now</span>
            </NavLink>
          </p>
        </div>
        <p className="create-register">
          Want to create a page for a business?{" "}
          <a
            className="link3"
            href="https://www.linkedin.com/help/linkedin/answer/a543852?trk=registration-frontend_join-form-page-help-link"
            target="_blank"
            rel="noreferrer"
          >
            Get Help
          </a>
        </p>
      </div>
      <footer className="footer-register">
        <img src="./Logo.png" alt="" />
        <a href=""> © 2022</a>
        <a href="">About Us</a>
        <a href="">Accessibility</a>
        <a href="">User Agreement</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Copyright Policy</a>
        <a href="">Brand Policy</a>
        <a href="">Visitor Controls</a>
        <a href="">Community Guidelines</a>
        <a href="">Language</a>
      </footer>
    </div>
  );
};

export default Register;

//useFormik Yaklaşımı

// const { handleSubmit, handleChange, values } = useFormik({
//     initialValues: {
//       name: "",
//       profilePic: "",
//       email: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

// <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Full Name</label>
//         <input
//           type="text"
//           id="name"
//           value={values.name}
//           onChange={handleChange}
//           placeholder="Full Name (required if registering)"
//         />
//         <br />
//         <label htmlFor="profilePic">Image URL</label>
//         <input
//           type="text"
//           id="profilePic"
//           value={values.profilePic}
//           onChange={handleChange}
//           placeholder="Profil pic Url (optional)"
//         />
//         <br />
//         <label htmlFor="email">E-mail</label>
//         <input
//           type="text"
//           id="email"
//           value={values.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         <br />
//         <label htmlFor="password">Password</label>
//         <input
//           type="text"
//           id="password"
//           value={values.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <br />

//         <button className="btn-btn" type="submit">
//           Giriş yap
//         </button>
//       </form>

// Ana inputlar

// {/* <form>
// <input
//  value={name}
//  onChange={(e) => SetName(e.target.value)}
//  placeholder="Full name (required if registering)"
//  type="text"
// />
// <input
//  value={profilePic}
//  onChange={(e) => SetprofilePic(e.target.value)}
//  placeholder="Profile pic URL (optional)"
//  type="text"
// />
// <input
//  value={email}
//  onChange={(e) => SetEmail(e.target.value)}
//  placeholder="Email"
//  type="email"
// />
// <input
//  value={password}
//  onChange={(e) => SetPassword(e.target.value)}
//  placeholder="Password"
//  type="password"
// />  */}

{
  /* <form>
        <Formik
          initialValues={{
            name: "",
            profilePic: "",
            email: "",
            password: "",
            button: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {/* name, profilePic, email, password¨  */
}
//   {() => (
//     <Form className="form-input">
//       <Field
//         name="name"
//         placeholder="Full name (required if registering)"
//       />
//       <br />
//       <Field
//          name="profilePic"
//         placeholder="Profil pic Url (optional)"
//       />
//       <br />
//       <Field name="email" placeholder="Email" /> <br />
//       <Field name="password" placeholder="Password" /> <br />
//       <button type="button" onClick={register}>
//         Accept or Join
//       </button>
//     </Form>
//   )}
// </Formik> */}
