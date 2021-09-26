
import { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { CogIcon } from '@heroicons/react/outline'
import { getQuery, updateQuery } from "../../auth";
import State from "../utils/state";
import DashboardContext from "../contexts/dashboard-context";

// Remake
export default function Station({ station }) {

    // context -> stanice (data, handles)
    const {name, state} = station;
    const {setDetailStation} = useContext(DashboardContext)
    
    const click = () => {
        console.log("Switching to detail of ", name);
        setDetailStation(station)
    }

    return (
        <div
            className="rounded-2xl px-6 py-4 m-4 bg-white shadow hover:shadow-md hover:-translate-y-2"
            onClick={click}
        >
            <h2>{name}</h2>
            
            <State state={state}/>
            <span>{state}</span> 
        </div>
    )
}