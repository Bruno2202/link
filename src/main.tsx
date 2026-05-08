import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ModalProvider } from "./context/ModalProvider";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
	{
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

const root: HTMLElement = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
	<ModalProvider>
		<RouterProvider router={router} />
		<Toaster
			toastOptions={{
				className: `
					!rounded-none !shadow-none
					font-mono text-xs font-bold tracking-widest uppercase
					!bg-black !border-2 !border-gray-mid !border-l-4 !border-l-red
					!text-white !p-4 !max-w-xs
				`,
				success: {
					className: `
						!bg-black !border-2 !border-green-600 !border-l-4 !border-l-green-500
						!text-green-400
					`,
					icon: '✓',
				},
				error: {
					className: `
						!bg-black !border-2 !border-red !border-l-4 !border-l-red
						!text-red
					`,
					icon: '✕',
				},
				loading: {
					className: `
						!bg-black !border-2 !border-gray-mid !border-l-4 !border-l-white
						!text-white
					`,
				},
				position: "bottom-right"
			}}
		/>
	</ModalProvider>,
);