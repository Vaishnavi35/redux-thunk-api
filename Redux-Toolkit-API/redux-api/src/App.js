
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todoSlice';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);


  return (
    <div className="App">
      <button onClick={() => dispatch(fetchTodos())}>get Data</button>
      <br/>
      <div>
        {state?.todo?.isLoading && <p>Loading</p>}
        {state?.todo?.data?.map((v,i) =>  {
          return(<ol key={i}>{v.title}</ol>)
            
          })
        }
      </div>
    </div>
  );
}

export default App;
