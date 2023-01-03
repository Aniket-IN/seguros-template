import Wrapper from "@/components/layouts/Wrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
