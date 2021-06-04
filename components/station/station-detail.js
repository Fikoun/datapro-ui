
import { useState, useEffect, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { CogIcon, CodeIcon } from '@heroicons/react/outline'
import { getQuery, updateQuery } from "../../auth";
import State from "../utils/state";
import DashboardContext from "../contexts/dashboard-context";

// Remake
export default function StationDetail(props) {
    const { detailStation, setDetailStation, reload } = useContext(DashboardContext)
    const [portList, setPortList] = useState([])
    const { name, state, id, socketId } = detailStation;

    // Station Commands
    // const reloadStation = async () => {
    //     const station = await getQuery('data-stations', id)
    //     reload();
    //     setDetailStation(station)
    // }
    const acceptStation = async () => {
        const station = await updateQuery('data-stations', id, { state: "online" })
        reload();
    }
    const stopStation = async () => {
        //const station = await commandQuery('data-stations', id, {state: "online"})
        //setStation(station)
    }
    const listStation = async () => {
        // TODO: Name the better
        const portListResponse = await getQuery('data-stations-list', socketId)
        setPortList(portListResponse.list)
        reload();
    }

    let pingInterval;
    useEffect(() => {
        pingInterval = setInterval(reload, 2000);
        return () => {
            clearInterval(pingInterval)
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
            ... station hasn't been started or cannot connect
        </p> :
            <div className="flex-center justify-between max-w-md ml-auto p-4">
                {state === "unknown" && (
                    <button onClick={acceptStation} className="btn btn-green">
                        <span>Accept station</span>
                    </button>
                )}
                {state == "online" && (<>
                    <button onClick={listStation} className="btn btn-blue">
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

        { portList.length > 0 &&
            <div className="flex-center justify-center max-w-md ml-auto p-4">
                {portList.map((port) =>
                    <button onClick={() => { }} className="btn">
                        <CodeIcon className="h-6 w-5 mr-2" />
                        <span>{ port.name } [<i>{port.path}</i>] </span>
                    </button>)}
            </div>}

    </>)
}