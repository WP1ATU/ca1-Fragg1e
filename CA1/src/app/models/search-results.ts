import { MovieResults } from "./movie-results";

export interface SearchResults {
    Search: MovieResults[];
    totalResults?: string;
    Response: string;
    Error?:string;
}
