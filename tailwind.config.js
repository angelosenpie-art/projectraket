const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        scale: {
            '0': '0',
           '25': '.25',
            '50': '.5',
            '75': '.75',
            '90': '.9',
           '95': '.95',
            '100': '1',
           '105': '1.05',
           '110': '1.1',
            '125': '1.25',
            '150': '1.5',
           '200': '2',
          },
        backgroundImage: {
            'hero-lg': "url('/pubic/images/raketbg.jpg')",
            'hero-sm': "url('/storage/img/sys/sm-hero.jpg')",
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
