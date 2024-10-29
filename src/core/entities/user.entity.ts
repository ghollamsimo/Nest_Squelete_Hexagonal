export class User {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly gender: string
        ,public readonly phone: number) {}
}
