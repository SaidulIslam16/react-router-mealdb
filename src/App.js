
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const restaurant = createBrowserRouter([
    { path: '/', element: <div>Hello</div> },
    { path: '*', element: <div><h1>This is 404 Not Found Page</h1></div> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={restaurant}></RouterProvider>
    </div>
  );
}

export default App;
