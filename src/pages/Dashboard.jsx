import React, { useState, useEffect } from 'react';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';

import { tailwindConfig, hexToRGB } from '../utils/Utils';

function Dashboard() {

  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [storageUsage, setStorageUsage] = useState(0);
  const [graphData, setGraphData] = useState([]);
  const [graphLabel, setGraphLabel] = useState([]);
  const [storageData, setStorageData] = useState([]);
  const [storageLabel, setStorageLabel] = useState([]);
  const [memoryData, setMemoryData] = useState([]);
  const [memoryLabel, setMemoryLabel] = useState([]);


  const getCpuUsage = () => {
    fetch('http://127.0.0.1/')
      .then(res => res.json())
      .then(data => {
        setCpuUsage(data.cpu_usage);
        setMemoryUsage(data.ram_usage);
        setStorageUsage(data.used_storage / data.total_storage * 100);
        setGraphData([...graphData, data.cpu_usage])
        setGraphLabel([...graphLabel, new Date()])
        setStorageData([...storageData, data.used_storage])
        setStorageLabel([...storageLabel, new Date()])
        setMemoryData([...memoryData, data.ram_usage])
        setMemoryLabel([...memoryLabel, new Date()])
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    let timer = setTimeout(() => getCpuUsage(), 500);

    // console.log(memoryData, '17');
    console.log(storageData);
    return () => clearTimeout(timer);

  }, [cpuUsage]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <DashboardCard01 cpuUsage={cpuUsage} />
              <DashboardCard02 storageUsage={storageUsage} />
              <DashboardCard03 memoryUsage={memoryUsage} />
              <DashboardCard05 data={graphData} label={graphLabel} />
              <DashboardCard08
                data={[
                  // Indigo line
                  {
                    label: 'Cpu',
                    data: graphData,
                    borderColor: tailwindConfig().theme.colors.indigo[500],
                    fill: false,
                    borderWidth: 2,
                    tension: 0,
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
                  },
                  // Blue line
                  {
                    label: 'Memory',
                    data: memoryData,
                    borderColor: tailwindConfig().theme.colors.blue[400],
                    fill: false,
                    borderWidth: 2,
                    tension: 0,
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
                  },
                  // Green line
                  {
                    label: 'Storage',
                    data: storageData,
                    borderColor: tailwindConfig().theme.colors.green[500],
                    fill: false,
                    borderWidth: 2,
                    tension: 0,
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    pointBackgroundColor: tailwindConfig().theme.colors.green[500],
                  },
                ]}
                cpulabel={graphLabel}
              // cpudata={graphData} cpulabel={graphLabel} memorydata={memoryData} memorylabel={memoryLabel} storagedata={storageData} storagelabel={storageLabel} 
              />
              <DashboardCard07 />
              <DashboardCard09 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;