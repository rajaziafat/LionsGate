import React from "react";

function SocialIcon(props) {
  const { Icon } = props;
  return (
    <a
      {...props}
      className="w-8 lg:w-10 xl:w-12 h-8 lg:h-10 xl:h-12 rounded-full bg-white flex items-center justify-center"
    >
      {Icon && <Icon />}
    </a>
  );
}

export default SocialIcon;
