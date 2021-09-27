import { ListTasks } from "./components/ListTasks";

function App() {
  return (
    <div className="mx-auto" style={{width:'97%', maxWidth:'700px'}}>
    <h1>App de tareas</h1>
    <hr/>
    <br/>
    <ListTasks/>
    </div>
  );
}

export default App;
