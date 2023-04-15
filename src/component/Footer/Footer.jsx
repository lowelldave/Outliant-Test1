import styled from '@emotion/styled';

import { getBreakpoint } from '../../utils';

const S = {
    FooterMain: styled.div`
        background: #ECECEC;
        right: 0;
        left: 0;
        margin-top: 50px;
        padding-bottom: 150px;

        ${getBreakpoint('laptop')} {
            margin-top: 100px;
            padding-bottom: 0px;
        }

        ${getBreakpoint('desktop')} {
            margin-top: 300px;
        }
    `,
    FooterWrapper: styled.div`
        display: flex;
        flex-direction: column;

        ${getBreakpoint('desktop')} {
            flex-direction: row;
        }
    `,
    FooterImageWrapper: styled.div`
        min-height: 200px;
        min-width: 20%;
        position: relative;

        ${getBreakpoint('desktop')} {
            min-height: 100%;
            min-width: 45%;
        }
    `,
    FooterImage: styled.div`
        min-height: 100%;
        min-width: 100%;
        background-color: #C4C4C4;
        position: absolute;
        top: -15%;
    `,
    FooterContent: styled.div`
        display: flex;
        flex-direction: column;

        ${getBreakpoint('laptop')} {
            width: 80%;
            padding: 50px 0;
            margin-left: 80px;
        }

        ${getBreakpoint('desktop')} {
            width: 50%;
            padding: 200px 0;
        }
    `,
    FooterHeader: styled.span`
        font-size: 30px;
        font-weight: bold;
        color: #000000;
        text-align: center;

        ${getBreakpoint('laptop')} {
            font-size: 60px;
            text-align: left;
        }
    `,
    FooterText: styled.span`
        font-size: 20px;
        color: #636262;
        line-height: 28px;
        margin: 40px 0;
        width: 100%;
        text-align: center;

        ${getBreakpoint('laptop')} {
            width: 80%;
            font-size: 24px;
            line-height: 36px;
            text-align: left;
            margin: 40px 0;
        }
    `,
    FooterButtonWrapper: styled.div`
        display: flex;
        flex-direction: column;

        ${getBreakpoint('laptop')} {
            flex-direction: row;
        }
    `,
    FooterButton: styled.button`
        padding: 20px 30px;
        border: 1px solid #000000;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
        background-color: #000000;
        color: #FFFFFF;
    `,
};

function Footer() {
    return (
        <S.FooterMain>
            <S.FooterWrapper>
                <S.FooterImageWrapper>
                    <S.FooterImage />
                </S.FooterImageWrapper>
                <S.FooterContent>
                    <S.FooterHeader>Lorem ipsum dolor sit consectetur</S.FooterHeader>
                    <S.FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</S.FooterText>
                    <S.FooterButtonWrapper>
                        <S.FooterButton>Call to Action</S.FooterButton>
                    </S.FooterButtonWrapper>
                </S.FooterContent>
            </S.FooterWrapper>
        </S.FooterMain>
    );
};

export default Footer;