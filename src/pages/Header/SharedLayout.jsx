import { NavHeader } from 'pages/Header/NavHeader/NavHeader';
import { AuthHeader } from 'pages/Header/AuthHeader/AuthHeader';
import { HeaderContainer } from './SharedLayout.styled';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth);
  return (
    <>
      <HeaderContainer>
        <AuthHeader />
        {isLoggedIn && <NavHeader />}
        <NavHeader />
      </HeaderContainer>
    </>
  );
};

export default SharedLayout;
