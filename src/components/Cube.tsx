import { ReactNode } from "react";

type CubeProps = {
    children?: ReactNode;
};

const Cube = ({ children }: CubeProps) => {
    return (
        <div className="cube  text-white">
            <div className="flex items-center justify-center face front">
                <span>front</span>
            </div>
            <div className="face back"></div>
            <div className="flex items-center justify-center face left">
                <span>left</span>
            </div>
            <div className="items-center justify-center face right"></div>
            <div className="flex items-center justify-center face top">
                <span>top</span>
            </div>
            <div className="items-center justify-center face bottom"></div>
        </div>
    );
};

export default Cube;
