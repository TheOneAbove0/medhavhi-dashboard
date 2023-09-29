import React, { useState } from "react";

export default function Uploads() {
  const [selectedRows, setSelectedRows] = useState([]);

  const data = [
    {
      title: "Chapter-1: Measurement I",
      duration: "72 mins",
      subject: "Science",
      uploadedOn: "21st Jan 2023",
      liveViewer: 234,
      totalViews: 1535,
      averageViewTime: "23:32 min",
      watchHours: "352hr 25min",
      imageUrl:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
      title: "Chapter-1: Introduction",
      duration: "53 mins",
      subject: "Computer",
      uploadedOn: "21st Jan 2023",
      liveViewer: 24,
      totalViews: 2568,
      averageViewTime: "13:32 min",
      watchHours: "451hr 31min",
      imageUrl:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
      title: "Chapter-4: Our Country",
      duration: "35 mins",
      subject: "Social",
      uploadedOn: "21st Jan 2023",
      liveViewer: 123,
      totalViews: 972,
      averageViewTime: "27:03 min",
      watchHours: "192hr 15min",
      imageUrl:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
      title: "Chapter-5: Pollution & its type",
      duration: "64 mins",
      subject: "EPH",
      uploadedOn: "21st Jan 2023",
      liveViewer: 4,
      totalViews: 746,
      averageViewTime: "35:15 min",
      watchHours: "69hr 42min",
      imageUrl:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
  ];

  const toggleRow = (index) => {
    const selectedIndex = selectedRows.indexOf(index);
    let newSelectedRows = [...selectedRows];

    if (selectedIndex === -1) {
      newSelectedRows = [...selectedRows, index];
    } else {
      newSelectedRows.splice(selectedIndex, 1);
    }

    setSelectedRows(newSelectedRows);
  };
  return (
    <div className=" flex bg-white gap-4 h-[284px] w-full rounded-2xl ">
      <div className=" px-6 ">
        <div className=" flex justify-between items-center border-b ">
        <h1 className="text-2xl py-[14px] pl-[32px] text-[16px] leading-5 font-semibold mb-4">Latest Uploads</h1>
        <div className=" flex gap-4 text-Jet ">
          <div className=" font-medium buttonColor ">Videos</div>
          <div className="text-DavyGray buttonColor">Study materials</div>
        </div>
        </div>
        
        <table className="w-full table-fixed border-collapse text-[14px]">
          <thead>
            <tr className="bg-white text-SpanishGrey py-2 ">
              <th className="w-[35px] "></th>
              <th className="w-[65px] "></th>
              <th className="w-[8/7] ">Video Details</th>
              <th className="w-[1/7] p-2">Duration</th>
              <th className="w-[1/7] p-2">Subject</th>
              <th className="w-[1/7] p-2">Uploaded on</th>
              <th className="w-[1/7] p-2">Live Viewer</th>
              <th className="w-[1/7] p-2">Total Views</th>
              <th className="w-[1/7] p-2">Average View Time</th>
              <th className="w-[1/7] p-2">Watch Hours</th>
              <th className="w-[1/7] p-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white text-Jet  " : ""}>
                <td className="">
                  <input
                  className="  w-4 h-4 "
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => toggleRow(index)}
                  />
                </td>
                <td className="">
                  <img
                    src={item.imageUrl}
                    alt={`study for ${item.title}`}
                    className="h-[32px] w-[52px] rounded-sm"
                  />
                </td>
                <td className="">{item.title}</td>
                <td className="pl-[50px] py-2">{item.duration}</td>
                <td className="pl-[50px] py-2">{item.subject}</td>
                <td className="pl-[50px] py-2">{item.uploadedOn}</td>
                <td className="pl-[50px] py-2">{item.liveViewer}</td>
                <td className="pl-[50px] py-2">{item.totalViews}</td>
                <td className="pl-[50px] py-2">{item.averageViewTime}</td>
                <td className="pl-[50px] py-2">{item.watchHours}</td>
                <td className="pl-[50px] py-2">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="2"
                      fill="#9A9A9A"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M16 13.3333C16.7334 13.3333 17.3334 12.7333 17.3334 12C17.3334 11.2667 16.7334 10.6667 16 10.6667C15.2667 10.6667 14.6667 11.2667 14.6667 12C14.6667 12.7333 15.2667 13.3333 16 13.3333ZM16 14.6667C15.2667 14.6667 14.6667 15.2667 14.6667 16C14.6667 16.7333 15.2667 17.3333 16 17.3333C16.7334 17.3333 17.3334 16.7333 17.3334 16C17.3334 15.2667 16.7334 14.6667 16 14.6667ZM16 18.6667C15.2667 18.6667 14.6667 19.2667 14.6667 20C14.6667 20.7333 15.2667 21.3333 16 21.3333C16.7334 21.3333 17.3334 20.7333 17.3334 20C17.3334 19.2667 16.7334 18.6667 16 18.6667Z"
                      fill="#30323D"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
