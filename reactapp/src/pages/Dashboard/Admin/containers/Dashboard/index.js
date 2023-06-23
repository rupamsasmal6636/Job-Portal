//import { ShoppingCartOutlined} from "@ant-design/icons";
import { FaRegIdCard, FaListAlt, FaRocketchat, FaRegBookmark } from "react-icons/fa";
import { TbCategory } from 'react-icons/tb'
import { Statistic, Typography, Card, Space, Button } from "antd";
import './index.css';
import InterviewPrepImage from '../../assets/images/interviewprep.png';
import compImg from '../../assets/images/underDevelopment.png';
import MultiCarousel from "../../components/Carousel";
function Dashboard() {
    const companyCategories = [
        {
            image: compImg,
            title: 'IT'
        }, {
            image: compImg,
            title: 'CSE'
        }, {
            image: compImg,
            title: 'ECE'
        }, {
            image: compImg,
            title: 'MECH'
        }, {
            image: compImg,
            title: 'CCE'
        }, {
            image: compImg,
            title: 'CCE'
        }, {
            image: compImg,
            title: 'CCE'
        }, {
            image: compImg,
            title: 'CCE'
        }
    ]
    return (
        <div>
            <Card
                style={{ width: '100%', height: '200px' }}
                cover={<div style={{ width: '100%', backgroundColor: '#8282f2', height: '200px', position: 'absolute', opacity: 0.5, borderRadius: '100% 0% 0% 0%' }}></div>}
            >
                <Typography.Title level={4}> Welcome Admin</Typography.Title>
                <p className="welcome-message">Today's Reports</p>
                <img src={InterviewPrepImage} alt="Interview Preparation" height='200px' className="cover-image" />

            </Card>
            <Space direction="horizontal" style={{ columngap: '35px', width: '100%', margin: '10px 0' }} >
                <DashboardCard icon={<FaRegIdCard style={{ color: "green", backgroundColor: "rgba(0,255,0,0.25)", borderRadius: 40, fontSize: 60, padding: 10 }} />} title={"Jobs Posted"} value={100} />
                <DashboardCard icon={<FaListAlt style={{ color: "purple", backgroundColor: "rgba(0,255,255,0.25)", borderRadius: 40, fontSize: 60, padding: 10 }} />} title={"Applications"} value={6382} />
                <DashboardCard icon={<FaRocketchat style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 40, fontSize: 60, padding: 10 }} />} title={"Messages"} value={85} />
                <DashboardCard icon={<FaRegBookmark style={{ color: "blue", backgroundColor: "rgba(0,0,255,0.25)", borderRadius: 40, fontSize: 60, padding: 10 }} />} title={"ShortListed"} value={57} />
            </Space>
            <div className="top-category-carousel" >
                <div className="top-category-head" style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
                    <h2 className="top-category-heading">Search Companies by Category</h2>
                    <Button type="primary" icon={<TbCategory />} size={'large'}>
                        View All Category
                    </Button>
                </div>
                <MultiCarousel slides={companyCategories} slidesToShow={4} />
            </div>
            <div className="top-category-carousel" >
                <div className="top-category-head" style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
                    <h2 className="top-category-heading">Search Candidates by Category</h2>
                    <Button type="primary" icon={<TbCategory />} size={'large'}>
                        View All Category
                    </Button>
                </div>
                <MultiCarousel slides={companyCategories} slidesToShow={4} />
            </div>
        </div>
    );
}
function DashboardCard({ title, value, icon }) {
    return (
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    );
}
export default Dashboard;