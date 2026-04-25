import { ThemeProvider } from "next-themes";

export default function Provider({ children }) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
