import * as React from "react"

const MOBILE_BREAKPOINT = 768

function getIsMobile() {
  return typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT
}

function subscribeToMediaQuery(callback: () => void) {
  if (typeof window === "undefined") return () => {}

  const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
  const onChange = () => callback()

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", onChange)
    return () => mediaQuery.removeEventListener("change", onChange)
  }

  mediaQuery.addListener(onChange)
  return () => mediaQuery.removeListener(onChange)
}

export function useIsMobile() {
  return React.useSyncExternalStore(
    subscribeToMediaQuery,
    getIsMobile,
    () => false,
  )
}
