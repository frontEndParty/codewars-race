String.prototype.ipv4Address = function(){
    console.log(this)

    const re = new RegExp(/(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/)

    return re.test(this)
}
