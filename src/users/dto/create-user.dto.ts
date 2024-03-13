import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example:'example@example.com',description:'Email'})
    readonly email: string
    @ApiProperty({example:'1234556',description:'Password'})
    readonly password: string

}