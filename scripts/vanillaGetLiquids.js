const liquidNeutralite = Vars.content.getByName(ContentType.liquid, "saphatax-neutral-liquid");
const zeroPointHypercoolant = Vars.content.getByName(ContentType.liquid, "saphatax-zero-point-hypercoolant");

const neutraliteShot = extend(LiquidBulletType, {});
neutraliteShot.liquid = liquidNeutralite;
neutraliteShot.drag = 0.01f;
neutraliteShot.damage = 10;

const zeropointShot = extend(LiquidBulletType, {});
zeropointShot.liquid = zeroPointHypercoolant;
zeropointShot.drag = 0.01f;

const heavyNeutraliteShot = extend(LiquidBulletType, {});
heavyNeutraliteShot.liquid = liquidNeutralite;
heavyNeutraliteShot.lifetime = 49f;
heavyNeutraliteShot.knockback = 1.3f;
heavyNeutraliteShot.puddleSize = 8f;
heavyNeutraliteShot.orbSize = 4f;
heavyNeutraliteShot.ammoMultiplier = 0.4f;
heavyNeutraliteShot.statusDuration = 60f * 4f;
heavyNeutraliteShot.drag = 0.001f;
heavyNeutraliteShot.damage = 11.75f;

const heavyZeropointShot = extend(LiquidBulletType, {});
heavyZeropointShot.liquid = zeroPointHypercoolant;
heavyZeropointShot.lifetime = 49f;
heavyZeropointShot.knockback = 1.3f;
heavyZeropointShot.puddleSize = 8f;
heavyZeropointShot.orbSize = 4f;
heavyZeropointShot.ammoMultiplier = 0.4f;
heavyZeropointShot.statusDuration = 60f * 4f;
heavyZeropointShot.drag = 0.001f;
heavyZeropointShot.damage = 0.2f;

Blocks.wave.ammoTypes.put(liquidNeutralite,neutraliteShot);
Blocks.wave.ammoTypes.put(zeroPointHypercoolant,zeropointShot);
Blocks.tsunami.ammoTypes.put(liquidNeutralite,heavyNeutraliteShot);
Blocks.tsunami.ammoTypes.put(zeroPointHypercoolant,heavyZeropointShot);