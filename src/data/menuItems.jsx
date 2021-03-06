import React from "react";

const menuItems = [
  {
    title: "Home",
    url: "/",
    path: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    title: "Trending",
    url: "/trending",
    path: (
      <>
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </>
    ),
  },
  {
    title: "People",
    url: "/people",
    path: (
      <>
        <path
          d="M20.16,7.7a1.75,1.75,0,0,0-2.52,0"
          transform="translate(-0.5 -0.76)"
        />
        <path
          d="M12,7.7a1.75,1.75,0,0,1,2.52,0"
          transform="translate(-0.5 -0.76)"
        />
        <path
          d="M18.27,12.82a2.63,2.63,0,0,1-2.21.95,2.63,2.63,0,0,1-2.21-.95"
          transform="translate(-0.5 -0.76)"
        />
        <path
          d="M5.46,13.64a1.73,1.73,0,0,0,2.29-1"
          transform="translate(-0.5 -0.76)"
        />
        <path
          d="M16.65,18.66a7.74,7.74,0,0,1-2.79,3.93c-5.92,1.18-9.7-4.94-9.7-4.94L1,10.53A19.87,19.87,0,0,1,9.12,5.8v4.51a12.48,12.48,0,0,0,3.29,6.56,7.73,7.73,0,0,0,3.65,1.94A5.08,5.08,0,0,0,16.65,18.66Z"
          transform="translate(-0.5 -0.76)"
        />
        <path
          d="M9.84,18.89a2.62,2.62,0,0,1,1.62-1.75,3,3,0,0,1,.95-.27"
          transform="translate(-0.5 -0.76)"
        />
        <path
          d="M23,2.45v7.86s-.92,6.68-6.35,8.35a5.08,5.08,0,0,1-.59.15,7.73,7.73,0,0,1-3.65-1.94,12.48,12.48,0,0,1-3.29-6.56V2.45A20.65,20.65,0,0,1,23,2.45Z"
          transform="translate(-0.5 -0.76)"
        />
      </>
    ),
  },
  {
    title: "Movies",
    url: "/movies",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </>
    ),
  },
  {
    title: "TV Shows",
    url: "/tv-shows",
    path: (
      <>
        <polyline points="17 0 12 4 7 0" />
        <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
      </>
    ),
  },
];

export default menuItems;
