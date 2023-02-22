import styled  from "styled-components";

export const Container = styled.section`
margin: 28px 0;

>h2 {
    border-width: 1px;
    border-style: solid;
    border-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border-top: 0;
    border-right: 0;
    border-left: 0;

    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({theme})=> theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
}

`;