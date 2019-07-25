const config = {
    all: {
        GOTVSERIES_TOKEN: '',
        GOTVSERIES_ADRESS: '',
        TMDB_TOKEN: '',
        TMDB_ADRESS: '',
        FACEBOOK_TOKEN: '',
        FACEBOOK_ADRESS: '',
        GOOGLE_TOKEN: '',
        GOOGLE_ADRESS: '',
    }
}

type Key = keyof typeof config.all

export const getConfig = <K extends Key>(key: K): string => {
    // @ts-ignore
    return config.all[key]
}