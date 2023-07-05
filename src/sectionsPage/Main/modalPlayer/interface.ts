export interface IListItemProps {
  title: string;
  url: string;
  description: string;
  date: Date;
}

export interface IModalProps extends IListItemProps {
  closeModal: () => void;
}
