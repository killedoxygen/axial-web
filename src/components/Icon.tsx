import type { ComponentType, SVGProps } from 'react';
import { Check, Download } from '@openai/apps-sdk-ui/components/Icon';

const icons = {
  check: Check,
  download: Download,
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

interface IconProps {
  name: keyof typeof icons;
  size?: number;
}

export function Icon({ name, size = 20 }: IconProps) {
  const Glyph = icons[name];
  return (
    <Glyph width={size} height={size} aria-hidden="true" focusable="false" />
  );
}
