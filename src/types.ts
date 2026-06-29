export interface Step {
  id: number;
  title: string;
  description: string;
  status: 'locked' | 'review' | 'approved';
}

export interface BrandStoryItem {
  title: string;
  content: string;
  iconName: string;
}

export interface LogoConcept {
  id: string;
  name: string;
  description: string;
  svgMarkup: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
  rgb: string;
}

export interface TypographySpec {
  name: string;
  fontFamily: string;
  usage: string;
  styles: string;
}
