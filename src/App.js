
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Restaurant from './layout/Restaurant';
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  const restaurant = createBrowserRouter([
    {
      path: '/', element: <Restaurant></Restaurant>, children: [
        { path: '/', element: <Home></Home> },
        {
          path: '/home', element: <Home></Home>
        },
        { path: '/about', element: <div>This is about</div> },
        {
          path: '/meals', element: <Meals></Meals>, loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          }
        },
        {
          path: '/meals/:mealId',
          element: <MealDetails></MealDetails>,
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
          }
        }
      ]
    },
    { path: '*', element: <div><h1>This is 404 Not Found Page</h1></div> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={restaurant}></RouterProvider>
    </div>
  );
}

export default App;
