import { IoSearchOutline } from "react-icons/io5";
import buildingImg from "./Imagess/modern buildings.webp";

function FindAgents() {
    return (
        <div className="find-agent-wrap">
            <div className="find-agent">
                <div>
                    <img src={buildingImg} alt="" />
                </div>
                <div className="find-agent-info">
                    <h1>Find your perfect rental on TAGS Homes</h1>
                    <p>Whether you’re searching for houses, apartments, or condos, it's easy to find a place you'll love. You’ll be connected with an expert local agent—there’s no pressure or obligation.</p>
                    <div>
                        <input type="text" placeholder="City, Address, School, Building, ZIP" />
                        <div>
                            <button><IoSearchOutline /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FindAgents