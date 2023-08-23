import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Index, {loader as rootLoader, action as rootAction, action} from './routes';
import ErrorPage from './error-page';
import Contact, 
{  
    loader as contactLoader,
} from './contact';
import EditContact, {action as editAction} from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Top from './routes/top';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true, element: <Top/>
      },

        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
        },
        {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
        },
        {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
        },
      ],
    },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
