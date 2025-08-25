module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(204, 94%, 45%)',
        accent: 'hsl(28, 96%, 57%)',
        bg: 'hsl(210, 36%, 7%)',
        surface: 'hsl(210, 36%, 12%)',
        text: 'hsl(210, 80%, 90%)',
        'text-muted': 'hsl(210, 80%, 60%)',
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '20px',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
      },
      boxShadow: {
        card: '0 4px 16px hsla(210, 100%, 10%, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)',
        'slide-up': 'slideUp 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
