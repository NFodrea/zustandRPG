// import useTodoStore from "./store";
import "./App.css";
import Cube from "./components/Cube";
import GridExample from "./components/GridExample";

const App = () => {
    // const todoList = useTodoStore(state => state.todoList);

    return (
        <div className="h-screen w-screen">
            <div className="scene">
                {/* <GridExample /> */}
                <Cube />
                <Cube />
            </div>
        </div>
    );
};

export default App;
