// import { Outlet } from "react-router-dom";
import {
  HomeImageBackground,
  StreetsSelector,
  HomePageCenterContainer,
} from "components";

export function HomePage() {
  return (
    <>
      <HomeImageBackground />
      <HomePageCenterContainer>
        <StreetsSelector width={650} />
      </HomePageCenterContainer>
    </>
  );
}
