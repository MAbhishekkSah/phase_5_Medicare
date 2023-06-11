import { UserSingletonClass } from './user-singleton-class';

describe('UserSingletonClass', () => {
  it('should create an instance', () => {
    expect(new UserSingletonClass()).toBeTruthy();
  });
});
