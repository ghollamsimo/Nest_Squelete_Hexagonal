import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "../infrastructure/db/schemas/user.schema";
import {UserController} from "../interface/http/user.controller";
import {UserUseCase} from "../application/usecases/user.usecase";
import {UserRepositoryImpl} from "../infrastructure/repositories/user.repository.impl";

@Module({
  imports: [   MongooseModule.forRoot('mongodb://localhost:27017/UserManagement'),
    MongooseModule.forFeature([{ name: UserSchema.name, schema: UserSchema }]),

  ],
  controllers: [UserController],
  providers: [
    UserUseCase,
    {
      provide: 'UserInterface',
      useClass: UserRepositoryImpl,
    },
  ],})
export class AppModule {}
