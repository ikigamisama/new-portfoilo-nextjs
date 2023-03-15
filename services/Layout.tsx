import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { useLoadingProgress } from "./loadingProgress";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const { start, done } = useLoadingProgress();

  const onRouteChangeStart = () => {
    console.log("Loader");
    start();
  };

  const onRouteChangeComplete = () => {
    setTimeout(() => {
      done();
    }, 1);
  };
  useEffect(() => {
    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    router.events.on("routeChangeError", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
      router.events.off("routeChangeError", onRouteChangeComplete);
    };
  }, [router.events]);
  return <>{children}</>;
};

export default Layout;
