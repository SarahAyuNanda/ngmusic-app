import NGMusic from "assets/images/logo.svg";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const renderLoading = () => (
  <div className="flex h-screen w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary to-secondary">
    <img
      className="animate-bounce"
      src={NGMusic}
      width={60}
      height={60}
      alt="loading"
    />
    <p className="animate-pulse">LOADING...</p>
  </div>
);

const HomePage = lazy(() => import("pages/Home/index"));
const DashboardPage = lazy(() => import("pages/Dashboard/index"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={renderLoading()}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={renderLoading()}>
            <DashboardPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
