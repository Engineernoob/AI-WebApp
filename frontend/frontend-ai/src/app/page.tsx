import React from 'react';
import { useRouter } from 'next/router';
import Home from './pages/home';
import Login from "./pages/login";
import Chat from "./pages/aichat";
import SignUp from "./pages/signup";
import About from "./pages/about";



function App() {
  const router = useRouter();
  const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/aichat', component: Chat },
    { path: '/about', component: About },
  ];

  return (
    <div>
      {routes.map((route) => (
        <div key={route.path}>
          {router.asPath === route.path && <route.component />}
        </div>
      ))}
    </div>
  );
}

export default App;