import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('facebook'))
  @Get('facebook/login')
  facebookLogin(): Promise<void> {
    return;
  }

  @UseGuards(AuthGuard('facebook'))
  @Get('facebook/callback')
  facebookCallback(@Req() req: any): any {
    return req.user;
  }
}
