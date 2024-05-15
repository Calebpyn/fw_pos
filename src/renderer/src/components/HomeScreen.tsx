import { useState } from "react"

//Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import PosAssitantWidget from "./PosAssitantWidget";
import AnalyticsWidget from "./AnalyticsWidget";
import CurrentOrderWidget from "./CurrentOrderWidget";
import NotesWidget from "./NotesWidget";
import MusicPlayerWidget from "./MusicPlayerWidget";
import TableMapWidget from "./TableMapWidget";


function HomeScreen() {

    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div className='w-full h-screen bg-black flex flex-col justify-center'>
            <div className="h-5/6 w-full flex flex-col justify-between px-20">
                {/* header */}
                <div className='w-full flex justify-end'>
                    <span className="text-white font-extralight text-2xl" style={{ font: "Inter" }}>Desktop {currentPage}</span>
                </div>
                {/* body */}
                <div className="w-full h-full flex justify-center">
                    <div className="h-full flex justify-start pt-5">
                        {/* Import elements here */}
                        <div>
                            <PosAssitantWidget />
                            <div className="h-8"></div>
                            <AnalyticsWidget />
                        </div>

                        <div className="mx-8">
                            <CurrentOrderWidget />
                        </div>

                        <div>
                            <div className="flex justify-between">
                                <NotesWidget />
                                <div className="w-8"></div>
                                <MusicPlayerWidget />
                            </div>
                            <div className="h-8"></div>
                            <div className="w-full">
                                <TableMapWidget />
                            </div>

                        </div>

                    </div>
                </div>
                {/* footer */}
                <div className="flex flex-row justify-between py-5 items-center">
                    <div className="text-white text-5xl hover:text-opacity-40 cursor-pointer transitions">
                        <IoIosArrowBack />
                    </div>
                    <div className="rounded-full flex justify-between flex-row text-white bg-white bg-opacity-20 p-2">
                        <button className="mr-20 hover:bg-black  px-5 py-4 rounded-full transitions hover:bg-opacity-20">Plugins</button>
                        <button className=" px-5 py-4 rounded-full transitions hover:bg-black hover:bg-opacity-20">Settings</button>
                    </div>
                    <div className="text-white text-5xl hover:text-opacity-40 cursor-pointer transitions">
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen