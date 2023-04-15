import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { ACTION_TYPE } from '../../const';

const S = {
    FormMain: styled.div`
        padding: 60px 50px;
        background-color: #ECECEC;
        display: flex;
        flex-direction: column;
    `,
    FormHeader: styled.span`
        font-size: 30px;
        width: 100%;
        font-weight: 600;
        margin-bottom: 20px;
        text-align: center;
    `,
    FormSubText: styled.span`
        font-size: 20px;
        color: #636262;
        width: 80%;
        text-align: center;
        align-self: center;
    `,
    FormGroup: styled.div`
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    `,
    FormInput: styled.input`
        border: 1px solid transparent;
        padding: 20px 20px;
        font-size: 18px;
        border-radius: 10px;
        margin: 15px 0;
        
        &:focus {
            border: 1px solid #636262;
        }
    `,
    FormButton: styled.button`
        margin-top: 15px;
        border-color: #000000;
        background-color: #000000;
        color: #FFFFFF;
        padding: 15px 20px;
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 600;
    `,
    EditCancel: styled.span`
        font-size: 12px;
        cursor: pointer;
        color: #000000;
        margin-top: 15px;
        align-self: center;
    `,
}

function FormSection({ initData, dispatch, onCancelEdit: handleCancel }) {
    const nameInput = useRef(null);
    const priceInput = useRef(null);

    const isEdit = !!initData;

    useEffect(() => {
        if (!isEdit) return;

        nameInput.current.value = initData.name;
        priceInput.current.value = initData.price;
    }, [initData]);


    const handleClick = (id = '') => () => {
        if (!isEdit) {
            dispatch({
                type: ACTION_TYPE.ADD,
                payload: {
                    name: nameInput.current.value,
                    price: priceInput.current.value,
                },
            });

            return;
        }

        dispatch({
            type: ACTION_TYPE.EDIT,
            payload: {
                id,
                name: nameInput.current.value,
                price: priceInput.current.value,
            },
        });
    };

    return (
        <S.FormMain>
            <S.FormHeader>HeaderText</S.FormHeader>
            <S.FormSubText>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</S.FormSubText>
            <S.FormGroup>
                <S.FormInput placeholder="Name" ref={nameInput} />
                <S.FormInput placeholder="Price" ref={priceInput} />
                <S.FormButton onClick={handleClick(isEdit ? initData.id : null)}>{isEdit ? 'Save' : 'Create'}</S.FormButton>
                {isEdit && <S.EditCancel onClick={handleCancel}>Cancel Editing</S.EditCancel>}
            </S.FormGroup>
        </S.FormMain>
    );
};

export default FormSection;