import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01({ cpuUsage }) {


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">

        <h2 className="text-lg font-semibold text-slate-800 mb-2">CPU</h2>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">{cpuUsage}%</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
