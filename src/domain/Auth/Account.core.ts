import {Person, TgAuth} from "@domain";

export class Account {
    id : string;
    person : Person;
    referalId : string;

    /** AUTH  */
    tgAuth? : TgAuth;
}