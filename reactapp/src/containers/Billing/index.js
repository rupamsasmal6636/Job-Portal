import {Typography} from "antd";
import UnderDevelopment from '../../assets/images/underDevelopment.png';
function Billing(){
    return(
        <div>
            <Typography.Title level={4}>Billing</Typography.Title>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img src={UnderDevelopment} alt="Website Section Under Development"/>
            </div>
        </div>
    );

}
export default Billing;