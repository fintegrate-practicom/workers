import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Role extends Document {

    @Prop()
    type:String

    @Prop({default:false})
    active: Boolean

    @Prop()
    description: String
}

export const RoleSchema = SchemaFactory.createForClass(Role);