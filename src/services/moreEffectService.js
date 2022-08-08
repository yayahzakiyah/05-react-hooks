export const moreEffectService = () => {
    const doPrint = (id) => {
        console.log('id', id);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id <0 || id >11) {
                    reject(new Error('must between 0 and 10'))
                } else {
                    resolve(`Print ${id}`)
                }
            }, 1000)
        });
    }
    return {
        doPrint
    }
}