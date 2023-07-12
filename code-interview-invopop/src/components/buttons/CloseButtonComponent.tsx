"use client";

import React from "react";
import styles from "./InlineButtonComponent.module.scss";
import { InlineButton, ButtonRole } from "./InlineButtonComponent";

interface Props {
  backgroundOnHover?: boolean;
  onClick: () => void;
}

/**
 * Defines a standard close button (an X icon).
 */
const CloseButton: React.FC<Props> = ({ backgroundOnHover, onClick }) => {

  return (
    <InlineButton role={ButtonRole.Secondary} onClick={onClick} backgroundOnHover={ backgroundOnHover }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        // style={{ verticalAlign: 'middle' }} // Add this style to center the SVG vertically

      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L8 6.58579L13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L9.41421 8L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L8 9.41421L2.70711 14.7071C2.31658 15.0976 1.68342 15.0976 1.29289 14.7071C0.902369 14.3166 0.902369 13.6834 1.29289 13.2929L6.58579 8L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z"
        />
      </svg>
    </InlineButton>
  );
};

InlineButton.defaultProps = {
  backgroundOnHover: false, // By default, the button will not have a background on hover.
};

export { CloseButton };
