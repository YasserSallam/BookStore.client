export class RegistrationResponse{
    success:boolean=false
    errors:string[]=[]
    token!: string;
    userName!:string
    profilePictureURL!:string
}