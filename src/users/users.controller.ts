import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto'
import {UsersService} from "./users.service";
import {ApiResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOperation({summary:'Создание пользователя'})
    @ApiResponse({status:200,type:User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary:'получение пользователя'})
    @ApiResponse({status:200,type: [User]})
    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }
}
