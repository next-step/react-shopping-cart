export interface PaginationParams {
  page: number;
  size: number;
}

export interface BasePagination<T> {
  contents: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
}
