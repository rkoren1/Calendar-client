export interface CalendarEvent {
  id: number;
  subject: string;
  description: string;
  start: Date;
  end: Date;
  place: string;
  allDay: boolean;
  repetable: boolean;
}
export interface CalendarEventDto {
  subject: string;
  description: string;
  start: Date;
  end: Date;
  place: string;
  allDay: boolean;
  repetable: boolean;
}
