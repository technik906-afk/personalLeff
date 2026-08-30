export {};

declare global {
  interface Window {
    ym?: (counterId: number, action: string, goal: string) => void;
  }
}
