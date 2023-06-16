import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react';

const Button = {
    variants: {
        demo: {
            bg: 'yellow.400',
        },
    },
};


const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
    root: {
        border: '1px',
        rounded: 'md',
        borderColor: 'gray.200',
    },
    container: {
        _first: {
            borderTop: 0,
        },
        _last: {
            borderBottom: 0,
        },
    },
})

const accordionTheme = defineMultiStyleConfig({ baseStyle })

const theme = extendTheme({
    components: {
        Button,
        Accordion: accordionTheme,
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
