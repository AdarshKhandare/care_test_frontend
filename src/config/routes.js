import { useRoutes } from "react-router-dom";

import Landing from "../pages/index";
import DoctorsList from "../pages/DoctorsList";

const AppRoutes = () =>
  useRoutes([
    {
      path: "*",
      element: <Landing />,
    },
    {
      path: "/clinics/:id",
      element: <DoctorsList />,
    },
  ]);

export { AppRoutes };
