export const getTime = () => {
    const hours = Array.apply(null, Array(24)).map((_, i) => {
        if(i === 23) {
            return '00'
        }
        if(i < 9) {
            return '0' + (i + 1)
        } else {
            return String(i + 1)
        }
    })
    const minutes = Array.apply(null, Array(60)).map((_, i) => {
        if(i < 9) {
            return '0' + (i + 1)
        } else {
            return String(i + 1)
        }
    }).filter((element) => +element % 5 === 0)

    return {
        hours,
        minutes
    }
}