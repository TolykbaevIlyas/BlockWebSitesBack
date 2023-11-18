import { Controller, HttpCode, HttpStatus, Post, Get, Body } from '@nestjs/common';
import { SighInBodyDto, SighUpBodyDto, getSessionInfoDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    @Post('sign-up')
    @ApiCreatedResponse()
    signUp(@Body() body:SighUpBodyDto){
        return null;
    }

    @Post('sign-in')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    signIn(@Body() body:SighInBodyDto){
        return null;
    }

    @Post('sign-out')
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    signOut(){

    }

    @Get('session')
    @ApiOkResponse({
        type: getSessionInfoDto,
    })
    getSessionInfo(){
        return null;
    }

}
