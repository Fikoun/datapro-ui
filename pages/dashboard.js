import { useState, useEffect, useContext } from "react";
import Page from '../components/page';
import Station from '../components/station/station';
import StationDetail from '../components/station/station-detail';
import { CogIcon, SwitchHorizontalIcon } from "@heroicons/react/outline";
import { getQuery } from "../auth";
import Context from "../components/contexts/dashboard-context";

function Dashboard() {

  const [stations, setStations] = useState([])
  const [detailStation, setDetailStation] = useState(null)

  const reloadStations = async () => {
    const stations = await getQuery('data-stations')
    setStations(stations)
  }
  const defaultContext = {
    getDetailStation: () => detailStation,
    setDetailStation,
    reloadStations
  }

  useEffect(reloadStations, [])
  return (
    <Page header="Control Panel">
      <Context.Provider value={defaultContext}>
      {/* LEFT Panel */}
        <div className="flex flex-wrap h-screen px-2">
          <div className="max-w-xs flex-1 shadow h-screen rounded-md py-2 bg-gray-50">
            <div className="text-center pt-2">
              <button onClick={() => reloadStations() && setDetailStation()} className="btn">
                <SwitchHorizontalIcon className="h-6 w-5 mr-2" /> Reload
              </button>
              <hr className="my-3 mx-3" />
            </div>
            {stations.map((station, key) => <Station key={key} station={station} />)}
          </div>

      {/* DETAIL Panel */}
          <div className="flex-1 pl-5">
            <div className="h-screen shadow rounded-md py-2 bg-gray-50">
              {detailStation && <StationDetail />}
            </div>
          </div>
        </div>
      </Context.Provider>
    </Page>
  )
}

// export async function getServerSideProps() {
//   const stations = await getQuery('data-stations')
//   return {
//     props: {
//       stations
//     }
//   }
// }

export default Dashboard;