import { ReactNode } from "react";

type CubeProps = {
    children?: ReactNode;
    className?: string;
};

const Cube = ({ className }: CubeProps) => {
    return (
        <div className={`cube ${className}`}>
            <div className="face front"></div>
            {/* <div className="face back"></div> */}
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face top"></div>
            {/* <div className="face bottom"></div> */}
        </div>
    );
};

export default Cube;
