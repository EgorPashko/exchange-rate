import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<{ isOpen: boolean }>`
	body,
    html {
        height: 100%;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: rem(18px);
        font-size: $base-font-size;
        color: #3f464c;
        text-align: left;
        margin: 0;
    }
    h1,
    h2,
    h3 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
    }
    h1 {
        padding-top: 4px;
        padding-bottom: 4px;
        font-size: rem(26px);
    }
    h2 {
        font-size: rem(16px);
    }
    h3 {
        font-weight: 500;
        line-height: rem(32px);
    }
    a {
        color: #3564cf;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    .no-padding {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .centered {
        float: none;
        margin: 0 auto;
    }
`;

export const Styled = {
	GlobalStyles,
};
