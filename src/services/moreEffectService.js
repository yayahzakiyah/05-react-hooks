export const moreEffectService = () => {
    const doPrint = (id) => {
        return new Promise((resolve, reject) => {
            if (id < 0 || id < 11) {
                reject(new Error('Must between 0 and 10'))
            } else {
                resolve(`Print ${id}`)
            }
        });
    }

    return {
        doPrint
    }
}