export interface IMediaListProps {
  DataList: {
    title: string;
    url: string;
    description: string;
    date: Date;
  }[];
  currentPage: number;
  limitPerPage: number;
  order: string;
}
