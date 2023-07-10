import { DotChartOutlined, FormOutlined,} from "@ant-design/icons";
import { Card, Space,Image } from "antd";
import Statistic from "antd/es/statistic/Statistic";
import Link from "antd/es/typography/Link";
import './index.css'
import Typography from "antd/es/typography/Typography";


function Dashboard() {
    return (
    <div style={{padding:"5px 0px 0px 50px"}}>
        <Typography.Title level={3}>Welocome User!</Typography.Title>
        <div>
        <Space direction="horizontal" style={{columnGap:"50px"}}>

            <DashboardCard icon={<FormOutlined style={{color:"red",fontSize:"60px"}}/>}title={<Typography.Title level={4}>Applied Job</Typography.Title>} value={12345} />
            <DashboardCard icon={<DotChartOutlined style={{color:"green",fontSize:"60px"}}/>} title={<Typography.Title level={4}>Potential Job</Typography.Title>} value={12345} />
            
        </Space>
        </div >
        <br />
            <Typography.Title level={3}>Jobs List</Typography.Title>
        <div >
           
            <Space direction="horizontal"style={{columnGap:"18px"}}>
            <Space direction="vertical">
                   <JobCard/> 
                   <JobCard/> 
                   <JobCard/> 
                   <JobCard/>
                    
            </Space>
            <br />
            <br />
            <Space direction="vertical">
                   <JobCard /> 
                   <JobCard /> 
                   <JobCard /> 
                   <JobCard /> 
            </Space>
            </Space>
            <br />
            <br />
          
           
          </div>
    </div>
    );
}

/**Functionality of Dashboard Card[Analytics card] & Job Cards[Job content] */

function DashboardCard({title,value, icon}) {
    return (
        <Card className="DashboardCard">
            <Space direction="horizontal"style={{
                textAlign:"center",
                justifyContent:"center",
                justifyItems:"center",
                columnGap:"10px"
                
                }}>
                {icon}
                <br />
                <Statistic style={{textAlign:"justify"}} title={title} value={value} />
            </Space>
        </Card>
    );
    
}


////// JOB CARD COMPONENT //////////////////////////////////////

function JobCard() {
    return (
        <Card id="JobCard" >
            <Space direction="horizontal">
            <Image width={80} height={80} className="Jobcardimg" style={{justifyContent:"flex-start"}} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
            <Space direction="vertical" >
            <div className="JobCard_text">
            <Typography.Title level={5} style={{ marginTop:"0px"}}>Product Designer</Typography.Title>
            <Typography.Text level={2} style={{}}>Coimbatore,Tamil Nadu</Typography.Text>
            <br />
            <Link to="" style={{textAlign:"left",marginLeft:"-8px"}}>View Job</Link>
            </div>
            </Space>
            </Space>
        </Card>
    );
    
}
            

export default Dashboard;  
