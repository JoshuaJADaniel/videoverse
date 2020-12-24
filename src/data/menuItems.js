import React from 'react';

const menuItems = [
    {
        title: 'Home',
        url: '#',
        path: (
            <React.Fragment>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </React.Fragment>
        )
    },
    {
        title: 'Trending',
        url: '#',
        path: (
            <React.Fragment>
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
            </React.Fragment>
        )
    },
    {
        title: 'Top Rated',
        url: '#',
        path: (
            <React.Fragment>
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </React.Fragment>
        )
    },
    {
        title: 'TV Shows',
        url: '#',
        path: (
            <React.Fragment>
                <polyline points="17 2 12 7 7 2" />
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
            </React.Fragment>
        )
    },
    {
        title: 'Movies',
        url: '#',
        path: (
            <React.Fragment>
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
            </React.Fragment>
        )
    }
];

export { menuItems };
