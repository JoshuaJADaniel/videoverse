import React from "react";
import styles from "./LoadingContainer.module.scss";

const LoadingContainer = () => (
  <div className={styles.loadingContainer}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 28.5 26">
      <path
        d="M10.89,23.79h0A2.16,2.16,0,0,1,8,22.55L.19,3.42A2.51,2.51,0,0,1,
      1.34.22h0A2.16,2.16,0,0,1,4.28,1.46L12,20.59A2.51,2.51,0,0,1,10.89,23.79Z"
      />
      <path
        d="M18.66.24a2.16,2.16,0,0,0-2.94,1.25L14.23,5.15l2.45,6,3.13-7.73A2.52,
        2.52,0,0,0,18.66.24Z"
      />
      <path
        d="M25.31.23a2.16,2.16,0,0,0-2.94,1.24L16.66,15.55,10.93,1.45A2.16,2.16,
        0,0,0,8,.21,2.5,2.5,0,0,0,6.84,3.4L14.6,22.53s.05.09.07.14.09.17.14.26
        l.06.08a2.14,2.14,0,0,0,3.83-.46L26.46,3.43A2.51,2.51,0,0,0,25.31.23Z"
      />
    </svg>
  </div>
);

export default LoadingContainer;
