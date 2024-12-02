import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTodoDto {
    @Field()
    title: string;
    @Field({defaultValue: false})
    completed?: boolean;
}