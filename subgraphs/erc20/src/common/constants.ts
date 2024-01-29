import { BigInt, BigDecimal } from "@graphprotocol/graph-ts";
import { IPFS_HASH } from "../../configurations/configure";

// Constants
export const REGISTRY_HASH = IPFS_HASH;

export const DEFAULT_DECIMALS = 18;
export const GENESIS_ADDRESS = "0x0000000000000000000000000000000000000000";
export const DEAD_ADDRESS = "0x000000000000000000000000000000000000dead";
export const OFTV2_ADDRESS = "0xa0aa943666b4309c1989e3a7ebe7dbe11de36212";

export const SECONDS_PER_DAY = 60 * 60 * 24;
export const SECONDS_PER_HOUR = 60 * 60;

export const BIGINT_ZERO = BigInt.fromI32(0);
export const BIGINT_ONE = BigInt.fromI32(1);
export const BIGINT_TWO = BigInt.fromI32(2);
export const BIGDECIMAL_ZERO = new BigDecimal(BIGINT_ZERO);
export const BIGDECIMAL_ONE = new BigDecimal(BIGINT_ONE);
