import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DesktopIndex from "../pages/desktopIndex";
import DesktopRoom from "../pages/desktopRoom";
import MobileIndex from "../pages/mobileIndex";
import MobileRoom from "../pages/mobileRoom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<DesktopIndex />} />
      <Route path="room/:roomid" element={<DesktopRoom />} />
      <Route path="/m">
        <Route index element={<MobileIndex />} />
        <Route path="room/:roomid" element={<MobileRoom />} />
      </Route>
    </Route>
  )
);
