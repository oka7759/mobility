import React from 'react';
import theme from '../../../styles/theme';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../../app/reducer/productReducer';

const Category = () => {
  const dispatch = useDispatch();

  return (
    <CategoryList>
      {CATEGORY_DATA.map((els, idx) => {
        return (
          <CategoryItem
            key={(els, idx)}
            onClick={() => {
              dispatch(setFilters(CLASS_TYPE[els]));
            }}
          >
            {els}
          </CategoryItem>
        );
      })}
    </CategoryList>
  );
};

export default Category;

const CategoryList = styled.ul`
  width: 100%;
  padding: 6px 0;
  height: 40px;
  border-bottom: 1px solid ${theme.mainBlack};
`;
const CategoryItem = styled.li`
  float: left;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  padding: 5px 18px;
  background-color: ${theme.mainGray};
  border-radius: 62px;
  margin-left: 8px;
`;
const CATEGORY_DATA = ['전체', '대형', '중형', '소형', 'SUV'];
const CLASS_TYPE = { 전체: '', 대형: 'E', 중형: 'D', 소형: 'C', SUV: 'SUV' };
