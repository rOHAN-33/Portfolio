// "use client"

// import { useEffect, useState } from "react"
// import { cn } from "../lib/utils"

// const tiles = [
//   { name: "React", slug: "react", bgHex: "#61DAFB", iconHex: "#000000", className: "md:col-span-3 md:row-span-2" },
//   {
//     name: "JavaScript",
//     slug: "javascript",
//     bgHex: "#F7DF1E",
//     iconHex: "#000000",
//     className: "md:col-span-6 md:row-span-2",
//   },
//   { name: "Express", slug: "express", bgHex: "#000000", iconHex: "#FFFFFF", className: "md:col-span-3 md:row-span-2" },
//   { name: "MongoDB", slug: "mongodb", bgHex: "#47A248", iconHex: "#FFFFFF", className: "md:col-span-5 md:row-span-2" },
//   {
//     name: "Next.js",
//     slug: "nextdotjs",
//     bgHex: "#000000",
//     iconHex: "#FFFFFF",
//     className: "md:col-span-7 md:row-span-2",
//   },
//   {
//     name: "Tailwind CSS",
//     slug: "tailwindcss",
//     bgHex: "#38B2AC",
//     iconHex: "#FFFFFF",
//     className: "md:col-span-4 md:row-span-2",
//   },
//   { name: "Git", slug: "git", bgHex: "#F05032", iconHex: "#FFFFFF", className: "md:col-span-4 md:row-span-2" },
//   { name: "GitHub", slug: "github", bgHex: "#181717", iconHex: "#FFFFFF", className: "md:col-span-4 md:row-span-2" },
//   { name: "Docker", slug: "docker", bgHex: "#2496ED", iconHex: "#FFFFFF", className: "md:col-span-6 md:row-span-2" },
//   {
//     name: "PostgreSQL",
//     slug: "postgresql",
//     bgHex: "#336791",
//     iconHex: "#FFFFFF",
//     className: "md:col-span-6 md:row-span-2",
//   },
// ]

// function hoverAnimClass(name) {
//   switch (name) {
//     case "React":
//       return "hover-react"
//     case "Next.js":
//       return "hover-next"
//     case "JavaScript":
//       return "hover-js"
//     case "Tailwind CSS":
//       return "hover-tailwind"
//     case "Git":
//       return "hover-git"
//     case "GitHub":
//       return "hover-github"
//     case "Docker":
//       return "hover-docker"
//     case "MongoDB":
//       return "hover-mongodb"
//     case "PostgreSQL":
//       return "hover-postgres"
//     default:
//       return ""
//   }
// }

// function TileCard({ tile, index, mounted }) {
//   const [hovered, setHovered] = useState(false)
//   const iconUrl = `https://cdn.simpleicons.org/${tile.slug}/${tile.iconHex.replace("#", "")}`

//   return (
//     <div
//       className={cn(
//         "rounded-2xl p-6 md:p-8",
//         "flex items-center justify-center",
//         "shadow-sm ring-1 ring-black/5",
//         tile.className,
//       )}
//       style={{
//         backgroundColor: tile.bgHex,
//         animation: mounted ? "reveal 500ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards" : undefined,
//         animationDelay: mounted ? `${index * 0.1}s` : undefined,
//         transform: mounted ? undefined : "translateX(-50px) scale(0)",
//       }}
//       aria-label={tile.name}
//       role="img"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <img
//         src={iconUrl || "/placeholder.svg"}
//         alt={tile.name + " logo"}
//         className={cn(
//           "h-16 w-16 md:h-20 md:w-20 will-change-transform",
//           hovered ? hoverAnimClass(tile.name) : ""
//         )}
//         crossOrigin="anonymous"
//       />
//       <span className="sr-only">{tile.name}</span>
//     </div>
//   )
// }

// export default function Page() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 0)
//     return () => clearTimeout(t)
//   }, [])

//   return (
//     <main className="min-h-dvh bg-slate-950 text-white">
//       <div className="bg-dots">
//         <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
//           <header className="mb-6 md:mb-8">
//             <h1 className="text-pretty text-2xl font-semibold md:text-3xl">Tech stack</h1>
//             <p className="text-sm text-slate-300">A bento-style layout showing only the technology icons.</p>
//           </header>

//           <div className={cn("grid grid-cols-1 gap-4", "md:grid-cols-12 md:auto-rows-[110px]")}>
//             {tiles.map((tile, i) => (
//               <TileCard key={tile.name} tile={tile} index={i} mounted={mounted} />
//             ))}
//           </div>
//         </section>
//       </div>

//       <style jsx global>{`
//         @keyframes reveal {
//           0% { transform: translateX(-50px) scale(0); }
//           100% { transform: translateX(0) scale(1); }
//         }
//         @keyframes spin-react { to { transform: rotate(1turn); } }
//         .hover-react { animation: spin-react 1.2s linear infinite; }

//         @keyframes lift-next {
//           0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
//           100% { transform: scale(1.1); filter: drop-shadow(0 8px 24px rgba(0,0,0,0.35)); }
//         }
//         .hover-next { animation: lift-next 300ms ease-in-out forwards alternate infinite; }

//         @keyframes jiggle-js {
//           0%, 100% { transform: rotate(0deg); }
//           20% { transform: rotate(-6deg); }
//           40% { transform: rotate(6deg); }
//           60% { transform: rotate(-4deg); }
//           80% { transform: rotate(4deg); }
//         }
//         .hover-js { animation: jiggle-js 500ms ease-in-out infinite; }

//         @keyframes swoosh-tailwind {
//           0%, 100% { transform: translateX(0); }
//           50% { transform: translateX(10px); }
//         }
//         .hover-tailwind { animation: swoosh-tailwind 500ms ease-in-out infinite; }

//         @keyframes nod-git {
//           0%, 100% { transform: rotate(0deg) translateY(0); }
//           50% { transform: rotate(-8deg) translateY(2px); }
//         }
//         .hover-git { transform-origin: 50% 100%; animation: nod-git 450ms ease-in-out infinite; }

//         @keyframes pulse-github {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.06); }
//         }
//         .hover-github { animation: pulse-github 900ms ease-in-out infinite; }

//         @keyframes bob-docker {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//         }
//         .hover-docker { animation: bob-docker 900ms ease-in-out infinite; }

//         @keyframes sway-mongodb {
//           0%, 100% { transform: rotate(-5deg); }
//           50% { transform: rotate(5deg); }
//         }
//         .hover-mongodb { transform-origin: 50% 0%; animation: sway-mongodb 1000ms ease-in-out infinite; }

//         @keyframes trunk-postgres {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           50% { transform: translateY(-4px) rotate(-2deg); }
//         }
//         .hover-postgres { animation: trunk-postgres 900ms ease-in-out infinite; }
//       `}</style>
//     </main>
//   )
// }























"use client"

import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

const tiles = [
  { name: "React", slug: "react", bgHex: "#61DAFB", iconHex: "#000000", className: "md:col-span-3 md:row-span-2" },
  { name: "JavaScript", slug: "javascript", bgHex: "#F7DF1E", iconHex: "#000000", className: "md:col-span-6 md:row-span-2" },
  { name: "Express", slug: "express", bgHex: "#000000", iconHex: "#FFFFFF", className: "md:col-span-3 md:row-span-2" },
  { name: "MongoDB", slug: "mongodb", bgHex: "#47A248", iconHex: "#FFFFFF", className: "md:col-span-5 md:row-span-2" },
  { name: "Next.js", slug: "nextdotjs", bgHex: "#000000", iconHex: "#FFFFFF", className: "md:col-span-7 md:row-span-2" },
  { name: "Tailwind CSS", slug: "tailwindcss", bgHex: "#38B2AC", iconHex: "#FFFFFF", className: "md:col-span-4 md:row-span-2" },
  { name: "Git", slug: "git", bgHex: "#F05032", iconHex: "#FFFFFF", className: "md:col-span-4 md:row-span-2" },
  { name: "GitHub", slug: "github", bgHex: "#181717", iconHex: "#FFFFFF", className: "md:col-span-4 md:row-span-2" },
  { name: "Docker", slug: "docker", bgHex: "#2496ED", iconHex: "#FFFFFF", className: "md:col-span-6 md:row-span-2" },
  { name: "PostgreSQL", slug: "postgresql", bgHex: "#336791", iconHex: "#FFFFFF", className: "md:col-span-6 md:row-span-2" },
]

function hoverAnimClass(name) {
  switch (name) {
    case "React": return "hover-react"
    case "Next.js": return "hover-next"
    case "JavaScript": return "hover-js"
    case "Tailwind CSS": return "hover-tailwind"
    case "Git": return "hover-git"
    case "GitHub": return "hover-github"
    case "Docker": return "hover-docker"
    case "MongoDB": return "hover-mongodb"
    case "PostgreSQL": return "hover-postgres"
    default: return ""
  }
}

function TileCard({ tile, setCursorText }) {
  const [hovered, setHovered] = useState(false)
  const iconUrl = `https://cdn.simpleicons.org/${tile.slug}/${tile.iconHex.replace("#", "")}`

  return (
    <div
      className={cn(
        "rounded-2xl p-6 md:p-8 flex items-center justify-center shadow-sm ring-1 ring-black/5",
        tile.className,
      )}
      style={{ backgroundColor: tile.bgHex }}
      aria-label={tile.name}
      role="img"
      onMouseEnter={() => { setHovered(true); setCursorText(tile.name) }}
      onMouseLeave={() => { setHovered(false); setCursorText("") }}
    >
      <img
        src={iconUrl || "/placeholder.svg"}
        alt={tile.name + " logo"}
        className={cn(
          "h-16 w-16 md:h-20 md:w-20 will-change-transform",
          hovered ? hoverAnimClass(tile.name) : ""
        )}
        crossOrigin="anonymous"
      />
      <span className="sr-only">{tile.name}</span>
    </div>
  )
}

// Floating custom cursor
function CustomCursor({ cursorText }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="fixed z-[9999] pointer-events-none font-semibold text-sm px-2 py-1 bg-black text-white rounded-md shadow-lg transition-opacity duration-200"
      style={{
        top: pos.y + 15,
        left: pos.x + 15,
        opacity: cursorText ? 1 : 0,
      }}
    >
      {cursorText}
    </div>
  )
}

export default function Page() {
  const [cursorText, setCursorText] = useState("")

  return (
    <main className="min-h-dvh bg-black text-white cursor-none">
      <CustomCursor cursorText={cursorText} />

      <div className="bg-dots">
        <section className="mx-auto max-w-6xl px-4  md:py-12">
          <header className="mb-6 md:mb-8 text-center">
            <h1 className="text-pretty text-2xl font-semibold md:text-7xl mb-4" style={{fontFamily: 'Antonio, sans-serif'}}>Tech stack</h1>
            <p className="text-xl text-slate-300">Skilled in building modern web applications with a strong focus on performance and design.</p>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[110px]">
            {tiles.map((tile) => (
              <TileCard key={tile.name} tile={tile} setCursorText={setCursorText} />
            ))}
          </div>
        </section>
      </div>

      <style jsx global>{`
        /* Hover Animations */
        @keyframes spin-react { to { transform: rotate(1turn); } }
        .hover-react { animation: spin-react 1.2s linear infinite; }

        @keyframes lift-next {
          0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
          100% { transform: scale(1.1); filter: drop-shadow(0 8px 24px rgba(0,0,0,0.35)); }
        }
        .hover-next { animation: lift-next 300ms ease-in-out forwards alternate infinite; }

        @keyframes jiggle-js {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-6deg); }
          40% { transform: rotate(6deg); }
          60% { transform: rotate(-4deg); }
          80% { transform: rotate(4deg); }
        }
        .hover-js { animation: jiggle-js 500ms ease-in-out infinite; }

        @keyframes swoosh-tailwind {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        .hover-tailwind { animation: swoosh-tailwind 500ms ease-in-out infinite; }

        @keyframes nod-git {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          50% { transform: rotate(-8deg) translateY(2px); }
        }
        .hover-git { transform-origin: 50% 100%; animation: nod-git 450ms ease-in-out infinite; }

        @keyframes pulse-github {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        .hover-github { animation: pulse-github 900ms ease-in-out infinite; }

        @keyframes bob-docker {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hover-docker { animation: bob-docker 900ms ease-in-out infinite; }

        @keyframes sway-mongodb {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .hover-mongodb { transform-origin: 50% 0%; animation: sway-mongodb 1000ms ease-in-out infinite; }

        @keyframes trunk-postgres {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(-2deg); }
        }
        .hover-postgres { animation: trunk-postgres 900ms ease-in-out infinite; }
      `}</style>
    </main>
  )
}

