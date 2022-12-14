import Cube from "./Cube";

type GridExampleProps = {};

const items = Array.from({ length: 64 }, (_, index) => `Item ${index + 1}`);

// a function that return a random color in hex format
const randomColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
};

const GridExample = () => {
    return (
        <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
            {items.map((item, index) => {
                // const color = randomColor();
                return (
                    <div key={index} className="">
                        <Cube>{item}</Cube>
                    </div>
                );
            })}
        </div>
    );
};

export default GridExample;
