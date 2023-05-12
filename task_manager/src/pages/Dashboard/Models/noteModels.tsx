
export interface NoteData {
    title: string;
    description: string;
    date: Date;
    isFavourite: boolean;
    label: LabelGroup;
}
  
export interface LabelGroup {
    business: boolean;
    social: boolean;
    important: boolean;
}