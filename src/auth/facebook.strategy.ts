import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy) {
  constructor(readonly config: ConfigService) {
    super({
      clientID: config.get<string>('FACEBOOK_CLIENT'),
      clientSecret: config.get<string>('FACEBOOK_SECRET'),
      callbackURL: config.get<string>('FACEBOOK_CALLBACK_URL'),
      profileFields: ['id', 'email', 'displayName', 'photos', 'gender'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile, done) {
    return profile;
  }
}
