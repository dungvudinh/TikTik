import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { MainLayout } from '~/layouts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index)=>{
            const Page = route.component;
            const Layout = route.layout || MainLayout;
            return <Route key={index} path={route.path} element={<Layout> <Page/></Layout>} exact/>
          })}
 <Route
      path="*"
      element={<Navigate to="/" replace={true} />}
    />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
