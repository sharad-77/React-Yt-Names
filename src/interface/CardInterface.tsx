export interface FeatureCardPropsType {
  icon: string;
  title: string;
  description: string;
}

export interface ClauserCardPropsType {
  svg: string;
  title: string;
  description: string;
  rating: number;
}

export interface QNACardPropsType {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};
