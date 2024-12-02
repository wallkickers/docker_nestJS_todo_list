import { Module } from "@nestjs/common";
import { TodoContoller } from "./todo.contoller";
import { TodoService } from "./todo.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { TodoResolver } from "./resolvers/todo.resolvers";


@Module({
    imports: [PrismaModule],
    controllers: [TodoContoller],
    providers: [TodoService, TodoResolver],
})
export class TodoModule{}
