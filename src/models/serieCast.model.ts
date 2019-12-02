export interface ISerieCast {
    id: string;
    character: string;
    name: string;
    profile_path: string;
    order: string;
}

export class SerieCast implements ISerieCast {
    readonly id: string;
    readonly name: string;
    readonly character: string;
    readonly profile_path: string;
    readonly order: string;

    constructor(id: string, name: string, character: string, profile_path: string, order: string) {
        this.id = id;
        this.name = name;
        this.character = character;
        this.profile_path = profile_path;
        this.order = order;
    }
}