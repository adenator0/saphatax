const saphataxUnitSlash = extend(UnitType, "slash", {
});
//((UnitFactory)Blocks.groundFactory).plans.add(new UnitPlan(unit, time, with(yes)));
((UnitFactory)Blocks.groundFactory).plans.add(new UnitFactory.UnitPlan(saphataxUnitSlash, 60*20, with(Items.silicon, 10, Items.lead, 10, Items.metaglass, 20)));