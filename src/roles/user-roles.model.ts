import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Role} from "./roles.model";

@Table({ tableName: "user_roles",createdAt:false,updatedAt:false })
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({example:'1',description:'Unique id'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=>Role)
    @ApiProperty({example:'1',description:'id of role'})
    @Column({ type: DataType.NUMBER})
    roleId: number;

    @ForeignKey(()=>User)
    @ApiProperty({example:'1',description:'id of user'})
    @Column({ type: DataType.NUMBER})
    userId: number;
}
