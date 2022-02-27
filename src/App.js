import GoogleLogin, { GoogleLogout } from 'react-google-login';
import {Login}  from './Login';
import {Home} from './Home';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import axios from 'axios';


function App() {


  return (
    
         <div>
<Login/>
           </div>
  );
}

export default App;
