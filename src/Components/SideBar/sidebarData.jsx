const menuItems = [
  {
    icon: <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
      >
        <path
          d="M14.167 8.333h1.666c1.667 0 2.5-.833 2.5-2.5V4.167c0-1.667-.833-2.5-2.5-2.5h-1.666c-1.667 0-2.5.833-2.5 2.5v1.666c0 1.667.833 2.5 2.5 2.5ZM4.167 18.333h1.666c1.667 0 2.5-.833 2.5-2.5v-1.666c0-1.667-.833-2.5-2.5-2.5H4.167c-1.667 0-2.5.833-2.5 2.5v1.666c0 1.667.833 2.5 2.5 2.5ZM5 8.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666ZM15 18.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
          stroke="#fff"
          stroke-width="1.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    ,
    label: "Dashboard",
  },
  {
    icon: <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-5 h-5"
  >
    <path
      d="M14.667 10V6c0-3.333-1.334-4.667-4.667-4.667H6C2.667 1.333 1.333 2.667 1.333 6v4c0 3.334 1.334 4.667 4.667 4.667h4c3.333 0 4.667-1.333 4.667-4.667ZM1.68 4.74h12.64M5.68 1.407v3.24M10.32 1.407v2.94"
      stroke="#30323D"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M6 9.286v-.8c0-1.027.727-1.447 1.613-.933l.694.4.693.4c.887.513.887 1.353 0 1.866l-.693.4-.694.4c-.886.514-1.613.094-1.613-.933v-.8 0Z"
      stroke="#EA526F"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>,
    label: "Videos",
  },

  {
    icon:  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-5 h-5"
  >
    <path
      d="M7 3.203v8.75"
      stroke="#565659"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M4.521 4.953H3.208M4.958 6.703h-1.75"
      stroke="#EA526F"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M12.833 9.765v-7.04c0-.7-.572-1.22-1.266-1.162h-.035c-1.225.105-3.085.73-4.124 1.383l-.099.064a.646.646 0 0 1-.618 0l-.146-.087c-1.038-.648-2.893-1.266-4.119-1.365a1.148 1.148 0 0 0-1.26 1.16v7.047c0 .56.456 1.085 1.016 1.155l.169.023c1.265.17 3.22.811 4.34 1.424l.023.011a.63.63 0 0 0 .56 0c1.12-.618 3.08-1.265 4.352-1.435l.192-.023c.56-.07 1.015-.595 1.015-1.155Z"
      stroke="#565659"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>,
    label: "Study materials",
  },

  {
    icon:  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6668 8.77782V6.11114C14.6668 2.7778 13.3334 1.44446 10.0001 1.44446H6.00006C2.66671 1.44446 1.33337 2.7778 1.33337 6.11114V10.1112C1.33337 13.4445 2.66671 14.7778 6.00006 14.7778H8.66674"
      stroke="#30323D"
      stroke-width="1.21428"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.88666 9.77113L6.47333 7.71111C6.7 7.41778 7.12001 7.36445 7.41334 7.59112L8.63336 8.55112C8.92669 8.77779 9.34667 8.72446 9.57334 8.43779L11.1134 6.45111"
      stroke="#30323D"
      stroke-width="1.21428"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.9867 10.6578L13.1734 11.0378C13.2667 11.2245 13.5 11.3978 13.7067 11.4378L13.9601 11.4778C14.7201 11.6045 14.9001 12.1645 14.3534 12.7178L14.12 12.9511C13.9667 13.1111 13.8801 13.4178 13.9267 13.6311L13.9601 13.7711C14.1667 14.6911 13.6801 15.0445 12.8801 14.5645L12.7067 14.4645C12.5 14.3445 12.1667 14.3445 11.96 14.4645L11.7867 14.5645C10.98 15.0511 10.4934 14.6911 10.7067 13.7711L10.74 13.6311C10.7867 13.4178 10.7 13.1111 10.5467 12.9511L10.3134 12.7178C9.7667 12.1645 9.9467 11.6045 10.7067 11.4778L10.96 11.4378C11.16 11.4045 11.4 11.2245 11.4934 11.0378L11.68 10.6578C12.04 9.93113 12.6267 9.93113 12.9867 10.6578Z"
      stroke="#37B76C"
      stroke-width="1.21428"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
    label: "Tests",
  },

  {
    icon: <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-5 h-5"
  >
    <path
      d="M9.916 10.75H7.583l-2.596 1.727a.582.582 0 0 1-.904-.484v-1.242c-1.75 0-2.917-1.167-2.917-2.917v-3.5c0-1.75 1.167-2.917 2.917-2.917h5.833c1.75 0 2.917 1.167 2.917 2.917v3.5c0 1.75-1.167 2.917-2.917 2.917Z"
      stroke="#565659"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M7 6.627v-.123c0-.396.245-.607.49-.776.24-.163.478-.373.478-.758A.966.966 0 0 0 7 4.002a.966.966 0 0 0-.968.968M6.998 8.02h.005"
      stroke="#2BB8D6"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>,
    label: "Doubts",
  },

  {
    icon:  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="w-5 h-5"
  >
    <g
      clip-path="url(#community_svg__a)"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="m1.791 10.542 1.272-.735a.333.333 0 0 1 .228-.039l2.503.469a.333.333 0 0 0 .395-.33l-.01-2.193c0-.06.016-.118.046-.17l1.263-2.162a.333.333 0 0 0-.015-.36L5.346 1.996m7.32 1.356C9 5.11 11 7.445 11.667 7.778c1.252.626 2.992.667 2.992.667a6.667 6.667 0 1 0-6.325 6.325"
        stroke="#30323D"
      ></path>
      <path
        d="m12.658 11.142.124.254c.062.124.218.24.356.266l.169.027c.506.084.626.458.262.826l-.156.156a.563.563 0 0 0-.129.453l.023.094c.137.613-.187.849-.72.529l-.116-.067a.546.546 0 0 0-.498 0l-.115.067c-.538.324-.863.084-.72-.53l.022-.093a.563.563 0 0 0-.129-.453l-.155-.155c-.365-.37-.245-.743.262-.827l.169-.027a.552.552 0 0 0 .355-.267l.125-.253c.24-.484.63-.484.87 0Z"
        stroke="#37B76C"
        stroke-width="0.667"
      ></path>
    </g>
    <defs>
      <clipPath id="community_svg__a">
        <path
          fill="#fff"
          transform="translate(0 .111)"
          d="M0 0h16v16H0z"
        ></path>
      </clipPath>
    </defs>
  </svg>,
    label: "Community",
  },

  {
    icon:  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6666 8.03785V8.63119C14.6666 11.0045 14.0733 11.5912 11.7066 11.5912H4.29331C1.92665 11.5912 1.33331 10.9979 1.33331 8.63119V4.40452C1.33331 2.03785 1.92665 1.44452 4.29331 1.44452H5.33331"
      stroke="#30323D"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 11.5911V14.7778"
      stroke="#30323D"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.33331 8.77783H14.6666"
      stroke="#30323D"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 14.7778H11"
      stroke="#30323D"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.9066 6.35784H8.73326C7.81326 6.35784 7.50659 5.74451 7.50659 5.13117V2.78451C7.50659 2.05117 8.10659 1.45117 8.83993 1.45117H11.9066C12.5866 1.45117 13.1333 1.99784 13.1333 2.67784V5.13117C13.1333 5.81117 12.5866 6.35784 11.9066 6.35784Z"
      stroke="#2BB8D6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.9399 5.39115L13.1332 4.82448V2.98448L13.9399 2.41782C14.3399 2.14448 14.6666 2.31115 14.6666 2.79782V5.01782C14.6666 5.50448 14.3399 5.67115 13.9399 5.39115Z"
      stroke="#2BB8D6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
    label: "Online Class",
  },

  {
    icon:  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.33331 1.44427V3.44427"
      stroke="#30323D"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.6667 1.44427V3.44427"
      stroke="#30323D"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.6667 2.44427C12.8867 2.56427 14 3.41094 14 6.54427V10.6643C14 13.4109 13.3333 14.7843 10 14.7843H6C2.66667 14.7843 2 13.4109 2 10.6643V6.54427C2 3.41094 3.11333 2.57094 5.33333 2.44427H10.6667Z"
      stroke="#30323D"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.8334 11.8443H2.16669"
      stroke="#30323D"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.99998 5.6109C7.17998 5.6109 6.48665 6.05757 6.48665 6.92423C6.48665 7.33757 6.67998 7.6509 6.97331 7.8509C6.56665 8.0909 6.33331 8.47757 6.33331 8.9309C6.33331 9.75757 6.96665 10.2709 7.99998 10.2709C9.02665 10.2709 9.66665 9.75757 9.66665 8.9309C9.66665 8.47757 9.43331 8.08423 9.01998 7.8509C9.31998 7.64423 9.50665 7.33757 9.50665 6.92423C9.50665 6.05757 8.81998 5.6109 7.99998 5.6109ZM7.99998 7.50423C7.65331 7.50423 7.39998 7.29757 7.39998 6.9709C7.39998 6.63757 7.65331 6.44423 7.99998 6.44423C8.34665 6.44423 8.59998 6.63757 8.59998 6.9709C8.59998 7.29757 8.34665 7.50423 7.99998 7.50423ZM7.99998 9.44423C7.55998 9.44423 7.23998 9.22423 7.23998 8.82423C7.23998 8.42423 7.55998 8.2109 7.99998 8.2109C8.43998 8.2109 8.75998 8.4309 8.75998 8.82423C8.75998 9.22423 8.43998 9.44423 7.99998 9.44423Z"
      fill="#E63946"
    />
  </svg>,
    label: "Events",
  },

  {
    icon:  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6668 6.77775V8.77776C14.6668 11.4444 13.3334 12.7778 10.6667 12.7778H10.3334C10.1267 12.7778 9.92674 12.8778 9.80007 13.0444L8.80007 14.3778C8.36007 14.9645 7.64006 14.9645 7.20006 14.3778L6.20006 13.0444C6.09339 12.8978 5.84672 12.7778 5.66672 12.7778H5.33339C2.66671 12.7778 1.33337 12.1111 1.33337 8.77776V5.44441C1.33337 2.77774 2.66671 1.4444 5.33339 1.4444H9.3334"
      stroke="#30323D"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.0001 4.77774C13.9206 4.77774 14.6668 4.03155 14.6668 3.11107C14.6668 2.19059 13.9206 1.4444 13.0001 1.4444C12.0796 1.4444 11.3334 2.19059 11.3334 3.11107C11.3334 4.03155 12.0796 4.77774 13.0001 4.77774Z"
      stroke="#30323D"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.6644 7.44442H10.6704"
      stroke="#37B76C"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.99703 7.44442H8.00302"
      stroke="#2BB8D6"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.32973 7.44442H5.33572"
      stroke="#FFBA08"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
    label: "Messages",
  },
];

export default menuItems;
