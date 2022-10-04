export function validadorName({value, set}) {
    value = value.replace(/[^a-zA-Z]/g, '')
    let res = value.split(' ')
    if (res.length <= 1 || res[0].length <= 3) {
        if (res[0].length <= 3) {
            return 'nome deve ter mais que três digitos'
        }
        return 'nome curto de mais'
    }else {
       return set(value)
    }
}