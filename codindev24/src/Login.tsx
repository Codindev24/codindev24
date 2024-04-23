import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./sass/login.scss";

export default function Login() {
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPasssword, setLoginPasssword] = React.useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPasssword
      );
      navigate("/");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (

    <div className="login grid grid-cols-2">

        <div className="leftlogin">
         <img src="https://thumbs.dreamstime.com/b/fantastic-sunrise-over-sea-dramatic-scenes-beauty-world-beautiful-seascape-sunset-nature-summer-306395287.jpg" alt="" />
        </div>{/* .leftlogin */}

        <div className="rightlogin">

       <div className="loggainn">

       <div className="title flex justify-center">
        Sign in using your email and password.
        </div>

        <div className="log flex justify-center">

        <div>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="E-mail" variant="standard"
         onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
      </Box>
        </div>

        <div>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard"
        onChange={(event) => {
          setLoginPasssword(event.target.value);
        }}
        />
      </Box>
        </div>

        </div>{/* .log */}

        <div className="flex justify-center">
        <Button  variant="contained" onClick={login}>Sign in</Button>
        </div>

        </div>{/* .loggainn */}

        </div>{/* .rightlogin */}

    </div>

  )
}