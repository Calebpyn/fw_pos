import { useState } from "react"


//Icons
import { FaEdit } from "react-icons/fa";

function TableMapWidget() {

    const [currentLayout, setCurrentLayout] = useState(1)

    return (
        <div className="w-full h-64 rounded-3xl basic-w-bg flex justify-between p-5 text-white cursor-pointer transitions">
            <div className="h-full flex flex-col justify-between w-1/3">
                <div className="w-full">
                    <span className="w-full flex justify-start text-10 text-white font-extralight mb-1">Table Layout Plugin</span>
                    <span className="text-2xl font-extralight">Table Layout</span>
                </div>

                <div>
                    <div className="w-full flex justify-start mb-2">
                        <span className="text-xs font-extralight">Layout #{currentLayout}</span>
                    </div>
                    <div>
                        <button className="flex justify-between items-center w-full radial-edit-button p-3 rounded-xl">
                            <span className="text-lg font-extralight">Edit Layout</span>
                            <FaEdit className="" />
                        </button>
                    </div>
                </div>

            </div>

            <div className="w-2/3 h-full flex flex-col justify-end pt-5 pl-5">
                <div className="h-full w-full bg-black rounded-xl bg-opacity-20">
                    {/* <span>Hola</span> */}
                </div>
            </div>

        </div>
    )
}

export default TableMapWidget