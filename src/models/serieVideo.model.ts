export interface ISerieVideo {
    id: string;
    key: string;
    name: string;
    type: string;
}

export class SerieVideo implements ISerieVideo {
    readonly id: string;
    readonly key: string;
    readonly name: string;
    readonly type: string;

    constructor (id: string, key: string, name: string, type: string) {
        this.id = id;
        this.key = key;
        this.name = name;
        this.type = type;
    }
}