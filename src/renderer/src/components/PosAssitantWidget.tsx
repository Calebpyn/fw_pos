import tempLogo from "../assets/temp_logo.svg"


function PosAssitantWidget() {
    return (
        <div className="w-64 h-64 rounded-3xl radial-pos-assistant flex justify-between flex-col items-start p-5 text-white cursor-pointer transitions">
            <div></div>
            <div className="flex flex-col -mb-10">
                <span className="text-2xl" style={{ font: "Inter" }}>FinWise POS</span>
                <span className="text-sm font-extralight" style={{ font: "Inter" }}>Assistant</span>
            </div>
            <div className="w-full flex justify-end">
                <img src={tempLogo} alt="logo" className="h-10" />
            </div>
        </div>
    )
}

export default PosAssitantWidget