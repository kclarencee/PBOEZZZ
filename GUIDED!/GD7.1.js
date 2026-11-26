class perangkat {
    nyalakan() {
        console.log()
    }
}
class laptop extends perangkat {
    nyalakan() {
        console.log("laptop menyala dengan menekan tombol power")
    }
}

class ponsel extends perangkat {
    nyalakan() {
        console.log("ponsel menyala dengan menekan tombol samping")
    }
}

function nyalakanPerangkat(perangkat) {
    perangkat.nyalakan()
}

const lptop = new laptop()
const hp = new ponsel()

nyalakanPerangkat(lptop)
nyalakanPerangkat(hp)