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
import Login from "./pages/Login";
import LoginRoutes from "./components/LoginRoutes";
import AuthorizedRoute from "./components/AuthorizedRoute";
import DashboardJoblist from "./pages/DashboardJobList";
import Register from "./pages/Register";
import NavigationBar from "./components/NavigationBar";
import EditPassword from "./pages/EditPassword";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="/login"
            element={
              <LoginRoutes>
                <NavigationBar/>
                <Login />
              </LoginRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <LoginRoutes>
                <NavigationBar/>
                <Register />
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
            path="/list-job-vacancy"
            element={
              <MainLayout>
                <JobList />
              </MainLayout>
            }
          />

          <Route
            path="/list-job-vacancy/:idData"
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
            path="/dashboard/list-job-vacancy"
            element={
              <AuthorizedRoute>
                <DashboardLayout>
                  <DashboardJoblist />
                </DashboardLayout>
              </AuthorizedRoute>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy/form"
            element={
              <AuthorizedRoute>
                <DashboardLayout>
                  <DashboardForm />
                </DashboardLayout>
              </AuthorizedRoute>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy/:idData"
            element={
              <AuthorizedRoute>
                <DashboardLayout>
                  <DashboardForm />
                </DashboardLayout>
              </AuthorizedRoute>
            }
          />
          <Route
            path="/dashboard/change-password"
            element={
              <AuthorizedRoute>
                <DashboardLayout>
                 <EditPassword/>
                </DashboardLayout>
              </AuthorizedRoute>
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <AuthorizedRoute>
                <MainLayout>
                 <ProfilePage/>
                </MainLayout>
              </AuthorizedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
