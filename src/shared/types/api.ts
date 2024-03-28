export interface Response<Data> {
	response: Data;
}

export interface Pagination<Content> {
	content: Content[];
	totalElements: number;
	totalPages: number;
	nextPageParam?: number;
	previousPageParam?: number;
}
