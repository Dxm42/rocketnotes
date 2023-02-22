import styled  from "styled-components";

export const Container = styled.section`
margin: 50px 0 2px;

>h2 {
    border-width: 1px;
    border-style: solid;
    border-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({theme})=> theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
}

`;