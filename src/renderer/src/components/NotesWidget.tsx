//Hooks
import { useState } from "react"

//Icons
import { GoPlus } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";



function NotesWidget() {

    const [allNotes, setAllNotes] = useState([
        {
            id: 0,
            title: "New Note",
            content: "Coffee beans order arriving at 6:00 PM"
        }
    ])


    const [selectedNote, setSelectedNote] = useState(-1)


    //Custom Functions
    const updateTitle = (index, value) => {
        let dummy = allNotes
        if (value.length == 0) {
            dummy[index].title = "New Note"
        } else {
            dummy[index].title = value
        }
        setAllNotes(dummy)
    }


    return (
        <div className="w-64 h-64 rounded-3xl basic-w-bg flex justify-start flex-col items-start p-5 text-white cursor-pointer transitions">
            <div className="w-full">
                <span className="w-full flex justify-start text-10 text-white font-extralight mb-1">Notes Plugin</span>
            </div>

            <div className="flex flex-row justify-between w-full items-center">
                <span className="text-lg font-light">Notes</span>
                <GoPlus className="text-2xl hover:text-gray-500 transitions" onClick={() => {
                    let dummy = {
                        id: allNotes.length,
                        title: "New Note",
                        content: "Coffee beans order arriving at 6:00 PM"
                    }

                    setAllNotes([...allNotes, dummy])
                    setSelectedNote(dummy.id)
                }} />
            </div>
            <div className="h-full w-full overflow-y-auto pt-2">
                {allNotes.map((item, index) => (
                    <div key={index} className="mb-2" onClick={() => {
                        if (selectedNote == item.id) {
                            setSelectedNote(-1)
                        } else {
                            setSelectedNote(item.id)
                        }

                    }}>
                        <div className={selectedNote == item.id ? "flex justify-start items-center note-widget-grad-bg rounded-t-lg py-1 px-2" : "flex justify-start items-center note-widget-grad-bg rounded-lg py-1 px-2"}>
                            <IoIosArrowForward className={selectedNote == item.id ? "text-xl hover:text-gray-400 rounded-full transitions rotate-45-c" : "text-xl hover:text-gray-400 rounded-full transitions"} />
                            <input placeholder={item.title} className="bg-transparent placeholder-white text-sm outline-none" onChange={(e) => {
                                updateTitle(index, e.target.value)
                            }} />
                        </div>
                        <div className={selectedNote == item.id ? "note-basic-bg text-xs font-extralight w-full p-2 rounded-b-lg transitions" : "h-0 text-transparent text-0 transitions"}>
                            {/* TODO: Set a text area */}
                            <span className="w-full">{item.content}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotesWidget