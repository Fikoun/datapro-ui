
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Station({ station }) {

    let [connectModal, setConnectModal] = useState(false);

    return (
        <div className="relative">
            <Dialog open={connectModal} onClose={() => {}} className="shadow p-4 absolute rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Dialog.Overlay />

                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Connect to station</Dialog.Title>
                <Dialog.Description>
                    <hr className="my-3"/>
                </Dialog.Description>

                <div>
                    
                </div>
                
                <hr className="my-2"/>

                <button className="p-2 m-1 bg-green" onClick={() => setConnectModal(false)}>Save</button>
                <button onClick={() => setConnectModal(false)}>Cancel</button>
            </Dialog>

            {station ? (
                <div>
                    Station
                </div>
            ) : (
                <button onClick={() => setConnectModal(true)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                    <span>Connect</span>
                </button>
            )
            }
        </div>
    )
}
