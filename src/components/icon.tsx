import React from "react";
import Image from "next/image";

interface IconProps {
  linkout?: boolean;
  copy?: boolean;
}
const Icon: React.FC<IconProps> = ({ linkout, copy }) => {
  const iconlist = {
    linkout: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66667 8.33333L10 5M10 5H7.77778M10 5V7.22222M10 9.88889V12.1111C10 12.3469 9.90635 12.573 9.73965 12.7397C9.57295 12.9063 9.34686 13 9.11111 13H2.88889C2.65314 13 2.42705 12.9063 2.26035 12.7397C2.09365 12.573 2 12.3469 2 12.1111V5.88889C2 5.65314 2.09365 5.42705 2.26035 5.26035C2.42705 5.09365 2.65314 5 2.88889 5H5.11111"
          stroke="#D4D4D4"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    copy: (
      <Image src="/fluent_copy-16-regular.png" alt="copy" width={18} height={18} />
    ),
  };

  return <>{linkout ? iconlist.linkout : copy ? iconlist.copy : null}</>;

};

export default Icon;
