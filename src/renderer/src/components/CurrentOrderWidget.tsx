import { useEffect, useState } from "react";

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { BsDash } from "react-icons/bs";



function CurrentOrderWidget() {


    //Dummies
    const [OrdersDummy, setOrdersDummy] = useState([
        {
            id: 1,
            name: "John Doe",
            total: 10.59,
            items: [
                {
                    item_id: 1,
                    amount: 1,
                    name: "Iced Latte",
                    modifiers: [
                        {
                            mod_id: 1,
                            name: "Decaf",
                            price: 0
                        }
                    ],
                    product_type: "Prepared",
                    price: 6.49,
                    sent: false
                },
                {
                    item_id: 2,
                    amount: 1,
                    name: "Croissant",
                    modifiers: [],
                    product_type: "Fixed",
                    price: 4.10,
                    sent: true
                }
            ],
            paid: false,
            delivered: false,
            table: 1

        },
        // Order 2
        {
            id: 2,
            name: "Jane Smith",
            total: 8.25,
            items: [
                {
                    item_id: 3,
                    amount: 1,
                    name: "Cappuccino",
                    modifiers: [],
                    product_type: "Prepared",
                    price: 5.25,
                    sent: true,
                },
                {
                    item_id: 4,
                    amount: 2,
                    name: "Blueberry Muffin",
                    modifiers: [],
                    product_type: "Fixed",
                    price: 1.50,
                    sent: false
                }
            ],
            paid: true,
            delivered: true,
            table: 2
        },
        // Order 3
        {
            id: 3,
            name: "Michael Chen",
            total: 14.99,
            items: [
                {
                    item_id: 5,
                    amount: 1,
                    name: "Black Tea",
                    modifiers: [
                        {
                            mod_id: 2,
                            name: "Extra Sweet",
                            price: 0.50
                        }
                    ],
                    product_type: "Prepared",
                    price: 3.75,
                    sent: false
                },
                {
                    item_id: 6,
                    amount: 2,
                    name: "Chocolate Chip Cookie",
                    modifiers: [],
                    product_type: "Fixed",
                    price: 2.75,
                    sent: false
                },
                {
                    item_id: 7,
                    amount: 1,
                    name: "Salad",
                    modifiers: [
                        {
                            mod_id: 3,
                            name: "Chicken",
                            price: 4.00
                        }
                    ],
                    product_type: "Prepared",
                    price: 4.50,
                    sent: false
                }
            ],
            paid: false,
            delivered: false,
            table: 5
        },
        // Order 4 (similar to Order 1)
        {
            id: 4,
            name: "David Lee",
            total: 7.99,
            items: [
                {
                    item_id: 1,
                    amount: 1,
                    name: "Iced Latte",
                    modifiers: [],
                    product_type: "Prepared",
                    price: 6.49,
                    sent: false
                },
                {
                    item_id: 8,
                    amount: 1,
                    name: "Banana Bread",
                    modifiers: [],
                    product_type: "Fixed",
                    price: 1.50,
                    sent: true
                }
            ],
            paid: true,
            delivered: false
        },
        // Order 5
        {
            id: 5,
            name: "Sarah Garcia",
            total: 12.75,
            items: [
                {
                    item_id: 9,
                    amount: 1,
                    name: "Green Juice",
                    modifiers: [],
                    product_type: "Prepared",
                    price: 7.50,
                    sent: false
                },
                {
                    item_id: 10,
                    amount: 1,
                    name: "Yogurt Parfait",
                    modifiers: [
                        {
                            mod_id: 4,
                            name: "Granola",
                            price: 1.00
                        }
                    ],
                    product_type: "Prepared",
                    price: 4.25,
                    sent: false
                }
            ],
            paid: false,
            delivered: true,
            table: 9
        }
    ])


    const [isActiveOpen, setIsActiveOpen] = useState(false)

    const [isHistoryOpen, setIsHistoryOpen] = useState(false)

    const [activeSelction, setActiveSelection] = useState(-1)


    const updateSentState = (orderIndex, itemIndex) => {
        const newOrders = [...OrdersDummy];

        if (orderIndex >= 0 && orderIndex < newOrders.length) {
            const items = newOrders[orderIndex].items;
            if (itemIndex >= 0 && itemIndex < items.length) {
                items[itemIndex].sent = !items[itemIndex].sent;
            }
        }

        setOrdersDummy(newOrders);
    }

    const updateDeliveredState = (orderIndex, toState: boolean) => {
        const newOrders = [...OrdersDummy];

        if (orderIndex >= 0 && orderIndex < newOrders.length) {
            newOrders[orderIndex].delivered = toState
        }

        setActiveSelection(-1)
        setOrdersDummy(newOrders);
    }

    return (
        <div className='h-544 w-auto radial-current-order rounded-3xl p-5 flex justify-between items-center relative' style={{ font: "Inter" }}>
            <div className="h-full flex flex-col justify-between w-64">

                <div className="overflow-y-auto hide-sb">
                    <span className="w-full flex justify-start text-10 text-white font-extralight mb-3">
                        Order Tracking Plugin
                    </span>

                    <div className="flex flex-col w-full">

                        <div className="text-white flex justify-start items-center" onClick={() => {
                            setIsActiveOpen(!isActiveOpen)
                            setIsHistoryOpen(false)
                            }}>
                            <IoIosArrowForward className={isActiveOpen ? "text-xl hover:text-gray-400 rounded-full transitions rotate-45-c" : "text-xl hover:text-gray-400 rounded-full transitions"} />
                            <span className="hover:text-gray-400 mx-2 font-light transitions select-none">Active Orders</span>
                            <div className="bg-active-green h-2 w-2 rounded-full -mb-1"></div>
                        </div>
                        <div className={isActiveOpen ? "w-full transitions h-360 overflow-y-auto pl-5" : "w-full h-0 transitions overflow-y-auto"}>
                            {/* Active Orders */}
                            {OrdersDummy.map((item, itemIndex) => (
                                <div key={item.id} >
                                    {!item.delivered ?
                                        <div className={isActiveOpen ? "" : "text-transparent"}>
                                            <div className="flex justify-between w-full text-white pt-2 items-center select-none" onClick={() => {
                                                if (activeSelction == item.id) {
                                                    setActiveSelection(-1)
                                                } else {
                                                    setActiveSelection(item.id)
                                                }
                                            }}>
                                                <div className="flex items-center">
                                                    <span className="text-sm flex items-center">#{item.id}</span>
                                                    <span className="ml-2 font-light">{item.name}</span>
                                                </div>
                                                <span className="font-extralight text-sm">${item.total}</span>
                                            </div>

                                            <div className={item.id == activeSelction ? "w-full transitions h-40 overflow-y-auto pl-5" : "w-full h-0 transitions overflow-y-auto"}>
                                                <div className={item.id == activeSelction ? "" : "hidden"}>
                                                    {item.items.map((product, productIndex) => (
                                                        <div key={productIndex} className="flex flex-col">
                                                            <div className="flex justify-between w-full select-none">
                                                                <span className={product.sent ? "flex items-center font-extralight text-12 text-blue-300 line-through" : "flex items-center text-white font-extralight text-12"} onClick={() => {
                                                                    updateSentState(itemIndex, productIndex)
                                                                }
                                                                }>{<GoDotFill className="text-4 mr-1" />}{product.name}</span>
                                                                <span className="font-extralight text-12 text-white">${product.price}</span>
                                                            </div>
                                                            {product.modifiers.map((mod, modIndex) => (
                                                                <div key={modIndex} className="text-white font-extralight flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <BsDash className="text-4 ml-4" />
                                                                        <span className={product.sent ? "ml-1 text-12 text-blue-300 line-through" : "ml-1 text-12"}>{mod.name}</span>
                                                                    </div>
                                                                    <span className="ml-2 text-12">${mod.price}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))}

                                                    <div className="text-white text-10 mt-2">
                                                        <button className="bg-black bg-opacity-30 items-center text-white px-2 py-1 rounded-lg hover:bg-opacity-40 transitions mr-2">Edit</button>
                                                        <button className="bg-black bg-opacity-30 items-center text-white px-2 py-1 rounded-lg hover:bg-opacity-40 transitions mr-2" onClick={() => updateDeliveredState(itemIndex, true)}>Send</button>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                        : null}
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="">

                        <div className="text-white flex justify-start items-center mt-3" onClick={() => {
                            setIsHistoryOpen(!isHistoryOpen)
                            setIsActiveOpen(false)
                        }}>
                        <IoIosArrowForward className={isHistoryOpen ? "text-xl hover:text-gray-400 rounded-full transitions rotate-45-c" : "text-xl hover:text-gray-400 rounded-full transitions"} />
                            <span className="hover:text-gray-400 mx-2 font-light transitions select-none">Orders History</span>
                            <div className="bg-red-700 h-2 w-2 rounded-full -mb-1"></div>
                        </div>

                        <div className={isHistoryOpen ? "w-full transitions h-360 overflow-y-auto pl-5" : "w-full h-0 transitions overflow-y-auto"}>
                            {OrdersDummy.map((item, itemIndex) => (
                                <div key={item.id}>
                                    {!item.delivered ?
                                        null
                                        : <div className={isHistoryOpen ? "" : "text-transparent"}>
                                            <div className="flex justify-between w-full text-white pt-2 items-center select-none" onClick={() => {
                                                if (activeSelction == item.id) {
                                                    setActiveSelection(-1)
                                                } else {
                                                    setActiveSelection(item.id)
                                                }
                                            }}>
                                                <div className="flex items-center">
                                                    <span className="text-sm flex items-center">#{item.id}</span>
                                                    <span className="ml-2 font-light">{item.name}</span>
                                                </div>
                                                <span className="font-extralight text-sm">${item.total}</span>
                                            </div>



                                            <div className={item.id == activeSelction ? "w-full transitions h-40 overflow-y-auto pl-5" : "w-full h-0 transitions overflow-y-auto"}>
                                                <div className={item.id == activeSelction ? "" : "hidden"}>
                                                    {item.items.map((product, productIndex) => (
                                                        <div key={productIndex} className="flex flex-col">
                                                            <div className="flex justify-between w-full select-none">
                                                                <span className={product.sent ? "flex items-center font-extralight text-12 text-blue-300 line-through" : "flex items-center text-white font-extralight text-12"} onClick={() => {
                                                                    updateSentState(itemIndex, productIndex)
                                                                }
                                                                }>{<GoDotFill className="text-4 mr-1" />}{product.name}</span>
                                                                <span className="font-extralight text-10 text-white">${product.price}</span>
                                                            </div>
                                                            {product.modifiers.map((mod, modIndex) => (
                                                                <div key={modIndex} className="text-white font-extralight flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <BsDash className="text-4 ml-4" />
                                                                        <span className={product.sent ? "ml-1 text-12 text-blue-300 line-through" : "ml-1 text-12"}>{mod.name}</span>
                                                                    </div>
                                                                    <span className="ml-2 text-10">${mod.price}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))}

                                                    <div className="text-white text-10 mt-2">
                                                        <button className="bg-black bg-opacity-30 items-center text-white px-2 py-1 rounded-lg hover:bg-opacity-40 transitions mr-2">Edit</button>
                                                        <button className="bg-black bg-opacity-30 items-center text-white px-2 py-1 rounded-lg hover:bg-opacity-40 transitions mr-2" onClick={() => updateDeliveredState(itemIndex, false)}>Active</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

                <div className="flex justify-center items-center w-full">
                    <button className="bg-black bg-opacity-30 flex justify-between items-center text-white w-full px-3 py-2 rounded-lg hover:bg-opacity-40 transitions">
                        <span className="font-extralight">New Order</span>
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CurrentOrderWidget