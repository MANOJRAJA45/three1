
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import WholeData from './components/WholeData';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Todo List App </h1>
      <AddTodo />
      <TodoList />
      <WholeData />

    </div>
  );
}

export default App;
