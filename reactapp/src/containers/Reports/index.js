import {Typography} from "antd";
import UnderDevelopment from '../../assets/images/underDevelopment.png';
function Reports(){
    return(
        <div>
            <Typography.Title level={4}>Reports</Typography.Title>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img src={UnderDevelopment} alt="Website Section Under Development"/>
            </div>
        </div>
    );

}
export default Reports;