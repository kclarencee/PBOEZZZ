class game {
    constructor(username, kelaskarakter, level) {
    this.username = username;
    this.kelaskarakter = kelaskarakter;
    this.level = level
    }


    getinfo() {
        console.log(`player ${this.username} telah login sebagai ${this.kelaskarakter} level ${this.level}`);
    }

}
function game1 (username, kelaskarakter, level) {
    return {
        username,
        kelaskarakter,
        level,
        getinfo() {
        console.log(`player ${this.username} telah login sebagai ${this.kelaskarakter} level ${this.level}`);
    }
    }

}
const pubg = game1('adit', 'diamond', 30);
const ml = new game1('sugeng', 'radiant', 100);
pubg.getinfo();
ml.getinfo();

const valo = {
    getinfo() {
        return `player ${this.username} telah login sebagai ${this.kelaskarakter} level ${this.level}`;
    }
}
const valo1 = Object.create(valo);
valo1.username = 'kent'
valo1.kelaskarakter = 'platinum'
valo1.level = 200

console.log(valo1.getinfo());
