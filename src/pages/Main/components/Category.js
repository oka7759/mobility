import React from 'react';
import theme from '../../../styles/theme';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../store/productReducer';

const Category = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.value);

  return (
    <CategoryList>
      {CATEGORY_DATA.map((els, idx) => {
        return (
          <CategoryItem
            key={(els, idx)}
            theme={
              els === CLASS_TYPE_TRANS[filters.segment]
                ? [theme.mainBlack, 'white']
                : [theme.mainGray]
            }
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
  padding: 5px 17px;
  background-color: ${props => props.theme[0]};
  border-radius: 62px;
  margin-left: 8px;
  color: ${props => props.theme[1]};
  cursor: pointer;
`;

const CATEGORY_DATA = ['전체', '대형', '중형', '소형', 'SUV'];
const CLASS_TYPE = { 전체: '', 대형: 'E', 중형: 'D', 소형: 'C', SUV: 'SUV' };
const CLASS_TYPE_TRANS = {
  '': '전체',
  E: '대형',
  D: '중형',
  C: '소형',
  SUV: 'SUV',
};
