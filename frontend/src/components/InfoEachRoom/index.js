import './index.css'
import livingroom from './livingroom.jpg'

function InfoEachRoom (room) {
    let door = (room.door === 1)? 'ON': 'OFF';
    let light = (room.light === 1)? 'ON': 'OFF';
    
    return (
        <div className="infoARoom">
            <div className="roomItem">
                <img src={livingroom}></img>
                <h3>{room.name}</h3>
            </div>
            <div className="menu">
                <div className="info">
                    <div className="info-icon">
                        <i className="fas fa-temperature-low"></i>
                    </div>
                    <h4>{room.temp}<sup>o</sup>C</h4>
                </div>
                <div className="info">
                    <div className="info-icon">
                        <i className="fas fa-cloud-rain"></i>
                    </div>
                    <h4>{room.humid*100}%</h4>
                </div>
                <div className="info">
                    <div className="info-icon">
                        <i className="fas fa-gas-pump"></i>
                    </div>
                    <h4>{room.gas*100}%</h4>
                </div>
                <div className="info">
                    <div className="info-icon">
                        <i className="fas fa-door-open"></i>
                    </div>
                    <h4>{door}</h4>
                </div>
                <div className="info">
                    <div className="info-icon">
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <h4>{light}</h4>
                </div>

            </div>

        </div>

    );
}
export default InfoEachRoom;