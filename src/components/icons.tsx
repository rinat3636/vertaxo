import type { ComponentProps } from "react";

function IconBase(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent-secondary)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4u w-4u"
      {...props}
    />
  );
}

export const icons = {
  support: (
    <IconBase>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </IconBase>
  ),
  database: (
    <IconBase>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </IconBase>
  ),
  shield: (
    <IconBase>
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </IconBase>
  ),
  remote: (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </IconBase>
  ),
  network: (
    <IconBase>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M12 7.5V13M12 13l-5.5 4M12 13l5.5 4" />
    </IconBase>
  ),
  workstation: (
    <IconBase>
      <rect x="3" y="3" width="18" height="12" rx="2" />
      <path d="M7 21h10M9 15v6M15 15v6" />
    </IconBase>
  ),
  backup: (
    <IconBase>
      <path d="M12 3v10M12 13l-4-4M12 13l4-4" transform="rotate(180 12 8)" />
      <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </IconBase>
  ),
  files: (
    <IconBase>
      <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      <path d="M12 11v5M9.5 13.5h5" />
    </IconBase>
  ),
  code: (
    <IconBase>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
    </IconBase>
  ),
  chat: (
    <IconBase>
      <path d="M21 12a8 8 0 01-8 8H4l2-3a8 8 0 1115-5z" />
      <path d="M9 11h6M9 14h3" />
    </IconBase>
  ),
  model: (
    <IconBase>
      <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
      <path d="M12 2v9m0 0l8-4.5M12 11l-8-4.5" />
    </IconBase>
  ),
  slicer: (
    <IconBase>
      <path d="M4 6h16M4 10h16M4 14h16M4 18h10" />
    </IconBase>
  ),
  printer3d: (
    <IconBase>
      <path d="M4 3h16v5H4zM12 8v4M9 15h6l-3 4-3-4z" />
      <path d="M4 21h16" />
    </IconBase>
  ),
  prototype: (
    <IconBase>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
    </IconBase>
  ),
  batch: (
    <IconBase>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </IconBase>
  ),
} as const;

export type IconName = keyof typeof icons;
