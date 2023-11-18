import { ApiProperty } from "@nestjs/swagger";

export class SighUpBodyDto {
    @ApiProperty({
        example:'test@gmail.com'
    })
    email: string;

    @ApiProperty({
        example:'123456789'
    })
    password: string;
};

export class SighInBodyDto {
    @ApiProperty({
        example:'test@gmail.com'
    })
    email: string;

    @ApiProperty({
        example:'123456789'
    })
    password: string;
};

export class getSessionInfoDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    email: string;
};