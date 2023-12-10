import { CommonLayout } from "helpers/components/common";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { DiscountPage, ErrorPage404 } from "views";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="" element={<DiscountPage />} />
          <Route path="profile" element={<Outlet />} />
        </Route>

        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  );
}
