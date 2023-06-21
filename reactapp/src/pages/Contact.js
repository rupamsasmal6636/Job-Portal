// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import  "../styles/Contact.css";



// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_kqz4i7m",
//         "template_3q77lxh",
//         form.current,
//         "b1MK9G5ZQdkcyuVAt"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
// <>
//     <h1>Contact Us</h1>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
// </>
//   );
// };

// export default Contact;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(""); // State for the message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kqz4i7m",
        "template_3q77lxh",
        form.current,
        "b1MK9G5ZQdkcyuVAt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message send Successfully"); // Set the success message
          form.current.reset(); // Reset the form fields
        },
        setTimeout(() => {
            setMessage("");
          }, 10000),
        (error) => {
          console.log(error.text);
          setMessage("Error sending message"); // Set the error message
        }
      );
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="page">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <br></br>
        <label>Email</label>
        <input type="email" name="user_email" />
        <br></br>
        <label>Message</label>
        <textarea name="message" />
        <br></br>
        <input type="submit" value="Send" />
      </form>
      <p>{message}</p> {/* Display the message */}
      </div>
    </>
    );
};

export default Contact;
