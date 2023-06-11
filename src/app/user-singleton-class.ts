import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class UserSingletonClass {
    private static instance :UserSingletonClass;
    logMap = new Map<String,String>();

    private constructor()
    {

    }
    public static getInstance():UserSingletonClass {
        if(!UserSingletonClass.instance)
        {
            UserSingletonClass.instance = new UserSingletonClass();
        }
        return UserSingletonClass.instance;
    }
}
