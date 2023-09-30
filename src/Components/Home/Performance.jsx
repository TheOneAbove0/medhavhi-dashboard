import React, { useState } from "react";


export default function Performance() {
  const [active, setActive] = useState("Class");
  const [newActive, setNewActive] = useState("Average view");

  const ClickHandler = (status) => {
    setActive(status);
  };

  const ClickHandler2 = (status) => {
    setNewActive(status);
  };

 
  return (
    <div className=" flex gap-4 font-Figtree  w-full ">
      <div className=" bg-white rounded-2xl w-3/5 h-[340px]  ">
        <div className=" flex flex-col  ">
          <div className=" flex justify-between items-center py-[14px] px-[32px] border-b  ">
            <div className=" font-semibold text-[14px]   ">Performance</div>
            <div className="flex items-center text-[12px] gap-6">
              <span
                className={` cursor-pointer ${
                  newActive === "Average view"
                    ? "text-Jet buttonColor font-medium"
                    : "text-DavyGray"
                }`}
                onClick={() => ClickHandler2("Average view")}
              >
                Average view
              </span>
              <span
                className={`font-medium cursor-pointer ${
                  newActive === "Consecutive viewers"
                    ? "text-Jet buttonColor font-medium"
                    : "text-DavyGray"
                }`}
                onClick={() => ClickHandler2("Consecutive viewers")}
              >
                Consecutive viewers
              </span>
              <span
                className={`font-medium cursor-pointer ${
                  newActive === "Watch hour"
                    ? "text-Jet buttonColor font-medium"
                    : "text-DavyGray"
                }`}
                onClick={() => ClickHandler2("Watch hour")}
              >
                Watch hour
              </span>
            </div>
          </div>

          <div className=" flex justify-end pt-4 pb-2 pr-[10px] ">
            <svg
              width="116"
              height="32"
              viewBox="0 0 116 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="116"
                height="32"
                rx="4"
                fill="#9A9A9A"
                fillOpacity="0.2"
              />
              <path
                d="M10.604 20V12.14L10.688 11.6H11.6V20H10.604ZM8.72 13.76V12.836C8.888 12.844 9.088 12.788 9.32 12.668C9.552 12.548 9.792 12.392 10.04 12.2C10.288 12.008 10.504 11.808 10.688 11.6L11.312 12.284C11.048 12.564 10.772 12.816 10.484 13.04C10.196 13.264 9.904 13.444 9.608 13.58C9.312 13.708 9.016 13.768 8.72 13.76ZM13.881 20V19.16C13.881 18.896 13.933 18.636 14.037 18.38C14.149 18.116 14.305 17.856 14.505 17.6C14.713 17.344 14.965 17.104 15.261 16.88L17.001 15.572C17.209 15.428 17.389 15.264 17.541 15.08C17.701 14.888 17.825 14.692 17.913 14.492C18.001 14.284 18.045 14.084 18.045 13.892C18.045 13.612 17.977 13.36 17.841 13.136C17.705 12.904 17.513 12.72 17.265 12.584C17.017 12.448 16.725 12.38 16.389 12.38C16.061 12.38 15.773 12.444 15.525 12.572C15.277 12.692 15.073 12.856 14.913 13.064C14.753 13.264 14.637 13.48 14.565 13.712L13.533 13.508C13.629 13.148 13.801 12.812 14.049 12.5C14.305 12.188 14.629 11.936 15.021 11.744C15.413 11.552 15.849 11.456 16.329 11.456C16.889 11.456 17.373 11.564 17.781 11.78C18.189 11.988 18.505 12.276 18.729 12.644C18.961 13.004 19.077 13.416 19.077 13.88C19.077 14.32 18.957 14.736 18.717 15.128C18.477 15.52 18.129 15.9 17.673 16.268L16.029 17.516C15.709 17.756 15.461 18.008 15.285 18.272C15.117 18.536 15.021 18.812 14.997 19.1H19.197V20H13.881ZM25.709 20.144C25.421 20.144 25.153 20.1 24.905 20.012C24.665 19.932 24.449 19.824 24.257 19.688C24.065 19.544 23.901 19.384 23.765 19.208C23.629 19.024 23.517 18.836 23.429 18.644L24.197 18.2C24.365 18.496 24.569 18.74 24.809 18.932C25.057 19.124 25.361 19.22 25.721 19.22C26.009 19.22 26.289 19.152 26.561 19.016C26.841 18.88 27.069 18.652 27.245 18.332C27.421 18.012 27.509 17.592 27.509 17.072V11.6H28.517V17.468C28.517 17.908 28.437 18.296 28.277 18.632C28.125 18.968 27.913 19.248 27.641 19.472C27.377 19.696 27.077 19.864 26.741 19.976C26.405 20.088 26.061 20.144 25.709 20.144ZM34.2968 20L34.2488 19.016V16.832C34.2488 16.36 34.1968 15.972 34.0928 15.668C33.9888 15.356 33.8248 15.12 33.6008 14.96C33.3768 14.8 33.0848 14.72 32.7248 14.72C32.3968 14.72 32.1128 14.788 31.8728 14.924C31.6408 15.052 31.4488 15.26 31.2968 15.548L30.4328 15.212C30.5848 14.932 30.7688 14.692 30.9848 14.492C31.2008 14.284 31.4528 14.128 31.7408 14.024C32.0288 13.912 32.3568 13.856 32.7248 13.856C33.2848 13.856 33.7448 13.968 34.1048 14.192C34.4728 14.408 34.7488 14.732 34.9328 15.164C35.1168 15.588 35.2048 16.116 35.1968 16.748L35.1848 20H34.2968ZM32.4968 20.144C31.7928 20.144 31.2408 19.984 30.8408 19.664C30.4488 19.336 30.2528 18.884 30.2528 18.308C30.2528 17.7 30.4528 17.236 30.8528 16.916C31.2608 16.588 31.8288 16.424 32.5568 16.424H34.2728V17.228H32.7728C32.2128 17.228 31.8128 17.32 31.5728 17.504C31.3408 17.688 31.2248 17.952 31.2248 18.296C31.2248 18.608 31.3408 18.856 31.5728 19.04C31.8048 19.216 32.1288 19.304 32.5448 19.304C32.8888 19.304 33.1888 19.232 33.4448 19.088C33.7008 18.936 33.8968 18.724 34.0328 18.452C34.1768 18.172 34.2488 17.844 34.2488 17.468H34.6568C34.6568 18.284 34.4728 18.936 34.1048 19.424C33.7368 19.904 33.2008 20.144 32.4968 20.144ZM36.958 20V14H37.858L37.918 15.104V20H36.958ZM41.17 20V16.928H42.13V20H41.17ZM41.17 16.928C41.17 16.336 41.102 15.884 40.966 15.572C40.83 15.26 40.642 15.048 40.402 14.936C40.162 14.816 39.89 14.756 39.586 14.756C39.058 14.756 38.646 14.944 38.35 15.32C38.062 15.688 37.918 16.212 37.918 16.892H37.45C37.45 16.26 37.542 15.716 37.726 15.26C37.91 14.804 38.178 14.456 38.53 14.216C38.882 13.976 39.306 13.856 39.802 13.856C40.274 13.856 40.682 13.952 41.026 14.144C41.378 14.328 41.65 14.624 41.842 15.032C42.042 15.44 42.138 15.976 42.13 16.64V16.928H41.17ZM43.7454 16.868V15.992H47.3454V16.868H43.7454ZM50.8973 20V12.14L50.9813 11.6H51.8933V20H50.8973ZM49.0133 13.76V12.836C49.1813 12.844 49.3813 12.788 49.6133 12.668C49.8453 12.548 50.0853 12.392 50.3333 12.2C50.5813 12.008 50.7973 11.808 50.9813 11.6L51.6053 12.284C51.3413 12.564 51.0653 12.816 50.7773 13.04C50.4893 13.264 50.1973 13.444 49.9013 13.58C49.6053 13.708 49.3093 13.768 49.0133 13.76ZM56.6943 11.456C57.2863 11.456 57.7743 11.568 58.1583 11.792C58.5423 12.008 58.8503 12.304 59.0823 12.68C59.3223 13.056 59.4903 13.492 59.5863 13.988C59.6903 14.476 59.7423 14.996 59.7423 15.548C59.7423 16.268 59.6663 16.912 59.5143 17.48C59.3623 18.048 59.1463 18.532 58.8663 18.932C58.5863 19.324 58.2463 19.624 57.8463 19.832C57.4543 20.04 57.0063 20.144 56.5023 20.144C56.0863 20.144 55.6703 20.08 55.2543 19.952C54.8463 19.816 54.4783 19.632 54.1503 19.4L54.7143 18.68C54.9703 18.856 55.2463 18.996 55.5423 19.1C55.8463 19.196 56.1343 19.244 56.4063 19.244C57.2223 19.244 57.8423 18.9 58.2663 18.212C58.6983 17.524 58.8863 16.484 58.8303 15.092L59.0463 15.296C58.8543 15.784 58.5463 16.172 58.1223 16.46C57.6983 16.748 57.1983 16.892 56.6223 16.892C56.0783 16.892 55.5983 16.776 55.1823 16.544C54.7663 16.304 54.4383 15.98 54.1983 15.572C53.9663 15.164 53.8503 14.692 53.8503 14.156C53.8503 13.628 53.9703 13.164 54.2103 12.764C54.4503 12.356 54.7823 12.036 55.2063 11.804C55.6383 11.572 56.1343 11.456 56.6943 11.456ZM56.6943 12.344C56.3423 12.344 56.0263 12.424 55.7463 12.584C55.4663 12.736 55.2463 12.952 55.0863 13.232C54.9343 13.504 54.8583 13.82 54.8583 14.18C54.8583 14.54 54.9343 14.86 55.0863 15.14C55.2463 15.412 55.4663 15.628 55.7463 15.788C56.0263 15.94 56.3423 16.016 56.6943 16.016C57.0623 16.016 57.3823 15.94 57.6543 15.788C57.9343 15.628 58.1503 15.412 58.3023 15.14C58.4623 14.86 58.5423 14.54 58.5423 14.18C58.5423 13.82 58.4623 13.504 58.3023 13.232C58.1503 12.952 57.9343 12.736 57.6543 12.584C57.3823 12.424 57.0623 12.344 56.6943 12.344ZM66.096 20.144C65.808 20.144 65.54 20.1 65.292 20.012C65.052 19.932 64.836 19.824 64.644 19.688C64.452 19.544 64.288 19.384 64.152 19.208C64.016 19.024 63.904 18.836 63.816 18.644L64.584 18.2C64.752 18.496 64.956 18.74 65.196 18.932C65.444 19.124 65.748 19.22 66.108 19.22C66.396 19.22 66.676 19.152 66.948 19.016C67.228 18.88 67.456 18.652 67.632 18.332C67.808 18.012 67.896 17.592 67.896 17.072V11.6H68.904V17.468C68.904 17.908 68.824 18.296 68.664 18.632C68.512 18.968 68.3 19.248 68.028 19.472C67.764 19.696 67.464 19.864 67.128 19.976C66.792 20.088 66.448 20.144 66.096 20.144ZM74.6838 20L74.6358 19.016V16.832C74.6358 16.36 74.5838 15.972 74.4798 15.668C74.3758 15.356 74.2118 15.12 73.9878 14.96C73.7638 14.8 73.4718 14.72 73.1118 14.72C72.7838 14.72 72.4998 14.788 72.2598 14.924C72.0278 15.052 71.8358 15.26 71.6838 15.548L70.8198 15.212C70.9718 14.932 71.1558 14.692 71.3718 14.492C71.5878 14.284 71.8398 14.128 72.1278 14.024C72.4158 13.912 72.7438 13.856 73.1118 13.856C73.6718 13.856 74.1318 13.968 74.4918 14.192C74.8598 14.408 75.1358 14.732 75.3198 15.164C75.5038 15.588 75.5918 16.116 75.5838 16.748L75.5718 20H74.6838ZM72.8838 20.144C72.1798 20.144 71.6278 19.984 71.2278 19.664C70.8358 19.336 70.6398 18.884 70.6398 18.308C70.6398 17.7 70.8398 17.236 71.2398 16.916C71.6478 16.588 72.2158 16.424 72.9438 16.424H74.6598V17.228H73.1598C72.5998 17.228 72.1998 17.32 71.9598 17.504C71.7278 17.688 71.6118 17.952 71.6118 18.296C71.6118 18.608 71.7278 18.856 71.9598 19.04C72.1918 19.216 72.5158 19.304 72.9318 19.304C73.2758 19.304 73.5758 19.232 73.8318 19.088C74.0878 18.936 74.2838 18.724 74.4198 18.452C74.5638 18.172 74.6358 17.844 74.6358 17.468H75.0438C75.0438 18.284 74.8598 18.936 74.4918 19.424C74.1238 19.904 73.5878 20.144 72.8838 20.144ZM77.345 20V14H78.245L78.305 15.104V20H77.345ZM81.557 20V16.928H82.517V20H81.557ZM81.557 16.928C81.557 16.336 81.489 15.884 81.353 15.572C81.217 15.26 81.029 15.048 80.789 14.936C80.549 14.816 80.277 14.756 79.973 14.756C79.445 14.756 79.033 14.944 78.737 15.32C78.449 15.688 78.305 16.212 78.305 16.892H77.837C77.837 16.26 77.929 15.716 78.113 15.26C78.297 14.804 78.565 14.456 78.917 14.216C79.269 13.976 79.693 13.856 80.189 13.856C80.661 13.856 81.069 13.952 81.413 14.144C81.765 14.328 82.037 14.624 82.229 15.032C82.429 15.44 82.525 15.976 82.517 16.64V16.928H81.557Z"
                fill="#565659"
              />
              <path
                d="M96 14L100 18L104 14"
                stroke="#9A9A9A"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className=" relative ">
            <div className=" absolute right-[320px] top-[-60px]  w-[600px] h-[300px] ">
             
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-2xl w-2/5 h-[340px]  ">
        <div className=" flex justify-between items-center px-6 border-b py-[14px] ">
          <div className=" font-semibold text-[14px] ">Scheduled</div>
          <div className=" flex gap-4 text-DavyGray text-[12px] ">
            <div
              onClick={() => {
                ClickHandler("Videos");
              }}
              className={`font-medium cursor-pointer  ${
                active === "Videos" ? "text-Jet buttonColor" : "text-DavyGray"
              }`}
            >
              Videos
            </div>
            <div
              onClick={() => {
                ClickHandler("Class");
              }}
              className={`font-medium cursor-pointer ${
                active === "Class" ? "text-Jet buttonColor" : "text-DavyGray"
              } `}
            >
              Class
            </div>
            <div
              onClick={() => {
                ClickHandler("Events");
              }}
              className={`font-medium cursor-pointer ${
                active === "Events" ? "text-Jet buttonColor" : "text-DavyGray"
              } `}
            >
              Events
            </div>
          </div>
        </div>

        <div className=" flex relative flex-col gap-1 ml-4 pl-4 mt-2 pt-2 border-l-4 rounded-l-lg border-primaryColor ">
          <div className="absolute right-6 top-4">
            <svg
              width="4"
              height="14"
              viewBox="0 0 4 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.99998 3.66665C2.91665 3.66665 3.66665 2.91665 3.66665 1.99998C3.66665 1.08331 2.91665 0.333313 1.99998 0.333313C1.08331 0.333313 0.333313 1.08331 0.333313 1.99998C0.333313 2.91665 1.08331 3.66665 1.99998 3.66665ZM1.99998 5.33331C1.08331 5.33331 0.333313 6.08331 0.333313 6.99998C0.333313 7.91665 1.08331 8.66665 1.99998 8.66665C2.91665 8.66665 3.66665 7.91665 3.66665 6.99998C3.66665 6.08331 2.91665 5.33331 1.99998 5.33331ZM1.99998 10.3333C1.08331 10.3333 0.333313 11.0833 0.333313 12C0.333313 12.9166 1.08331 13.6666 1.99998 13.6666C2.91665 13.6666 3.66665 12.9166 3.66665 12C3.66665 11.0833 2.91665 10.3333 1.99998 10.3333Z"
                fill="#565659"
              />
            </svg>
          </div>
          <h1 className=" font-semibold text-[14px] leading-5  ">
            Doubt clearance class{" "}
          </h1>
          <span className=" text-[12px] ">Dec 20 2022, 1:00 Pm - 3:30 Pm</span>
          <div className=" flex items-center gap-4 text-[12px] ">
            <span className=" text-[#EA526F]  ">Science</span>
            <div className="  gap-2 flex items-center">
              <img
                className=" w-6 h-6 "
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNOeZ__-W8I9I8_0p0IS42vAq2xPUObTOfGC4yB8r-3kKldwQ2"
                alt="ronal"
              />
              <span>Aalok Regmi</span>
            </div>
          </div>

          <div className=" flex justify-between items-center pt-[2px] ">
            <div className=" relative flex  ">
              <img
                className=" w-6 h-6  "
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNOeZ__-W8I9I8_0p0IS42vAq2xPUObTOfGC4yB8r-3kKldwQ2"
                alt="ronal"
              />
              <img
                className=" w-6 h-6 rounded-full absolute left-5 border-white border-2 z-10 "
                src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
                alt="ronal"
              />
              <img
                className=" w-6 h-6 rounded-full absolute left-10 border-white border-2 z-20 "
                src="https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg"
                alt="ronal"
              />
              <img
                className=" w-6 h-6 rounded-full absolute left-[60px] border-white border-2 z-30 object-cover "
                src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg"
                alt="ronal"
              />
            </div>

            <div className=" flex  items-center gap-2 py-2 px-4  bg-[#37B76C] bg-opacity-[10%] mr-4 rounded-full ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.64024 9.15328C8.67485 9.15328 9.51357 8.31456 9.51357 7.27995C9.51357 6.24533 8.67485 5.40662 7.64024 5.40662C6.60563 5.40662 5.76691 6.24533 5.76691 7.27995C5.76691 8.31456 6.60563 9.15328 7.64024 9.15328Z"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.0997 13.4666C11.0997 11.9133 9.55302 10.6466 7.63969 10.6466C5.72635 10.6466 4.17969 11.9066 4.17969 13.4666"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 8.33333C14 11.8333 11.1666 14.6667 7.66665 14.6667C4.16665 14.6667 1.33331 11.8333 1.33331 8.33333C1.33331 4.83333 4.16665 2 7.66665 2C8.53998 2 9.37331 2.17333 10.1333 2.49333C10.0466 2.75999 9.99998 3.04 9.99998 3.33333C9.99998 3.83333 10.14 4.30667 10.3866 4.70667C10.52 4.93333 10.6933 5.13998 10.8933 5.31331C11.36 5.73998 11.98 6 12.6666 6C12.96 6 13.24 5.95332 13.5 5.85999C13.82 6.61999 14 7.46 14 8.33333Z"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.3333 3.33329C15.3333 3.54663 15.3067 3.75329 15.2533 3.95329C15.1933 4.21995 15.0867 4.47996 14.9467 4.70662C14.6267 5.24662 14.1133 5.66661 13.5 5.85994C13.24 5.95328 12.96 5.99996 12.6667 5.99996C11.98 5.99996 11.36 5.73994 10.8933 5.31327C10.6933 5.13994 10.52 4.93329 10.3867 4.70662C10.14 4.30662 10 3.83329 10 3.33329C10 3.03996 10.0467 2.75995 10.1333 2.49329C10.26 2.10662 10.4733 1.75997 10.7533 1.47331C11.24 0.973307 11.92 0.666626 12.6667 0.666626C13.4533 0.666626 14.1667 1.00664 14.6467 1.5533C15.0733 2.02664 15.3333 2.65329 15.3333 3.33329Z"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.66 3.32001H11.6733"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6667 2.34668V4.34001"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Invite</span>
            </div>
          </div>
        </div>

        <div className=" flex relative flex-col gap-1 ml-4 pl-4 mt-2 pt-2 border-l-4 rounded-l-lg border-[#37B76C] ">
          <div className="absolute right-6 top-4">
            <svg
              width="4"
              height="14"
              viewBox="0 0 4 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.99998 3.66665C2.91665 3.66665 3.66665 2.91665 3.66665 1.99998C3.66665 1.08331 2.91665 0.333313 1.99998 0.333313C1.08331 0.333313 0.333313 1.08331 0.333313 1.99998C0.333313 2.91665 1.08331 3.66665 1.99998 3.66665ZM1.99998 5.33331C1.08331 5.33331 0.333313 6.08331 0.333313 6.99998C0.333313 7.91665 1.08331 8.66665 1.99998 8.66665C2.91665 8.66665 3.66665 7.91665 3.66665 6.99998C3.66665 6.08331 2.91665 5.33331 1.99998 5.33331ZM1.99998 10.3333C1.08331 10.3333 0.333313 11.0833 0.333313 12C0.333313 12.9166 1.08331 13.6666 1.99998 13.6666C2.91665 13.6666 3.66665 12.9166 3.66665 12C3.66665 11.0833 2.91665 10.3333 1.99998 10.3333Z"
                fill="#565659"
              />
            </svg>
          </div>
          <h1 className=" font-semibold text-[14px] leading-5  ">Q&A class</h1>
          <span className=" text-[12px] ">Dec 20 2022, 1:00 Pm - 3:30 Pm</span>
          <div className=" flex items-center gap-4 text-[12px] ">
            <span className=" text-[#EA526F]  ">Science</span>
            <div className="  gap-2 flex items-center">
              <img
                className=" w-6 h-6 "
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNOeZ__-W8I9I8_0p0IS42vAq2xPUObTOfGC4yB8r-3kKldwQ2"
                alt="ronal"
              />
              <span>Aalok Regmi</span>
            </div>
          </div>

          <div className=" flex justify-between items-center pt-[2px] ">
            <div className=" relative flex  ">
              <img
                className=" w-6 h-6  "
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNOeZ__-W8I9I8_0p0IS42vAq2xPUObTOfGC4yB8r-3kKldwQ2"
                alt="ronal"
              />
              <img
                className=" w-6 h-6 rounded-full absolute left-5 border-white border-2 z-10 "
                src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
                alt="ronal"
              />
              <img
                className=" w-6 h-6 rounded-full absolute left-10 border-white border-2 z-20 "
                src="https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg"
                alt="ronal"
              />
              <img
                className=" w-6 h-6 rounded-full absolute left-[60px] border-white border-2 z-30 object-cover "
                src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg"
                alt="ronal"
              />
            </div>

            <div className=" flex  items-center gap-2 py-2 px-4  bg-[#37B76C] bg-opacity-[10%] mr-4 rounded-full ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.64024 9.15328C8.67485 9.15328 9.51357 8.31456 9.51357 7.27995C9.51357 6.24533 8.67485 5.40662 7.64024 5.40662C6.60563 5.40662 5.76691 6.24533 5.76691 7.27995C5.76691 8.31456 6.60563 9.15328 7.64024 9.15328Z"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.0997 13.4666C11.0997 11.9133 9.55302 10.6466 7.63969 10.6466C5.72635 10.6466 4.17969 11.9066 4.17969 13.4666"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 8.33333C14 11.8333 11.1666 14.6667 7.66665 14.6667C4.16665 14.6667 1.33331 11.8333 1.33331 8.33333C1.33331 4.83333 4.16665 2 7.66665 2C8.53998 2 9.37331 2.17333 10.1333 2.49333C10.0466 2.75999 9.99998 3.04 9.99998 3.33333C9.99998 3.83333 10.14 4.30667 10.3866 4.70667C10.52 4.93333 10.6933 5.13998 10.8933 5.31331C11.36 5.73998 11.98 6 12.6666 6C12.96 6 13.24 5.95332 13.5 5.85999C13.82 6.61999 14 7.46 14 8.33333Z"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.3333 3.33329C15.3333 3.54663 15.3067 3.75329 15.2533 3.95329C15.1933 4.21995 15.0867 4.47996 14.9467 4.70662C14.6267 5.24662 14.1133 5.66661 13.5 5.85994C13.24 5.95328 12.96 5.99996 12.6667 5.99996C11.98 5.99996 11.36 5.73994 10.8933 5.31327C10.6933 5.13994 10.52 4.93329 10.3867 4.70662C10.14 4.30662 10 3.83329 10 3.33329C10 3.03996 10.0467 2.75995 10.1333 2.49329C10.26 2.10662 10.4733 1.75997 10.7533 1.47331C11.24 0.973307 11.92 0.666626 12.6667 0.666626C13.4533 0.666626 14.1667 1.00664 14.6467 1.5533C15.0733 2.02664 15.3333 2.65329 15.3333 3.33329Z"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.66 3.32001H11.6733"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6667 2.34668V4.34001"
                  stroke="#37B76C"
                  strokeWidth="0.666667"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Invite</span>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
