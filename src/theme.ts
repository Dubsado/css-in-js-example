export type Theme = {
    primaryColor: string
    secondaryColor: string
    backgroundColor: string
}
export const theme: Theme = {
    primaryColor: 'purple',
    secondaryColor: 'pink',
    backgroundColor: 'white',
}

export const darkTheme: Theme = {
    primaryColor: 'white',
    secondaryColor: 'cyan',
    backgroundColor: 'black',
}

export const getTheme =
    (prop: 'primaryColor' | 'backgroundColor' | 'secondaryColor') =>
    ({ theme }: { theme: Theme }) => {
        console.log(prop + ': ' + theme[prop])
        return theme[prop]
    }
