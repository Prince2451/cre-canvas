import Canvas from ".";
import { IAppRouteObject } from "../../routes";

const routes: IAppRouteObject[] = [
  {
    path: "/canvas/:docId",
    element: Canvas,
  },
];

export default routes;
