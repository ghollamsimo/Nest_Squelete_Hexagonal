import {UserInterface} from "../../core/interfaces/user.interface";
import {Injectable} from "@nestjs/common";
import {User} from "../../core/entities/user.entity";
import {Model, Promise} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {UserSchema} from "../db/schemas/user.schema";

@Injectable()
export class UserRepositoryImpl implements UserInterface{
    constructor(@InjectModel(UserSchema.name) private userModel: Model<UserSchema>) {}

    index(user: User): User {
        const users = this.userModel.find()
        if (!users) return null;
        return new User(user.name, user.email, user.password, user.gender, phone)
    }

    async store(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        const savedUser = await newUser.save();
        return new User(savedUser.id, savedUser.name, savedUser.email, savedUser.password, phone);
    }

}