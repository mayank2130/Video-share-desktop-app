import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import ControlLayout from "./layouts/ControlLayout";
import AuthButton from "./components/Global/AuthButton";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ControlLayout>
        <AuthButton />
      </ControlLayout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
