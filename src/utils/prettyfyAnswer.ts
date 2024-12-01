function prettyfyAnswer({...data}: any): any {
    let res: any = {}
    const { dataValues } = data
    for (const key in dataValues) {
        if (Array.isArray(dataValues[key])) {
            res[key] = dataValues[key].map((x: any) => prettyfyAnswer(x))
        } else if (typeof dataValues[key] === 'object') {
            res[key] = prettyfyAnswer(dataValues[key])
        } else {
            res[key] = dataValues[key]
        }
    }
    return res
}

export { prettyfyAnswer }
