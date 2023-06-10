import './index.css';
import { FaUserAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {logout} from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const CloseMenu=() =>{
    document.querySelector(".sidebar").classList.remove("open");
}

const OpenMenu=() =>{
    document.querySelector(".sidebar").classList.add("open");
}

function HeaderLogo({title}) {
    const history = useHistory();
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} =userSignin;
    const dispatch = useDispatch();
    const logoutPage = (props) => {
        dispatch(logout());
        document.querySelector(".sidebar").classList.remove("open");
        history.push("/");
    }
    return (
        <div className="header">
            <div className='logo'>
                <Link to="./">
                    <FaHouseUser />
                </Link>
            </div>
            <div className='title'>
                {title}
            </div>
            <div className='user'>

                { userInfo ? <h3 className='username' onClick={OpenMenu}>{userInfo.name} </h3>:
                    <Link to="./signin">
                        <FaUserAlt/>
                    </Link>
                }

                <div className="sidebar">
                    <button onClick={CloseMenu}>x</button>
                    <ul>
                        <li>
                            <div className="title">UserName:</div> {userInfo ? userInfo.name : ""}
                        </li>
                        <li className='email'>
                            <div className="title">Email:</div> { userInfo ? userInfo.email : ""}
                        </li>
                        <li className="front_logout" onClick={logoutPage}>Logout</li> 
                    </ul>    
                </div> 
                 
            </div>
        </div>
    );
}
  
export default HeaderLogo;