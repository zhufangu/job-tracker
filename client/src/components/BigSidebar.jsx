import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLInks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar' // logic is reversed here: if showSidebar is true, then the sidebar is shown
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          {/* isBigSidebar is passed here to determine if the sidebar is big; if
          it is, the sidebar will not close when a link is clicked */}
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
