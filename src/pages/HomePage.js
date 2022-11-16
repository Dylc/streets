// import { Outlet } from "react-router-dom";
import {
  HomeImageBackground,
  StreetsSelector,
  HomePageCenterContainer,
} from "components";

export default function HomePage() {
  return (
    <>
      <HomeImageBackground />
      <HomePageCenterContainer>
        <StreetsSelector width={650} height={80} />
      </HomePageCenterContainer>
    </>
  );
}
