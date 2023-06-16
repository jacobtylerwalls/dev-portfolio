/*
    This file is valid in both Javascript and Typescript
*/
import { extendTheme } from '@chakra-ui/react';

const Button = {
    variants: {
        demo: {
            bg: 'yellow.400',
        },
    },
};

const theme = extendTheme({
    components: {
        Button,
    },
    fonts: {
        heading: `'Lato', sans-serif`,
        body: `'Lato', sans-serif`,
    },
    colors: {
        brand: {
            500: '#b4c9d3',
        },
    },
});

export default theme;
