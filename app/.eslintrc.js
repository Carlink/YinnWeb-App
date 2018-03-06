module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    extends: ["eslint:recommended", "vue"],
    parserOptions: {
        "sourceType": "module"
    },
    plugins: [
        "html",
		"flowtype-errors"
    ],
    rules: {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		"no-console": [
			"error",
			{ allow: ["warn", "error","log"] }
		],
		"flowtype-errors/show-errors": 2
    }
};
