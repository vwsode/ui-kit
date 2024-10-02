import styled from 'styled-components';

export const Navigation = styled.nav``;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  display: flex;
  height: fit-content;
  align-items: center;

  &:not(:last-child)::after {
    content: '/';
    text-align: center;
    flex-shrink: 0;
    padding-block: 2px;
    padding-inline: 8px;
  }
`;
