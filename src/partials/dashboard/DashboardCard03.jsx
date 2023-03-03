import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../EditMenu';
// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';


function DashboardCard03({ memoryUsage }) {

  // const [memory, setmemory] = useState(0);

  // useEffect(() => {
  //   fetch('http://127.0.0.1/')
  //     .then(res => res.json())
  //     .then(data => {
  //       setmemory(data.ram_usage);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  // const [storage, setstorage] = useState(0);
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">

        <h2 className="text-lg font-semibold text-slate-800 mb-2">Memory</h2>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">{Math.round(memoryUsage)}%</div>
        </div>
      </div>

    </div>
  );
}

export default DashboardCard03;
