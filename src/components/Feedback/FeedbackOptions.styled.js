import styled from 'styled-components';

export const ContainerOptions = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;

    justify-content: space-between;

    width: 300px;
    `;

export const Button = styled.button`
    display: inline-block;
background-color: #7b38d8;
border-radius: 24px;
border: 4px double #cccccc;
color: #eeeeee;
text-align: center;
font-size: 18px;
padding: 20px;
width: 200px;
-webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
cursor: pointer;
margin: 5px;

&:hover {
background-color: green;
}
`;
