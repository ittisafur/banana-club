module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'light-yellow': {
                    200: '#FAFFAF',
                    300: '#FCDDB4',
                },
                primary: '#22577E',
                secondary: '#5584AC',
                tertiary: '#95D1CC',
            },
        },
        fontFamily: {
            ComicNeue: ['Comic Neue', 'cursive'],
            GrilledCheese: ['GrilledCheese BTN Toasted', 'cursive'],
        },
    },
    plugins: [],
};
