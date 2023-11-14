import React from 'react'

import { Menu } from "antd";
import { Content } from 'antd/es/layout/layout';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProjectOutlined, MessageOutlined, DashboardOutlined, FieldTimeOutlined, TeamOutlined, InfoCircleOutlined } from "@ant-design/icons";
import Dashboard from './Dashboard';



const Sidebar = () => {
    const navigate = useNavigate();

    function Content() {
        return <div className='w-full  h-[495px] bg-orange-100 scrollbar-hide '>

            <Routes>
                <Route path="/" element={<h1>Home</h1>}></Route>,
                <Route path="/dashboard" element={<Dashboard />}></Route>,
            </Routes>

        </div>
    }
    return (
        <>

            <div className=''>
                <div className='flex h-[] mt-2 gap-2'>
                    <Menu className='w-[13%] h-[70vh] p-8 space-y-5 text-gray-500'
                        onClick={({ key }) => {
                            navigate(key)
                        }}

                        items={[
                            { label: "Summary Dashboard", key: "/Dashboard", icon: <DashboardOutlined  /> },
                            { label: "Attendance Tracking", key: "/Attendance", icon: <ProjectOutlined /> },
                            { label: "Behavioral analytics", key: "/analytics", icon: <MessageOutlined /> },
                            { label: "Academic Performance Tracking", key: "/Performance", icon: <FieldTimeOutlined /> },

                        ]}>

                    </Menu>
                    <Content />
                </div>

                
            </div>
        </>
    )
}

export default Sidebar
