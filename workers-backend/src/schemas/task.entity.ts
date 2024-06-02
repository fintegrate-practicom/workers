import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { TaskStatus } from 'src/enum/taskStatus.enum';

export type TaskDoc = Task & Document;
@Schema()
export class Task {
  @Prop({ required: true })
  taskId: string;
  @Prop({ required: true })
  businessId: string;
  @Prop({ required: true })
  managerId: string;
  @Prop({ required: true })
  taskName: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  targetDate: Date;
  @Prop({ required: true })
  employee: Types.ObjectId[];
  @Prop({ required: true })
  urgency: number;
  @Prop({ required: true, enum: TaskStatus, default: TaskStatus.ToDo })
  status: TaskStatus;
  @Prop({ default: null })
  completionDate: Date;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
