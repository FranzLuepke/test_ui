import { Tag } from "./tag";

export interface Alias {
    name: string;
    id: string;
    checked: boolean;
    tags: Tag[];
}