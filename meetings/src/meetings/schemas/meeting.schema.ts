import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";
import { IMeeting } from '../interfaces/meeting.interface';

export type MeetingDocument = Meeting & Document;

@Schema()
export class Meeting implements IMeeting {
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: [String], validate: {
    validator: (value) => Promise.resolve(value.length > 0),
    message: 'Path `participants` is required.'
  }})
  participants: string[];

  @Prop({ required: true })
  start_time: number;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  max_person: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  created_at: number;

  @Prop({ required: true })
  created_by: string;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);