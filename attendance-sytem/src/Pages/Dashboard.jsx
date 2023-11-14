import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import data from './Data.json'
import axios from 'axios'
import Chart from './Chart'

const Dashboard = () => {
    const [dataset, setDataSet] = useState([])
    const [attendance, setAttendance] = useState({})
    const [homework, setHomework] = useState([])
    const { NAME, ATTENDANCE, 'Behavioral Analytics': behavioralAnalytics } = data;


    useEffect(() => {

        console.log("useffect", data[" ATTENDANCE"])

        setDataSet(data);
        setAttendance(data[" ATTENDANCE"]);
        setHomework(data["homework"]);

        console.log("homework", homework)
    }, [])

    return (
        <div className=" FLEX flex-col space-y-5 ">
            <div className="">
                <div className="font-bold">
                    <h1>HELLO! PISENCE</h1>
                </div>

                <div className="flex items-center justify-center font-bold">
                    <h1>ATTENDANCE</h1>
                </div>

            </div>

            <div className="bg-gray-200 gap-2 p-5  text-center font-bold text-2xl">
                {

                    <div className="flex flex-row gap-5">

                        <div className="flex flex-col gap-2 pt-20">
                            <h1>FN</h1>
                            <h1>AN</h1>
                        </div>
                        <div className="flex flex-row gap-10">
                            {

                                Object.entries(attendance).map(([day, { date, fn, an }]) => {
                                    return (
                                        <div className="flex flex-col items-center justify-between gap-2">
                                            <h1>{day}</h1>
                                            <p className='text-sm'>{date}</p>

                                            {fn === "present"
                                                ?
                                                <div className="h-[30px] w-[30px] bg-green-400"></div>
                                                :
                                                <div className="h-[30px] w-[30px] bg-red-400"></div>
                                            }



                                            {an === "present"
                                                ?
                                                <div className="h-[30px] w-[30px] bg-green-400"></div>
                                                :
                                                <div className="h-[30px] w-[30px] bg-red-400"></div>
                                            }


                                        </div>

                                    )
                                })}
                        </div>

                    </div>


                }
            </div>

            <div className="bg-gray-200 p-5 flex flex-row gap-20 justify-between">
                <div className="text-center  ">
                    <div className="">
                    <h1 className='text-2xl font-bold'>HOMEWORK</h1>
                    </div>

                   <div className=" flex flow-row gap-5  ">                   
                    <div className="">                    
                    {
                        homework.map((val) => {
                            return <h1 className='text-xl font-semibold'>{val}</h1>
                        })
                    }
                    </div>

                    <div className="text-center text-lg font-semibold">
                        <h1>SOCIAL</h1>
                        <h1>TAMIL</h1>
                    </div>
                    </div>
                </div>

                <div className="">
                    <Chart />
                    <div className="flex flex-col text-sm justify-end items-end pt-5">

                    <div className="flex flex-row items-center gap-2">
                    <i class="fa-solid fa-square text-green-400"></i>
                    <h1>GREEN</h1>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                    <i class="fa-solid fa-square text-red-500"></i>
                    <h2>RED</h2>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )


}



export default Dashboard
