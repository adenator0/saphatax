const liquidNeutralite = Vars.content.getByName(ContentType.liquid, "saphatax-neutral-liquid");
const zeroPointHypercoolant = Vars.content.getByName(ContentType.liquid, "saphatax-zero-point-hypercoolant");

const waveNeutraliteShot = extend(LiquidBulletType, {});
waveNeutraliteShot.liquid = liquidNeutralite;
waveNeutraliteShot.drag = 0.01f;
waveNeutraliteShot.damage = 7;

const waveZeropointShot = extend(LiquidBulletType, {});
waveZeropointShot.liquid = zeroPointHypercoolant;
waveZeropointShot.drag = 0.01f;

const tsunamiNeutraliteShot = extend(LiquidBulletType, {});
tsunamiNeutraliteShot.liquid = liquidNeutralite;
tsunamiNeutraliteShot.lifetime = 49f;
tsunamiNeutraliteShot.knockback = 1.3f;
tsunamiNeutraliteShot.puddleSize = 8f;
tsunamiNeutraliteShot.orbSize = 4f;
tsunamiNeutraliteShot.ammoMultiplier = 0.4f;
tsunamiNeutraliteShot.statusDuration = 60f * 4f;
tsunamiNeutraliteShot.drag = 0.001f;
tsunamiNeutraliteShot.damage = 7.75f;

const tsunamiZeropointShot = extend(LiquidBulletType, {});
tsunamiZeropointShot.liquid = zeroPointHypercoolant;
tsunamiZeropointShot.lifetime = 49f;
tsunamiZeropointShot.knockback = 1.3f;
tsunamiZeropointShot.puddleSize = 8f;
tsunamiZeropointShot.orbSize = 4f;
tsunamiZeropointShot.ammoMultiplier = 0.4f;
tsunamiZeropointShot.statusDuration = 60f * 4f;
tsunamiZeropointShot.drag = 0.001f;
tsunamiZeropointShot.damage = 0.2f;

Blocks.wave.ammoTypes.put(liquidNeutralite,waveNeutraliteShot);
Blocks.wave.ammoTypes.put(zeroPointHypercoolant,waveZeropointShot);
Blocks.tsunami.ammoTypes.put(liquidNeutralite,tsunamiNeutraliteShot);
Blocks.tsunami.ammoTypes.put(zeroPointHypercoolant,tsunamiZeropointShot);