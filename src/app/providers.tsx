import { AnalyticsProvider } from "@/components/providers/posthog-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </AnalyticsProvider>
  );
}
