import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Employee extends Document {
  @Prop()
  businessId: string;

  @Prop({ type: Types.ObjectId, ref: 'user' })
  userId: Types.ObjectId;

  @Prop()
  workerCode: string;

  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;

  @Prop({ type: Types.ObjectId, ref: 'role' })
  roleId: Types.ObjectId;

  @Prop({
    enum: [
      'secretary',
      'cleaner',
      'deliveryPerson',
      'developer',
      'tester',
      'maneger',
      'owner',
    ],
  })
  position: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
