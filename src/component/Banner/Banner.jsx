import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { getBreakpoint } from '../../utils';
 
const S = {
    Banner: styled.section`
        margin-bottom: 50px;
        display: flex;

        ${getBreakpoint('laptop')} {
            margin-bottom: 200px;
        }

        ${getBreakpoint('desktop')} {
            margin-bottom: 300px;
        }
    `,
    Content: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        z-index: 10;

        ${getBreakpoint('laptop')} {
            width: 60%;
        }
    `,
    Title: styled.span`
        font-weight: bold;
        font-size: 40px;
        line-height: 40px;
        color: #000000;

        ${getBreakpoint('tablet')} {
            font-size: 40px;
        }

        ${getBreakpoint('desktop')} {
            font-size: 80px;
            line-height: 90px;
        }
    `,
    Subtext: styled.span`
        color: #636262;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        margin: 40px 0;
        font-weight: 300;
    `,
    ButtonWrapper: styled.div`
        display: flex;
        justify-content: center;

        ${getBreakpoint('laptop')} {
            display: inline-block;
        }
    `,
    Button: styled.button`
        padding: 10px 15px;
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 600;
        ${({ isMain }) => isMain ?
        css`
            border-color: #000000;
            background-color: #000000;
            color: #FFFFFF;
        ` : css`
            border-color: #000000;
            background-color: #FFFFFF;
            color: #000000;
        `
        }

        &:first-of-type {
            margin-right: 15px;
        }

        ${getBreakpoint('tablet')} {
            padding: 20px 30px;
            font-size: 18px;
        }

        ${getBreakpoint('laptop')} {
            padding: 20px 30px;
            font-size: 24px;
        }
    `,
    DesignContent: styled.div`
        display: none;
        position: relative;
        width: 60%;

        ${getBreakpoint('laptop')} {
            display: flex;
            width: 40%;
        }
    `,
    FirstBox: styled.div`
        min-width: 100px;
        min-height: 100px;
        background-color: #C4C4C4;
        position: absolute;
        right: 15%;

        ${getBreakpoint('laptop')} {
            min-width: 200px;
            min-height: 200px; 
        }

        ${getBreakpoint('desktop')} {
            min-width: 600px;
            min-height: 600px; 
        }
    `,
    SecondBox: styled.div`
        position: absolute;
        top: -15%;
        right: 0;
        min-width: 50px;
        min-height: 50px;
        background-color: #9D9D9D;

        ${getBreakpoint('laptop')} {
            min-width: 100px;
            min-height: 100px; 
        }

        ${getBreakpoint('desktop')} {
            min-width: 300px;
            min-height: 300px; 
        }
    `,
}

function Layout() {
    return(
        <S.Banner>
            <S.Content>
                <S.Title>Lorem ipsum dolor sit amet consectetur</S.Title>
                <S.Subtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</S.Subtext>
                <S.ButtonWrapper>
                    <S.Button isMain>Call to Action</S.Button>
                    <S.Button>See Workspace</S.Button>
                </S.ButtonWrapper>
            </S.Content>
            <S.DesignContent>
                <S.FirstBox />
                <S.SecondBox />
            </S.DesignContent>
        </S.Banner>
    );
};

export default Layout;