import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateTodoDto {
    @Field( () => Int)
    @Field({nullable: true})
    title?: string;
    @Field({nullable: true})
    completed?: boolean;
}