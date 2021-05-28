
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { CogIcon } from '@heroicons/react/outline'
import { getQuery, updateQuery } from "../../auth";
import State from "../utils/state";

// Remake
export default function StationDetail(props) {

    const [station, setStation] = useState(props.station)
    const { name, state, id } = station;

    // Station Commands
    const reloadStation = async () => {
        const station = await getQuery('data-stations', id)
        props.reloadHandle();
        setStation(station)
    }
    const acceptStation = async () => {
        const station = await updateQuery('data-stations', id, { state: "online" })
        props.reloadHandle();
        setStation(station)
    }
    const stopStation = async () => {
        //const station = await commandQuery('data-stations', id, {state: "online"})
        //setStation(station)
    }
    const listStation = async () => {
        const station = await getQuery('data-stations-list')
        props.reloadHandle();
        setStation(station)
    }

    let pingInterval;
    useEffect(() => {
        pingInterval = setInterval(reloadStation, 2000);
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
                    <button onClick={() => {}} className="btn">
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

    </>)
}