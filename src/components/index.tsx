import React, { FC } from "react";
import { Card } from "./ui/card";

interface CircleSketchTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  svgProps?: React.SVGProps<SVGSVGElement>;
  width?: string | { [key: string]: string };
  height?: string | { [key: string]: string };
  left?: string | { [key: string]: string };
  top?: string | { [key: string]: string };
}
const CircleSketchText: FC<CircleSketchTextProps> = ({
  children,
  svgProps,
  ...restAttributes
}) => {
  return (
    <Card className="relative">
      {children}
      <Card className="absolute" {...restAttributes}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="345"
          height="127"
          viewBox="0 0 345 127"
          fill="none"
          {...svgProps}
        >
          <path
            d="M10.8077 10.424C128.01 1.86236 406.247 45.7731 331.406 97.3191C237.854 161.752 -77.4881 107.368 19.2169 35.2511C115.922 -36.866 369.247 18.6996 314.588 75.4475"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </Card>
    </Card>
  );
};

export default CircleSketchText;
