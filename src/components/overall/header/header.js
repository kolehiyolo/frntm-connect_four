import BtnMenu from 'btn-menu/btn-menu';
import BtnRestart from 'btn-menu/btn-restart';

function Header() {
  return (
    <div className="header">
        <BtnMenu/>
        <BtnRestart/>
    </div>
  );
}

export default Header;
