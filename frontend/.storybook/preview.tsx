import type {Preview} from '@storybook/nextjs-vite'
import {mswLoader} from "msw-storybook-addon/csf3";

const preview: Preview = {
    loaders: [
        mswLoader()
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;