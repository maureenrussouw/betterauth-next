import { Suspense } from "react";

export default function AuthLayout ({ children } : { children: React.ReactNode}) {
    return (
         <div className="w-full h-dvh flex items-center justify-center">
            <Suspense fallback={<p role="status">Checking your session...</p>}>
                {children}
            </Suspense>
         </div>
    )
}