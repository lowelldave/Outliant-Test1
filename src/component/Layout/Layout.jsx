import styled from '@emotion/styled';

import Header from './Header';

import { getBreakpoint } from '../../utils';

const S = {
    LayoutMain: styled.div`
        padding-top: 80px;

        & > * {
            padding: 0 10px;
        }

        ${getBreakpoint('tablet')} {
            & > * {
                padding: 0 20px;
            }  
        }

        ${getBreakpoint('laptop')} {
            & > * {
                padding: 0 60px;
            }  
        }

        ${getBreakpoint('desktop')} {
            & > * {
                padding: 0 160px;
            }  
        }
    `,
}

function Layout({ children }) {
    return(
        <>
            <Header />
            <S.LayoutMain>
                { children }
            </S.LayoutMain>
        </>
    );
};

export default Layout;