import { Space, Layout, Button, Input } from "antd";
import MyTable from "../../components/Table";
import { useState, useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { FaUser } from "react-icons/fa";
import Highlighter from 'react-highlight-words';
const { Header, Content } = Layout;
function CompanyProfile() {


    const defaultTitle = () => 'List of Companies';

    const [hasData, setHasData] = useState(true); // state is required
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>

                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            dataIndex: 'avatar',
            width: '4%',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: true,
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            sorter: true,
            ...getColumnSearchProps('category'),
        },
        {
            title: 'Location',
            dataIndex: 'location',
            sorter: true,
            ...getColumnSearchProps('location'),
        },
        {
            title: 'No. Of Employees',
            dataIndex: 'no_of_employees',
            sorter: (a, b) => a.age - b.age,
            ...getColumnSearchProps('no_of_employees'),
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Action',
            key: 'action',
            width: '15%',
            render: () => (
                <Space size="middle">
                    <a href="/">View Profile</a>
                    <a href="/">Delete</a>
                </Space>
            ),
        },
    ];
    const data = [];
    for (let i = 1; i <= 50; i++) {
        data.push({
            key: i,
            name: 'John Brown',
            avatar: <FaUser />,
            no_of_employees: Number(`${i}2`),
            location: 'Coimbatore',
            category: 'IT',
            address: `New York No. ${i} Lake Park`,
            description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        });
    }

    const headerStyle = {
        textAlign: 'center',
        color: '#000',
        fontSize: '25px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        height: 64,
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: '#8282f296',
        position: 'sticky'
    };
    return (
        <div>
            <Layout>
                <Header style={headerStyle}>Company Profile</Header>
                <Content>

                </Content>
                <Content>
                    <MyTable defaultTitle={defaultTitle} columns={columns} data={data} hasData={hasData} setHasData={setHasData} />
                </Content>
            </Layout>
        </div>
    );
}
export default CompanyProfile;