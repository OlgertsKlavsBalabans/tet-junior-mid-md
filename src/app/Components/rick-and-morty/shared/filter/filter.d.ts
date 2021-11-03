export interface IFilterOptions {
    html_tag: string;
    type?: string;
    id: string;
    options?: Option[]
    query_name: string;
    display_name: string;
}
interface Option {
    value: string;
    display_value: string;
}
