import styled from 'styled-components';

export const Item = styled.li`
list-style:none;
:not(:first-child){
    margin-top: 16px;
}
:last-child{
    font-weight:600;
    color:#06a113;
}
`;