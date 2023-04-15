import { useReducer, useMemo, useState } from 'react';

import styled from '@emotion/styled';

import { ACTION_TYPE } from '../../const';

import ProductTable from './ProductTable';
import FormSection from './FormSection';

const S = {
    ProductsMain: styled.div`
        display: flex;
        padding: 0px 160px;
        flex-direction: column;
    `,
    HeaderWrapper: styled.span`
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 100px;
    `,
    Header: styled.h1`
        margin: 0;
        font-size: 72px;
    `,
    SearchBar: styled.input`
        border: 2px solid #636262;
        padding: 20px 15px;
        border-radius: 5px;
        margin-left: 100px;
        &:focus {
            border-color: #000000;
        }
    `,
    ContentWrapper: styled.div`
        display: flex;
        justify-content: space-between;
    `,
}

// NOTE: Reducer function for actions in the useReducer
const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD: {
            const { name, price } = action.payload;
            const newItem = {
                name,
                price,
                id:  new Date().getUTCMilliseconds()
            };

            return [...state, newItem];
        }
        case ACTION_TYPE.EDIT: {
            const { id, name, price } = action.payload;

            return state.map((stateItem) => {
                if (stateItem.id !== id) return stateItem;

                return { ...stateItem, name, price };
            })
        }
        case ACTION_TYPE.DELETE: {
            return state.filter((stateItem) => stateItem.id !== action.payload.id);
        }
        default: {
            return state;
        }
    }
};

function Products() {
    const [productList, dispatch] = useReducer(reducer, []);
    const [searchValue, setSearch] = useState('');
    const [editData, setEdit] = useState(null);

    // NOTE: handler for the buttons from items in the table
    const handleAction = (type, data) => ()  => {
        if (type === 'edit') {
            setEdit(data);
            return;
        }

        dispatch({ type: ACTION_TYPE.DELETE, payload: { id: data.id } });
    };

    const handleCancelEdit = () => {
        setEdit(null);
    };

    const handleSearch = (event) => {
        const searchValue = event.target.value;

        setSearch(searchValue);
    };

    // NOTE: used by the product table because we're trying to filter it from search
    const tableList = useMemo(() => {
        if (searchValue === '') return productList;

        return productList.filter(
            ({ name, price }) => searchValue === name || price === searchValue
        )
    }, [productList, searchValue]);

    return (
        <S.ProductsMain>
            <S.HeaderWrapper>
                <S.Header>Products</S.Header>
                <S.SearchBar placeholder="Search for Keywords..." onChange={handleSearch} />
            </S.HeaderWrapper>
            <S.ContentWrapper>
                <ProductTable list={tableList} onAction={handleAction} />
                <FormSection dispatch={dispatch} initData={editData} onCancelEdit={handleCancelEdit} />
            </S.ContentWrapper>
        </S.ProductsMain>
    );
};

export default Products;