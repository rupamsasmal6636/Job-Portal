// import classes from "./login.module.css"
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Dropdown } from "../Select/Select";
// import img15 from '../../Assets/img15.jpg';
// import {VscAccount} from 'react-icons/vsc';
// import { IoMdLogIn } from "react-icons/io";
// import axios from "axios";



// function Login() {
//     const [role, setRole] = useState('admin');
//     let navigate = useNavigate();
//     function loginhandler() {
//         navigate('/signup');
//     }
    
//     const options = [
//         {
//             value: 'employer',
//             label: 'Employer',
//         },
//         {
//             value: 'jobseeker',
//             label: 'Job seeker',
//         },
//         {
//             value: 'admin',
//             label: 'Admin',
//         },
//     ];

//     const [formValues, setFormValues] = useState({
//         email: '',
//         psd: '',
//         role: 'Admin'
//     });

//     const [formErrors, setFormErrors] = useState({
//         email: '',
//         psd: '',
        
//     });
     
//     const validatedetails=()=>{   
//         if(!validateEmail(formValues.email)){
//             setFormErrors(
//                 {...formErrors,email: "Email format is invalid"}
//             )    
//         }
//     }
    
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//         let errorMessage = '';
//         if (name === 'email' && !validateEmail(value)) {
//             errorMessage = 'Email format is invalid';
        
//         } else if (name === 'psd'&& value.length < 8) {
//             errorMessage = 'Password should be at least 8 characters';

//         } 
//         setFormErrors({ ...formErrors, [name]: errorMessage });
//     };

//     const CheckUser1=()=>{
//         validatedetails()
//         if (Object.values(formErrors).every(error => error === '')){
//         const apiuser="http://localhost:8080/user/check/"+formValues.email
//         axios.get(apiuser)
//                 .then(res => {
//                     if(res.data){
//                        const apipcheck="http://localhost:8080/user/checkpassword/"+formValues.email+ "/" +formValues.psd
//                        axios.get(apipcheck)
//                        .then((response)=>{
//                         if(response.data){
//                             alert("Login success")
//                             setFormValues({
//                                 email: '',
//                                 psd: '',
//                                 role: 'Admin'
//                             })
//                         }else{
//                             alert("Password is not correct")
//                         }
//                        })
//                     }
//                     else{
//                         alert("Email not exist")
//                     }    
//                 })
//                 .catch(err => (console.log(err)))
//     };
// }

//     const selectRole = (value) => {
//         setRole(value);  
//     }
//     const validateEmail = (email) => {
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(email);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formValues = {
//             mail: e.target.email.value,
//             password:e.target.psd.value,
//             role:role
//         }
//         if (Object.values(formErrors).every(error => error === '')){
            
//         console.log(formValues);
//         } else{
//             console.log("form a errors  please check them");
//         }
//     }
//     const[show, setShow]=useState(false)
//     const handleShow=()=>{
//         setShow(!show)
//     }

//     return (
//         <div className={classes.main} style={{ backgroundImage: `url(${img15})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
//             <div className={classes.bottom}>
//                 <fieldset className={classes.field}>
//                     <div className={classes.in}>
//                     <h3 className={classes.account}><VscAccount /></h3>
//                     <h1 className={classes.loginhead}>Login</h1>    
//                     <form onSubmit={handleSubmit}>
//                     <div className={classes.formlayout}>
//                         <div>
//                         <label>Select a role</label>
//                             <Dropdown placeholder={'Select a Role'}  defaultValue={'Admin'} options={options} onChange={selectRole}  />
//                         </div>
                            
//                             <label className={classes.lab}>Enter mail</label>
//                                 <input className={classes.in3} name="email" type="text" placeholder="Enter email" value={formValues.email} onChange={handleInputChange} required="required"></input>
//                                 {formErrors.email && <p className={classes.errorMessage}>{formErrors.email}</p>}

//                             <label className={classes.lab}>Enter password</label>
//                                 <input className={classes.in4} name="psd" type={show?"text":"password"} placeholder="Enter password" value={formValues.psd} onChange={handleInputChange} required="required"></input>
//                                 <label  className={classes.showhide} onClick={handleShow}>{show?"Hide":"show"}</label>
//                                 {formErrors.psd && <p className={classes.errorMessage}>{formErrors.psd}</p>}

//                             <a className={classes.psd} href='forgotpassword.js'>Forgot Password?</a>
//                             </div>
//                             <div className={classes.btnsContainer}>
//                             <button
//                                 className={classes.in5}
//                                 type="submit"
//                                 value="Login"
//                                 onClick={() => CheckUser1()}
//                             >
//                                 <span>Login</span><span className={classes.loginsym}></span><IoMdLogIn />
//                             </button>
//                             <button className={classes.in6} onClick={loginhandler}>Don't have an account? Create now</button>
//                             </div>
//                         </form>
//                     </div>
//                 </fieldset>
//             </div>
//         </div>
//     );
// }

// export default Login;






import classes from "./login.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dropdown } from "../Select/Select";
import img15 from '../../Assets/img15.jpg';
import {VscAccount} from 'react-icons/vsc';
import { IoMdLogIn } from "react-icons/io";
import axios from "axios";



function Login() {
    const [role, setRole] = useState('admin');
    let navigate = useNavigate();
    function loginhandler() {
        navigate('/signup');
    }
    
    const options = [
        {
            value: 'employer',
            label: 'Employer',
        },
        {
            value: 'jobseeker',
            label: 'Job seeker',
        },
        {
            value: 'admin',
            label: 'Admin',
        },
    ];

    const [formValues, setFormValues] = useState({
        email: '',
        psd: '',
        role: 'Admin'
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        psd: '',
        
    });
     
    // const validatedetails=()=>{   
    //     if(!validateEmail(formValues.email)){
    //         setFormErrors(
    //             {...formErrors,email: "Email format is invalid"}
    //         )    
    //     }
    // }
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        let errorMessage = '';
        if (name === 'email' && !validateEmail(value)) {
            errorMessage = 'Email format is invalid';
        
        } else if (name === 'psd'&& value.length < 8) {
            errorMessage = 'Password should be at least 8 characters';

        } 
        setFormErrors({ ...formErrors, [name]: errorMessage });
    };

    const CheckUser1=()=>{
        // validatedetails()
        if (Object.values(formErrors).every(error => error === '')){
        const apiuser="http://localhost:8080/user/check/"+formValues.email
        axios.get(apiuser)
                .then(res => {
                    if(res.data){
                       const apipcheck="http://localhost:8080/user/checkpassword/"+formValues.email+ "/" +formValues.psd
                       axios.get(apipcheck)
                       .then((response)=>{
                        if(response.data){
                            alert("Login success")
                            setFormValues({
                                email: '',
                                psd: '',
                                role: 'Admin'
                            })
                        }else{
                            alert("Password is not correct")
                        }
                       })
                    }
                    else{
                        alert("Email not exist")
                    }    
                })
                .catch(err => (console.log(err)))
    };
}

    const selectRole = (value) => {
        setRole(value);  
    }
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formValues = {
            mail: e.target.email.value,
            password:e.target.psd.value,
            role:role
        }
        if (Object.values(formErrors).every(error => error === '')){
            
        console.log(formValues);
        } else{
            console.log("form a errors  please check them");
        }
    }
    const[show, setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }

    return (
        <div className={classes.main} style={{ backgroundImage: `url(${img15})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className={classes.bottom}>
                <fieldset className={classes.field}>
                    <div className={classes.in}>
                    <h3 className={classes.account}><VscAccount /></h3>
                    <h1 className={classes.loginhead}>Login</h1>    
                    <form onSubmit={handleSubmit}>
                    <div className={classes.formlayout}>
                        <div>
                        <label className="role">Select a role</label>
                            <Dropdown placeholder={'Select a Role'}  defaultValue={'Admin'} options={options} onChange={selectRole}  />
                        </div>
                            
                            <label className={classes.lab} style={{marginTop:"1%"}}>Enter mail</label>
                                <input className={classes.in3} name="email" type="text" placeholder="Enter email" value={formValues.email} onChange={handleInputChange} required="required"></input>
                                {formErrors.email && <p className={classes.errorMessage}>{formErrors.email}</p>}

                            <label className={classes.lab} style={{marginTop:"-2%"}}>Enter password</label>
                                <input className={classes.in4} name="psd" type={show?"text":"password"} placeholder="Enter password" value={formValues.psd} onChange={handleInputChange} required="required"></input>
                                <label  className={classes.showhide} onClick={handleShow}>{show?"Hide":"show"}</label>
                                {formErrors.psd && <p className={classes.errorMessage}>{formErrors.psd}</p>}

                            <a className={classes.psd} href='forgotpassword.js'>Forgot Password?</a>
                            </div>
                            <div className={classes.btnsContainer}>
                            <button
                                className={classes.in5}
                                type="submit"
                                value="Login"
                                onClick={() => CheckUser1()}
                            >
                                 <span style={{marginTop:"-7%"}}>Login</span><span className={classes.loginsym}></span><IoMdLogIn /> 
                            </button>
                            <button className={classes.in6} onClick={loginhandler}>Don't have an account? Create now</button>
                            </div>
                        </form>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default Login;



