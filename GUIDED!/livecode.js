class elektronik{
    constructor(merk,daya){
    this.merk = merk;
    this.daya = daya;
    }
    nyalakan(){
        console.log(`laptop ${this.merk} memiliki daya ${this.daya} watt`)
    }
}

class laptop extends elektronik{
    constructor(merk,daya,ukuranLayar){
        super(merk,daya)
        this.ukuranLayar = ukuranLayar;
    }
    bukaEditor(){
        console.log(`dengan ukuran layar ${this.ukuranLayar} inci`)
    }
}
class laptopKita extends laptop{
    constructor(merk,daya,ukuranLayar,kartuGrafis){
        super(merk,daya,ukuranLayar)
        this.kartuGrafis = kartuGrafis;
    }
    aktifkanModeKipas(){
        console.log(`dan menggunakan kartu grafis ${this.kartuGrafis}`)
    }
}

const acer1 = new elektronik('ACER',4000)
const acer2 = new laptop(15,6)
const acer3 = new laptopKita('RTX 5050')

acer1.nyalakan()
acer2.bukaEditor()
acer3.aktifkanModeKipas