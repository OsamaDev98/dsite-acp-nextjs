import SearchableDropdown from "@/components/custom/SearchableDropdown";
import MainButton from "../../../components/custom/buttons/MainButton";
import Status from "../../../components/custom/Status/Status";
import { domainsNames } from "./data/domainsNames";
import { NavTitle } from "./custom/NavTitle";
import NavDropdown from "./custom/NavDropdown";
import DarkModeToggle from "./custom/DarkModeToggle";
import MenuIcon from "./custom/MenuIcon";
import LangSelect from "./custom/LangSelect";

const Navbar = () => {
  return (
    <header className="p-4 mb-8 rounded-lg shadow-md bg-white flex items-center justify-between flex-wrap gap-8 dark:bg-mainDark-800">
      <div className="flex items-center flex-wrap">
        <MenuIcon />
        <NavTitle />
      </div>
      <nav className="flex items-center gap-4 flex-wrap">
        <Status statusType="active" />
        <SearchableDropdown
          items={domainsNames}
          placeholder="Search a domain"
        />
        <MainButton buttonName="Preview" buttonPath="/" buttonIcon="preview" />
        <NavDropdown />
        <LangSelect />
        <DarkModeToggle />
      </nav>
    </header>
  );
};
export default Navbar;
