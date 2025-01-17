declare module '#index' {
    export type Post = {
        userId: number;
        user?: User;
        id: number;
        title: string;
        body: string;
    }

    export type User = {
        id: number;
        name: string;
        username: string;
        email: string;
    }
}