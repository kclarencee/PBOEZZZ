const PesananDelivery = require("./UNGD3.1");

const pesanan13465 = new PesananDelivery("ORD001", "Andi", "-7.7956,110.3695");

const pesanan23465 = new PesananDelivery("ORD002", "Budi", "-7.7828,110.3671");

const pesanan33465 = new PesananDelivery("ORD003", "Citra", "-7.8014,110.3647");

console.log("=== STATUS MEMBER ===");

pesanan13465.suspendMember3465();
pesanan23465.suspendMember3465();

pesanan33465.aktifkanMember3465();

console.log("=== TOP UP SALDO ===");

pesanan13465.topupSaldo3465(150000);
pesanan23465.topupSaldo3465(250000);
pesanan13465.topupSaldo3465(100000);

console.log("=== DATA MEMBER ===");

pesanan13465.infoMember3465();
pesanan23465.infoMember3465();
pesanan33465.infoMember3465();