import React, { useState, useEffect } from 'react';

function DashboardCard07() {

  const [files, setFiles] = useState([]);



  const getFiles = () => {
    fetch('http://127.0.0.1:5000/')
      .then(res => res.json())
      .then(data => {
        setFiles(data);
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
        <h2 className="font-semibold text-slate-800">Recent Changes</h2>
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
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Event type</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Timestamp</div>
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
                    <div className="text-slate-800">{file.src_path ? file.src_path : "None"}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">{file.event_type ? file.event_type : "None"}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">{file.timestamp ? file.timestamp : "None"}</div>
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
