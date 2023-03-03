import React, { useState, useEffect } from 'react';

function DashboardCard07() {

  const [files, setFiles] = useState([]);



  const getFiles = () => {
    fetch('http://127.0.0.1/')
      .then(res => res.json())
      .then(data => {
        setFiles(data.running_tasks);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    let timer = setTimeout(() => getFiles(), 500);


    return () => clearTimeout(timer);

  }, [files]);
  return (
    <div className="col-span-full  bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Task Processes</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        {/* <p>{files}</p> */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Pid</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Username</div>
                </th>
                {/* <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Revenues</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sales</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Conversion</div>
                </th> */}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">

              {files.map((file) => <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">{file.name ? file.name : "None"}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">{file.pid}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">{file.username ? file.username : "None"}</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">{file.event_type}</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">{file.is_directory}</div>
                </td>
                <td className="p-2">
                  <div className="text-center">{file.dest_path}</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">{file.timestamp}</div>
                </td> */}
              </tr>)}


            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
