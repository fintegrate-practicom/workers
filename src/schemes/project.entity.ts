import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Project extends Document {

    @Prop({ type: Types.ObjectId, ref: 'employee' })
    respemp: Types.ObjectId

    @Prop()
    projname: String

    @Prop()
    startproj: Date

    @Prop()
    endproj: Date
}

export const ProjectSchema = SchemaFactory.createForClass(Project);