import Logo from "./../../Components/Logo/Logo";
import MarkSelector from "../../Components/MarkSelector/MarkSelector";
import NewGameVsCpuButton from "./../../Components/NewGameVsCpuButton/NewGameVsCpuButton";
import NewGameVsPlayerButton from "./../../Components/NewGameVsPlayerButton/NewGameVsPlayerButton";
import "./NewGameMenu.scss";

const NewGameMenu = () => {
  return (
    <div className="new-game-menu">
      <div className="new-game-menu__logo-container">
        <Logo />
      </div>
      {/* <Logo /> */}
      <MarkSelector />
      <NewGameVsCpuButton />
      <NewGameVsPlayerButton />
    </div>
  );
};

export default NewGameMenu;
