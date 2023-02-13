import styled from 'styled-components';

export const List = styled.ul`
display: flex;
gap:80px;
margin-top:30px;
margin-bottom: 60px;

`;

export const Item = styled.li`
list-style:none;
`;

export const Button = styled.button`
padding:16px;
font-size:24px;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);
:hover {
  background-color: white; 
  color:rgb(8, 8, 118);
  border:2px solid rgb(8, 8, 118);
}
`;