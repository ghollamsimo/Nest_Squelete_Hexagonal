import { Document } from 'mongoose';
import {Prop} from "@nestjs/mongoose";

export class UserSchema extends Document {
    @Prop({required: true})
    name: string;
    @Prop({required: true})
    email: string;
    @Prop({required: true})
    password: string
    @Prop({required: true})
    gender: string;
    @Prop({required: true})
    phone: number
}