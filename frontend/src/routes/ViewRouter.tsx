import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from 'views/Dashboard/Dashboard';
import NotFound from 'views/NotFound/NotFound';

export default function ViewRouter() {
  const isAuthenticated = true;

  const ProtectedRoutes = ({
    isAllowed,
    isAuth,
  }: {
    isAllowed: boolean;
    isAuth: boolean;
  }) => {
    return isAllowed ? <Outlet /> : <Navigate to={isAuth ? `/` : `/Login`} />;
  };
  const UnProtectedRoute = () => {
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
  };

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoutes
            isAllowed={isAuthenticated}
            isAuth={isAuthenticated}
          />
        }
      >
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<UnProtectedRoute />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
