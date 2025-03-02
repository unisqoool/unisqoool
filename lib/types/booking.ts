/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Host {
  id: number;
  name: string;
  email: string;
  username: string;
  timeZone: string;
}

export interface EventType {
  id: number;
  slug: string;
}

export interface Attendee {
  name: string;
  email: string;
  timeZone: string;
  language: string;
  absent: boolean;
}

export interface BookingFieldsResponses {
  email: string;
  name: string;
  guests: any[];
  notes?: string;
  course: string;
  location: {
    value: string;
    optionValue: string;
  };
  "Time-Zone"?: string;
}

export interface Booking {
  id: number;
  uid: string;
  title: string;
  description: string;
  hosts: Host[];
  status: string;
  cancellationReason?: string;
  cancelledByEmail?: string;
  start: string;
  end: string;
  duration: number;
  eventTypeId: number;
  eventType: EventType;
  meetingUrl: string;
  location: string;
  absentHost: boolean;
  createdAt: string;
  updatedAt: string | null;
  metadata: Record<string, any>;
  rating: any;
  attendees: Attendee[];
  guests: any[];
  bookingFieldsResponses: BookingFieldsResponses;
}

export interface BookingsResponse {
  status: string;
  data?: Booking[];
  error?: Record<string, any>;
}
