import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`Error: ${error.message ?? "Something went wrong"}`);
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: (_, error) => {
        const DO_NOT_RETRY_STATUS = [403, 404, 428];
        //@ts-ignore
        if (DO_NOT_RETRY_STATUS.includes(error.response?.status)) return false;

        return true;
      },
      throwOnError: (error) => {
        const STATUS_ON_NOT_TO_THROW = [401];

        //@ts-ignore
        if (STATUS_ON_NOT_TO_THROW.includes(error.response?.status))
          return false;

        return true;
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);
