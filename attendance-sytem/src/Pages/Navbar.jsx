import React, { useState } from 'react'
import Sidebar from './Sidebar'

import { Menu } from "antd";
import { Content } from 'antd/es/layout/layout';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { PieChartOutlined, EnterOutlined,HomeOutlined , FormatPainterOutlined } from "@ant-design/icons";
import Dashboard from './Dashboard';


const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();

    function Content() {
        return <div className='p-5 bg-orange-100 scrollbar-hide '>

            <Routes>
                <Route path="/" element={<h1>Home</h1>}></Route>,
                <Route path="/dashboard" element={<Dashboard />}></Route>,
            </Routes>

        </div>
    }

    const toggle = () => {
        setIsOpen(!IsOpen);
        console.log(IsOpen)
    }

    return (
        <>
       

        
            <div className='h-[60px] bg-gray-400 flex items-center px-5 text-2xl' >
                <i class="fa-solid fa-bars" onClick={toggle}></i>
            </div>


            <div className="flex flex-row">
            {IsOpen &&
               
                    <div className="flex">
                        <i class="fa-solid fa-square-xmark absolute text-2xl left-64 text-gray-500 hover:text-black" onClick={toggle}></i>
                        <Menu className='space-y-5 text-base text-gray-500 bg-white pt-10 '

                            onClick={({ key,label }) => {
                                navigate(key);
                                                                
                            }}


                            items={ [
                                { label: "Summary Dashboard", key: "/Dashboard", icon: <HomeOutlined /> },
                                { label: "Attendance Tracking", key: "/Attendance", icon: <EnterOutlined /> },
                                { label: "Behavioral analytics", key: "/analytics", icon: <FormatPainterOutlined /> },
                                { label: "Academic Performance Tracking", key: "/Performance", icon: <PieChartOutlined /> },

                            ]}>

                        </Menu>

                    </div>
                   
               


            }
             <Content />
             </div>
        </>
    )
}

export default Navbar
