module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js}'], // 
    

    content: ["./src/**/*.{html,js}",  "./node_modules/flowbite/**/*.js"],
    theme: {
      extend: {},
    },
    plugins: [],
  }