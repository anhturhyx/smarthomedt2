import './index.css'

import pic from './../image/smarthome.jpg';
import { FaHouseUser } from "react-icons/fa";
function Login() {
    return(
        <div className="main">
        <img src={pic} alt="pic" />

        <div className='login'>
          <span className='dot'>
            <FaHouseUser className='logo' />
          </span>
          <div className='form_title'>
            
          </div>
          <form></form>
        </div>
      </div>
    )
}
export default Login;