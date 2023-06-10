import './index.css'

// Fake data
const gasConcen = 0.9
var concen;
if (gasConcen < 0.2) concen = 'Very Low';
else if (gasConcen < 0.4) concen = 'Low'
else if (gasConcen < 0.6) concen = 'Average';
else if (gasConcen < 0.8) concen = 'High';
else concen = 'Very High';

function Gas() {
    return (
        <div className="content">
            <div className="concen">
               {concen}
            </div>
            <div>
                <h2>{gasConcen*100}%</h2>
                <form>
                    <input type="range" class="range"  min="0" max="100"></input>
                    <input type="submit" value="Hủy cảnh báo"></input>
                    
                </form>
            </div>
        </div>
        
    )
}
export default Gas