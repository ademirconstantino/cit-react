// Line icons for the Home and Mentoring cards (24x24 grid, coloured via currentColor)
import type { ReactNode } from "react";

function Icon({ size = 24, children }: { size?: number; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Architecture: one service fanning out to two modules
export function ArchitectureIcon() {
  return (
    <Icon>
      <rect x="8.5" y="2.5" width="7" height="5" rx="1.5" />
      <rect x="2.5" y="16.5" width="7" height="5" rx="1.5" />
      <rect x="14.5" y="16.5" width="7" height="5" rx="1.5" />
      <path d="M12 7.5v4.5M6 16.5v-2.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.5" />
    </Icon>
  );
}

// Front-end: browser window with </> brackets
export function FrontendIcon() {
  return (
    <Icon>
      <rect x="2" y="3.5" width="20" height="17" rx="2.5" />
      <path d="M2 8h20" />
      <circle cx="5" cy="5.75" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7.25" cy="5.75" r="0.6" fill="currentColor" stroke="none" />
      <path d="M9 12l-2.5 2.5L9 17M15 12l2.5 2.5L15 17M13 11.5l-2 6" />
    </Icon>
  );
}

// Back-end & APIs: database cylinder
export function BackendIcon() {
  return (
    <Icon>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </Icon>
  );
}

// Cloud & DevOps: cloud with a deploy arrow
export function CloudIcon() {
  return (
    <Icon>
      <path d="M7 18.5H6.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 17.6 8.1 4.75 4.75 0 0 1 17.5 18.5H17" />
      <path d="M12 21v-8M9 15.5l3-3 3 3" />
    </Icon>
  );
}

// AI: processor chip with a spark in the middle
export function AIIcon() {
  return (
    <Icon>
      <rect x="5" y="5" width="14" height="14" rx="2.5" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      <path
        d="M12 8.5l.9 2.2 2.1.8-2.1.8-.9 2.2-.9-2.2-2.1-.8 2.1-.8z"
        fill="currentColor"
        strokeWidth={1}
      />
    </Icon>
  );
}

// Career growth: rising trend line
export function CareerIcon() {
  return (
    <Icon>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 15l4-4 3 3 6-6" />
      <path d="M15.5 8H20v4.5" />
    </Icon>
  );
}

// Mobile apps: smartphone with code brackets on screen
export function MobileIcon() {
  return (
    <Icon>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10.5 18.5h3" />
      <path d="M10.5 8.5l-2 2 2 2M13.5 8.5l2 2-2 2" />
    </Icon>
  );
}

// IT consulting: light bulb (ideas and advice)
export function ConsultingIcon() {
  return (
    <Icon>
      <path d="M12 2.5a6.5 6.5 0 0 0-3.9 11.7c.6.5.9 1.1.9 1.8v.5h6V16c0-.7.3-1.3.9-1.8A6.5 6.5 0 0 0 12 2.5z" />
      <path d="M9.5 19.5h5M10.5 22h3" />
      <path d="M12 6.5a3 3 0 0 0-3 3" />
    </Icon>
  );
}

// Web development: globe
export function WebIcon() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M3.9 7h16.2M3.9 17h16.2" />
      <path d="M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19z" />
    </Icon>
  );
}
