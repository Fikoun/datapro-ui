
import { useState, useEffect, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { CogIcon, CodeIcon } from '@heroicons/react/outline'
import { getQuery, updateQuery } from "../../auth";
import State from "../utils/state";
import DashboardContext from "../contexts/dashboard-context";

// Remake
export default function StationDetail() {
    const { getDetailStation, setDetailStation, reloadStations } = useContext(DashboardContext)
    const { name, state, id, socketId } = getDetailStation();
    let pingInterval = false;


    const [portList, setPortList] = useState([])

    // Station Commands
    const reloadDetail = async () => {
        console.log(getDetailStation());
        //if (detailStation.name !== station.name) return;

        const response = await getQuery('data-stations', id)
        //setDetailStation(response)
    }

    const acceptStation = async () => {
        await updateQuery('data-stations', id, { state: "online" })
        reloadDetail();
        reloadStations();
    }
    const stopStation = async () => {
        //const station = await commandQuery('data-stations', id, {state: "online"})
        //setStation(station)
    }

    const listPorts = async () => {
        const response = await getQuery('data-stations-list', socketId)
        setPortList(response.list)
        reloadDetail();
    }

    useEffect(() => {
        pingInterval = setInterval(reloadDetail, 2000);
        return () => {
            console.log("clearing");
            clearInterval(pingInterval)
            pingInterval = false;
        }
    }, [])

    return (<>
        <h1 className="p-4 px-6">
            {name}
        </h1>
        <h3 className="m-0 ml-6 mb-4">
            <State state={state} />
            <i>{state}</i>
        </h3>
        <hr className="m-4" />

        {state == "offline" ? <p className="p-3 m-2">
            Station hasn't been started or cannot connect! (..pinging for updates)
        </p> :
            <div className="flex-center justify-between max-w-md ml-auto p-4">
                {state === "unknown" && (
                    <button onClick={acceptStation} className="btn btn-green self-end">
                        <span>Accept station</span>
                    </button>
                )}
                {state == "online" && (<>
                    <button onClick={listPorts} className="btn btn-blue">
                        <span>List Ports</span>
                    </button>
                    <button onClick={() => { }} className="btn">
                        <CogIcon className="h-6 w-5 mr-2" />
                        <span>Configuration</span>
                    </button>
                    <button onClick={stopStation} className="btn btn-red">
                        <span>Stop</span>
                    </button>
                </>)}
            </div>
        }

        <hr className="m-4" />

        {portList.length > 0 && <>
            <h3 className="p-0 pl-10 my-3">Available ports:</h3>
            <div className="flex-center justify-center flex-wrap">
                {portList.map((port) =>
                    <button onClick={() => { }} className="btn m-2">
                        <CodeIcon className="h-6 w-5 mr-2" />
                        <span>{port.name} [<i>{port.path}</i>] </span>
                    </button>)}
            </div>
            <hr className="m-4" />
        </>}

    </>)
}