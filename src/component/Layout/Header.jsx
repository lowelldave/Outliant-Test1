import { Link } from '@tanstack/react-location';
import styled from '@emotion/styled';

import { getBreakpoint } from '../../utils';

const S = {
    HeaderMain: styled.div`
        padding: 40px 20px;
        display: flex;
        justify-content: space-between;
        position: sticky;
        top: 0;
        background: #FFFFFF;
        z-index: 9999;

        ${getBreakpoint('tablet')} {
            padding: 40px 20px;  
        }

        ${getBreakpoint('laptop')} {
            padding: 40px 60px;
        }

        ${getBreakpoint('desktop')} {
            padding: 40px 160px;
        }
    `,
    Navigation: styled.ul`
        display: inline;
        padding: 0;
    `,
    NavItem: styled.li`
        display: inline;
        margin: 10px 10px;

        ${getBreakpoint('laptop')} {
            margin: 10px 15px;
        }

        ${getBreakpoint('laptop')} {
            margin: 10px 20px;
        }
    `,
    ActionButton: styled.button`
        color: #FFFFFF;
        padding: 8px 20px;
        font-size: 12px;
        background-color: #000000;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        
        ${getBreakpoint('laptop')} {
            padding: 10px 36px;
            font-size: 16px;
        }

        ${getBreakpoint('desktop')} {
            padding: 10px 36px;
            font-size: 20px;
        }
    `,
    NavLink: styled(Link)`
        font-size: 14px;
        text-decoration: none;
        color: #000000;

        ${getBreakpoint('laptop')} {
            font-size: 18px;
        }

        ${getBreakpoint('desktop')} {
            font-size: 24px;
        }
    `,
    LogoWrapper: styled.div`
        display: flex;
        align-items: center;
    `,
}

function Header() {
    const getActiveProps = () => ({
        style: { fontWeight: 'bold' },
    });

    return (
        <S.HeaderMain>
            <S.LogoWrapper>Logo Here</S.LogoWrapper>
            <S.Navigation>
                <S.NavItem>
                    <S.NavLink to={'/'} getActiveProps={getActiveProps}>Home</S.NavLink>
                </S.NavItem>
                <S.NavItem>
                    <S.NavLink to={'/'}>About</S.NavLink>
                    </S.NavItem>
                <S.NavItem>
                    <S.NavLink to={'/'}>Services</S.NavLink>
                </S.NavItem>
                <S.NavItem>
                    <S.NavLink to={'/products'}  getActiveProps={getActiveProps}>Products</S.NavLink>
                </S.NavItem>
            </S.Navigation>
            <S.ActionButton>Call to Action</S.ActionButton>
        </S.HeaderMain>
    );
};

export default Header;