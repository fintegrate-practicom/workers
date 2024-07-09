import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Organization extends Document {
  @Prop()
  description: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  logo: string;

  @Prop()
  phone: string;

  @Prop({ type: Object })
  address: {
    city: string;
    street: string;
    num: number;
  };
  @Prop({ type: Types.ObjectId, ref: 'employee' })
  owner: Types.ObjectId;

  @Prop({ enum: ['Private', 'public', 'International', 'global'] })
  businessSize: string;

  @Prop()
  industryType: string;

  @Prop()
  establishmentDate: string;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
