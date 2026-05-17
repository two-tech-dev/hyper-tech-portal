"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
    type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeCtx {
    theme: Theme;
    resolvedTheme: ResolvedTheme;
    setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeCtx>({
    theme: "light",
    resolvedTheme: "light",
    setTheme: () => {},
});

export function useTheme() {
    return useContext(ThemeContext);
}

const STORAGE_KEY = "2tech-theme";

function getSystemTheme(): ResolvedTheme {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function applyTheme(resolved: ResolvedTheme) {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolved);
    root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("light");
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

    // Initialise from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
        const initial: Theme = stored ?? "light";
        setThemeState(initial);

        const resolved =
            initial === "system" ? getSystemTheme() : initial;
        setResolvedTheme(resolved);
        applyTheme(resolved);
    }, []);

    // Listen for OS theme changes when mode is "system"
    useEffect(() => {
        if (theme !== "system") return;

        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e: MediaQueryListEvent) => {
            const resolved: ResolvedTheme = e.matches ? "dark" : "light";
            setResolvedTheme(resolved);
            applyTheme(resolved);
        };
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [theme]);

    const setTheme = useCallback((t: Theme) => {
        setThemeState(t);
        localStorage.setItem(STORAGE_KEY, t);
        const resolved = t === "system" ? getSystemTheme() : t;
        setResolvedTheme(resolved);
        applyTheme(resolved);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
