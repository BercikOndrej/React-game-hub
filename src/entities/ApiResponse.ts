export interface ApiResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
