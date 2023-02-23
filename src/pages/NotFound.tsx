import React, { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <div className="flex w-full h-full items-center flex-col my-32">
      <div className="py-5">
        <img
          className="h-28"
          src="https://e7.pngegg.com/pngimages/372/920/png-clipart-tyrannosaurus-dino-t-rex-t-rex-chrome-vr-jump-trex-runner-lava-jump-dinosaur-angle-text-thumbnail.png"
        />
      </div>
      <div className="h-2/4 text-4xl">404 Not Found</div>
    </div>
  );
};

export default NotFound;
