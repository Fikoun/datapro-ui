
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CogIcon } from '@heroicons/react/outline'

// Remake
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
            ) : (<div className="flex-center justify-between max-w-md ml-auto p-3">
                <button onClick={() => setConnectModal(true)} className="btn">
                    <CogIcon className="h-6 w-5 mr-2" />
                    <span>Configuration</span>
                </button>
                <button onClick={() => setConnectModal(true)} className="btn btn-red">
                    <span>Disconnect</span>
                </button>
                <button onClick={() => setConnectModal(true)} className="btn btn-green">
                    <span>Connect</span>
                </button>
            </div>)
            }
        </div>
    )
}