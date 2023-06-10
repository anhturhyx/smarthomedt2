import './index.css'
import {Link} from 'react-router-dom'


function Menu() {
    return (
            <div className="menu-list">
                <div className="menu-title">MENU</div>
                <Link to="./temp_humid">
                    <div className="menu-item">
                        <div className="item-icon">
                            <i className="fas fa-temperature-low"></i>
                        </div>
                        <span>Nhiệt độ & Độ ẩm</span>
                    </div>
                </Link>
                <Link to="./gas">
                    <div className="menu-item">
                        <div className="item-icon">
                            <i className="fas fa-gas-pump"></i>
                        </div>
                        <span>Thông tin gas</span>
                    </div>
                </Link>
                <Link to="./light">
                    <div className="menu-item">
                        <div className="item-icon">
                            <i className="fas fa-lightbulb"></i>
                        </div>
                        <span>Thông tin đèn</span>
                    </div>
                </Link>
                <Link to="./door">
                    <div className="menu-item">
                        <div className="item-icon">
                            <i className="fas fa-door-open"></i>
                        </div>
                        <span>Thông tin cửa</span>
                    </div>
                </Link>
            </div>
    )
}
export default Menu