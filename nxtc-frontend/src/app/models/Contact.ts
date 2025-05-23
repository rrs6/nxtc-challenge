export class Contact {
    private id!: number;
    private name!: string;
    private email!: string;
    private phone!: string;
    private cellphone!: string;
    private favorite: boolean = false;
    private active: boolean = true;
   constructor(id: number, name: string, email: string,
        phone: string, cellphone: string, favorite: boolean, 
        active: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.cellphone = cellphone;
    this.favorite = favorite;
    this.active = active;
   }

   public getId(): number {
    return this.id;
   }

   public getName(): string {
    return this.name;
   }

   public getEmail(): string {
    return this.email;
   }

   public getPhone(): string {
    return this.phone;
   }

   public getCellphone(): string {
    return this.cellphone;
   }

   public isFavorite(): boolean {
    return this.favorite;
   }

   public isActive(): boolean {
    return this.active;
   }

   public setName(name: string) {
    this.name = name;
   }

   public setEmail(email: string) {
    this.email = email;
   }

   public setPhone(phone: string) {
    this.phone = phone;
   }

   public setFavorite(favorite: boolean) {
    this.favorite = favorite;
   }

   public setActive(active: boolean) {
    this.active = active;
   }
}