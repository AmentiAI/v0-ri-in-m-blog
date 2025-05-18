"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch by only rendering after component is mounted
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same structure but without any theme-specific classes
    return <div className="flex min-h-screen flex-col">{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
