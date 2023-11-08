import { IoCall } from "react-icons/io5";


function NeedHelp() {
    return (
        <div>
            <div className="help">
                <p style={{color: "#219CDE"}}>Trouble Finding</p>
                <h1>Need help? Talk to our expert.</h1>
                <p>Talk to our experts or Browse through more properties.</p>
                <div>
                    <div><button className="contact">Contact Us</button></div>
                    <div><p style={{color: "#6d6b6b"}}>or</p></div>
                    <div><button className="call"><IoCall/> +234 704 829 9390</button></div>
                </div>
            </div>
        </div>
    );
}
export default NeedHelp;