import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./layouts/Dashboard";
import DashboardPage from "./pages/DashboardPage";
import JobList from "./pages/JobList";
import MainLayout from "./layouts/MainLayout";
import DetailedJob from "./pages/DetailedJob";
import DashboardForm from "./pages/DashboardForm";
import { GlobalProvider } from "./context/GlobalContext";
import Login from "./components/Login";
import LoginRoutes from "./components/LoginRoutes";
import AuthorizedRoute from "./components/AuthorizedRoute";
import DashboardJoblist from "./pages/DashboardJobList";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <LoginRoutes>
                <Login />
              </LoginRoutes>
            }
          />

          <Route
            path="/"
            element={
              <LandingLayout>
                <LandingPage />
              </LandingLayout>
            }
          />

          <Route
            path="/joblist"
            element={
              <MainLayout>
                <JobList />
              </MainLayout>
            }
          />

          <Route
            path="/detailed"
            element={
              <MainLayout>
                <DetailedJob />
              </MainLayout>
            }
          />

          <Route
            path="/dashboard"
            element={
              <AuthorizedRoute>
                <DashboardLayout>
                  <DashboardPage />
                </DashboardLayout>
              </AuthorizedRoute>
            }
          />

          <Route
            path="/dashboard/joblist"
            element={
              <AuthorizedRoute>
                <DashboardLayout>
                  <DashboardJoblist />
                </DashboardLayout>
              </AuthorizedRoute>
            }
          />
          <Route
            path="/dashboard/create"
            element={
              <AuthorizedRoute>
                <DashboardLayout>
                  <DashboardForm />
                </DashboardLayout>
              </AuthorizedRoute>
            }
          />
          <Route
            path="/dashboard/edit/:idData"
            element={
              <AuthorizedRoute>
                <DashboardLayout>
                  <DashboardForm />
                </DashboardLayout>
              </AuthorizedRoute>
            }
          />
        </Routes>
        
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
