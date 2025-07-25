import React from "react";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <main className="w-full h-screen p-5">
        <div className="flex justify-between w-full h-full gap-2.5">
          {children}

          <div className="hidden w-1/2 lg:flex flex-col justify-end rounded-3xl p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-1">
                <span className="text-title-md font-semibold text-neutral-900 leading-9">4.8</span>
                <span className="text-title-xxs font-semibold text-neutral-500">/5</span>
              </div>
              <span className="w-full text-title-xxs text-neutral-600">
              "As a developer, I struggled to keep documentation updated with repository changes.
              Since using this GitHub automation tool, my workflow is more efficient.
              Every pull request generates clean, updated docs automatically.
              I can focus on building features instead of formatting documentation.
              It saves time and keeps our docs consistent."
            </span>
              <span
                  className="text-body-xl text-neutral-900 font-semibold">John Doe, Backend Engineer @Interland.co</span>
            </div>
          </div>
        </div>
      </main>
  )
}
