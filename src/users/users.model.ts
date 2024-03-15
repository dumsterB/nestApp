import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}
@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example:'1',description:'Unique id'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example:'example@example.com',description:'Email'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @ApiProperty({example:'1234556',description:'Password'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  @ApiProperty({example:'true',description:'Banned'})
  banned: boolean;
  @ApiProperty({example:'scam',description:'Reason banned'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banReason: string;

  @BelongsToMany(()=>Role,()=>UserRoles)
  roles: Role[]
}
