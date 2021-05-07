//item and liquid init
new Item("uranium");
new Item("ohnoium");
new Item("ohyesium");
new Item("refined-ohnoium");
new Item("refined-ohyesium");
new Item("neutralite");
new Item("depleted-ohnoium");
new Liquid("neutral-liquid");
new Liquid("zero-point-hypercoolant");
//other init
let req = Seq.with(
	"vanillaGetLiquids", "units/slash"
);
req.forEach(s => {
	try{
		require(s)
	}catch(e){
		Log.err(e)
	}
});