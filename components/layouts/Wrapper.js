import ReduxWrapper from "@/components/layouts/ReduxWrapper";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Wrapper = ({ children }) => {
  return (
    <ReduxWrapper>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ReduxWrapper>
  );
};

export default Wrapper;
