import styled from 'styled-components';

export const Searchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px 5px 5px 15px;
  font-size: 16px;
  outline: none;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &::placeholder {
    font-size: 16px;
    color: #cccccc;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 126, 1);
  }
`;

export const SearchSpan = styled.span`
  padding: 10px;
`;

export const SearchLogo = styled.img`
  margin-right: 50px;
`;
