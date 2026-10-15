import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": HTMLAttributes<HTMLElement> & {
        "pricing-table-id": string;
        "publishable-key": string;
      };
    }
  }
}
