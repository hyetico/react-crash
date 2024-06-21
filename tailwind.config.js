/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // content: ["./src/**/*.{html,js}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // 이 경로는 실제로 Tailwind CSS 클래스를 사용하는 파일을 가리킵니다.
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
