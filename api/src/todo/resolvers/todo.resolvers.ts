import { Todo } from "../models/todo.model";
import { TodoService } from "../todo.service";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver(() => Todo)
export class TodoResolver {
    constructor(private readonly todoService: TodoService) {}

    @Query(() => [Todo])
    findAll() {
        return this.todoService.findAll();
    }

    @Query(() => Todo, {nullable: true})
    findOne(@Args('id', {type: () => Int}) id: number) {
        return this.todoService.findOne(id);
    }

    @Mutation(() => Todo)
    create(@Args('createTodoInput') createTodoDto: CreateTodoDto) {
        return this.todoService.create( createTodoDto );
    }

    @Mutation(() => Todo, {nullable: true})
    update(@Args('id', {type: () => Int}) id: number, @Args('updateTodoInput') updateTodoDto: UpdateTodoDto) {
        return this.todoService.update(id, updateTodoDto);
    }

    @Mutation(() => Todo, {nullable: true})
    remove(@Args('id', {type: () => Int}) id: number) {
        return this.todoService.remove(id);
    }
}