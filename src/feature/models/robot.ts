export class Robot {
    static createId() {
        return Math.round(Math.random() * 1_000_000);
    }
    id: number;
    constructor(
        public name: string,
        public img: string,
        public speed: number,
        public resistance: number,
        public creatingDate: string
    ) {
        this.id = Robot.createId();
    }
}
