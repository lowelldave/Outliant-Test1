import styled from '@emotion/styled';

import { getBreakpoint } from '../../utils';

const S = {
    SectionMain: styled.section`
        padding: 0 10px;
        margin: 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        ${getBreakpoint('laptop')} {
            margin: 100px 0;
            padding: 0 40px;
            flex-direction: row;
        }

        ${getBreakpoint('desktop')} {
            margin: 100px 0;
            padding: 0 160px;
        }
    `,
    ContentContainer: styled.div`
        display: flex;
        flex-direction: column;
        max-width: 100%;
        margin: 20px 0;

        ${getBreakpoint('laptop')} {
            justify-content: ${({ position }) => position === 'end' ? 'flex-end' : 'flex-start'};
            margin: 0px 20px;
        }
        
        ${getBreakpoint('desktop')} {
            max-width: 23%;
            margin: 0px;
        }
    `,
    ContentHeader: styled.h2`
        margin-bottom: 10px;
        font-size: 18px;
        color: #000000;

        ${getBreakpoint('laptop')} {
            font-size: 28px;
            margin-bottom: 30px;
        }
    `,
    ContentText: styled.span`
        color: #636262;
        font-size: 16px;
        line-height: 20px;

        ${getBreakpoint('laptop')} {
            font-size: 24px;
            line-height: 36px;
        }
    `,
    ImageContainer: styled.div`
        min-width: 45%;
        min-height: 600px;
        background-color: #C4C4C4;
    `,
}

function Section() {
    return (
        <S.SectionMain>
            <S.ContentContainer position="start">
                <S.ContentHeader>Header Text</S.ContentHeader>
                <S.ContentText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim dolor.</S.ContentText>
            </S.ContentContainer>
            <S.ImageContainer />
            <S.ContentContainer position="end">
                <S.ContentHeader>Header Text</S.ContentHeader>
                <S.ContentText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim dolor.</S.ContentText>
            </S.ContentContainer>
        </S.SectionMain>
    );
};

export default Section;