export type Item = {
  id: number;
  created_at: string;
  item: string | null;
  purchased: boolean | null;
  quantity: number | null;
};

export type Items = {
  data: Item[];
  error: Error | null;
};
