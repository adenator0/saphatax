const reg = require("saphatax/units/unitReg");
const unitSlash = extend(UnitType, "slash", {
});
unitSlash.constructor = () => extend(UnitEntity, {
	update(){
		this.super$update();
		if (this.dead || this.health <= 0){
			this.destroy();
		}
	},

	classId: () => unitSlash.classId
});
reg(unitSlash);
unitSlash.ammoType=AmmoTypes.power;
//((UnitFactory)Blocks.groundFactory).plans.add(new UnitPlan(unit, time, with(yes)));
//((UnitFactory)Blocks.groundFactory).plans.add(new UnitFactory.UnitPlan(saphataxUnitSlash, 60*20, with(Items.silicon, 10, Items.lead, 10, Items.metaglass, 20)));
Blocks.groundFactory.plans.add(new UnitFactory.UnitPlan(unitSlash, 60 * 20, ItemStack.with(Items.silicon, 10, Items.lead, 10, Items.metaglass, 20)));