import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white  w-full   h-[84px] px-6 py-4 flex justify-between items-center  sticky top-0 z-50">
      <div className=" items-center">
        <div className="flex items-center gap-3 text-Jet leading-6 tracking-[0.024] text-lg">
          <span>
            Good Morning <strong>Medhavhi</strong>
          </span>
        </div>
      </div>
      <div className="lg:flex-1 lg:max-w-sm flex justify-between items-center gap-8">
        <button className=" bg-primaryColor cursor-pointer w-36 h-[52px]  px-6 ml-auto py-4 text-white rounded-lg flex items-center gap-2 ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0008 18.3334C14.5841 18.3334 18.3341 14.5834 18.3341 10.0001C18.3341 5.41674 14.5841 1.66675 10.0008 1.66675C5.41748 1.66675 1.66748 5.41674 1.66748 10.0001C1.66748 14.5834 5.41748 18.3334 10.0008 18.3334Z"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66626 10.0001H13.3329"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 13.3333V6.66663"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Create</span>
        </button>

        
        <div >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.87 3.20019C13.56 3.11019 13.24 3.04019 12.91 3.00019C11.95 2.88019 11.03 2.95019 10.17 3.20019C10.46 2.46019 11.18 1.94019 12.02 1.94019C12.86 1.94019 13.58 2.46019 13.87 3.20019Z"
              stroke="#30323D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.02 19.0599C15.02 20.7099 13.67 22.0599 12.02 22.0599C11.2 22.0599 10.44 21.7199 9.90005 21.1799C9.36005 20.6399 9.02005 19.8799 9.02005 19.0599"
              stroke="#30323D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M16.5729 3.93637C15.3705 2.83442 13.7706 2.16003 12.02 2.16003C8.2958 2.16003 5.27002 5.18582 5.27002 8.91003V11.8C5.27002 12.0147 5.22144 12.3287 5.12859 12.6632C5.03603 12.9966 4.91607 13.2906 4.80657 13.4747L4.80581 13.476L3.65749 15.3832C3.19645 16.1494 3.10014 17.0092 3.38294 17.773C3.6654 18.5358 4.29716 19.1253 5.13957 19.4104L5.14235 19.4114C9.60623 20.9028 14.4226 20.9029 18.8866 19.4118C20.5548 18.8595 21.2787 16.8934 20.3731 15.3842L19.2265 13.4798C19.1194 13.2924 19.0018 12.9974 18.9108 12.6654C18.8187 12.3294 18.77 12.0149 18.77 11.8V9.80744C18.2046 9.62489 17.6941 9.31988 17.27 8.92365V11.8C17.27 12.1952 17.3514 12.6507 17.4642 13.0621C17.5773 13.4744 17.7383 13.9019 17.9304 14.2348L17.9375 14.2469L19.0869 16.1559C19.5006 16.8462 19.1654 17.7398 18.4146 17.9879L18.4124 17.9887C14.2571 19.377 9.77447 19.3771 5.61913 17.9892C5.16236 17.8342 4.89952 17.549 4.7896 17.2521C4.67991 16.9559 4.69369 16.5706 4.94254 16.1569L6.09254 14.2469L6.09423 14.2441C6.29452 13.9081 6.45922 13.4776 6.57394 13.0644C6.68859 12.6514 6.77002 12.1954 6.77002 11.8V8.91003C6.77002 6.01425 9.12423 3.66003 12.02 3.66003C13.6214 3.66003 15.0622 4.38807 16.0275 5.52927C16.0952 4.95171 16.286 4.41177 16.5729 3.93637Z"
              fill="#30323D"
            />
            <path
              d="M19.5 9C20.8807 9 22 7.88071 22 6.5C22 5.11929 20.8807 4 19.5 4C18.1193 4 17 5.11929 17 6.5C17 7.88071 18.1193 9 19.5 9Z"
              fill="#EE222E"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="w-10 h-10 cursor-pointer  rounded-full overflow-hidden border  ">
          <img  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNOeZ__-W8I9I8_0p0IS42vAq2xPUObTOfGC4yB8r-3kKldwQ2" alt="random-person" />

        </div>
        </div>

        
      </div>
    
  );
}
