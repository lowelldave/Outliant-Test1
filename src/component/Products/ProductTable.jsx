import styled from '@emotion/styled';
import { css } from '@emotion/react';

const S = {
    ProductsTableMain: styled.div``,
    ProductTable: styled.table`
        width: 100%;
        border: 1px solid black;
        border-collapse: collapse;
        
        & td {
            padding: 10px;
            text-align: center;
            color: #636262;
        }

        & th, td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        & th {
            width: 200px;
            padding: 20px;
            background-color: #ECECEC;
            border-bottom: none;
        }

        & tr:nth-of-type(2) > td {
            border-top: none;
        }
    `,
    TableButton: styled.button`
        padding: 10px 20px;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 8px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
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
            margin-right: 10px;
        }
    `,
}

function ProductTable({ list, onAction: handleClick }) {
    return (
        <S.ProductsTableMain>
            <S.ProductTable>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    {list.length === 0 &&
                        <tr>
                            <td colSpan={3}>No Data</td>
                        </tr>
                    } 
                    {
                        list.map((listItem) => {
                            return (
                                <tr key={listItem.id}>
                                    <td>{listItem.name}</td>
                                    <td>{listItem.price}</td>
                                    <td>
                                        <S.TableButton onClick={handleClick('edit', listItem)} isMain>Edit</S.TableButton>
                                        <S.TableButton onClick={handleClick('delete', listItem)}>Delete</S.TableButton>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </S.ProductTable>
        </S.ProductsTableMain>
    );
};

export default ProductTable;