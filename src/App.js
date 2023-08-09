import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { MainLayout } from '~/components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index)=>{
            const Page = route.component;
            const Layout = route.layout || MainLayout;
            return <Route key={index} path={route.path} element={<Layout> <Page/></Layout>}/>
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
