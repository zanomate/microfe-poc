
    export type RemoteKeys = 'app_remote/App';
    type PackageType<T> = T extends 'app_remote/App' ? typeof import('app_remote/App') :any;