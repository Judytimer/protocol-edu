import { CourseCard } from "./CourseCard";

// Import course images
import solidityDesignPatterns from "@/assets/courses/solidity-design-patterns.jpg";
import accountAbstraction from "@/assets/courses/account-abstraction.jpg";
import defiAmmMath from "@/assets/courses/defi-amm-mathematics.jpg";
import layer2Rollup from "@/assets/courses/layer2-rollup.jpg";
import crossChainBridge from "@/assets/courses/cross-chain-bridge.jpg";
import zkSnarks from "@/assets/courses/zk-snarks.png";
import mevFlashbots from "@/assets/courses/mev-flashbots.jpg";

const courses = [
  {
    id: "0x7F3a",
    title: "Solidity Design Patterns",
    price: "250",
    creator: "0x7F3a...8B2c",
    students: 2290,
    image: solidityDesignPatterns,
    difficulty: "intermediate" as const,
    gasInfo: "PUSH1: 3 gas, SSTORE: 20000 gas, JUMP: 8 gas",
  },
  {
    id: "0x9E2b",
    title: "Account Abstraction (ERC-4337)",
    price: "500",
    creator: "0x9E2b...4D1f",
    students: 2290,
    image: accountAbstraction,
    difficulty: "advanced" as const,
    gasInfo: "PUSH1: 3 gas, SSTORE: 20000 gas, JUMP: 8 gas",
  },
  {
    id: "0x3C8d",
    title: "DeFi AMM Mathematics",
    price: "350",
    creator: "0x3C8d...9A5e",
    students: 2290,
    image: defiAmmMath,
    difficulty: "advanced" as const,
    gasInfo: "PUSH1: 3 gas, SSTORE: 20000 gas, JUMP: 8 gas",
  },
  {
    id: "0x1A4f",
    title: "Layer 2 Rollup Architecture",
    price: "400",
    creator: "0x1A4f...2B7c",
    students: 2290,
    image: layer2Rollup,
    difficulty: "intermediate" as const,
    gasInfo: "PUSH1: 3 gas, SSTORE: 20000 gas, JUMP: 8 gas",
  },
  {
    id: "0x5D2e",
    title: "Cross-Chain Bridge Security",
    price: "450",
    creator: "0x5D2e...7F9a",
    students: 2290,
    image: crossChainBridge,
    difficulty: "advanced" as const,
    gasInfo: "PUSH1: 3 gas, SSTORE: 20000 gas, JUMP: 8 gas",
  },
  {
    id: "0x8B1c",
    title: "ZK-SNARKs & Privacy Protocols",
    price: "600",
    creator: "0x8B1c...3E4d",
    students: 2290,
    image: zkSnarks,
    difficulty: "advanced" as const,
    gasInfo: "PUSH1: 3 gas, SSTORE: 20000 gas, JUMP: 8 gas",
  },
  {
    id: "0x2F6a",
    title: "MEV Searcher & Flashbots",
    price: "550",
    creator: "0x2F6a...9C1b",
    students: 2290,
    image: mevFlashbots,
    difficulty: "advanced" as const,
    gasInfo: "PUSH1: 3 gas, SSTORE: 20000 gas, JUMP: 8 gas",
  },
];

export function CourseCatalog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}
