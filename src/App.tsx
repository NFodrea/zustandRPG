import "./App.css";
import Cube from "./components/Cube";

const App = () => {
    return (
        <div className="h-screen w-screen">
            <div className="scene">
                <>
                    <Cube />
                    <Cube />
                    <Cube />
                    <Cube />
                </>
            </div>
        </div>
    );
};

export default App;
