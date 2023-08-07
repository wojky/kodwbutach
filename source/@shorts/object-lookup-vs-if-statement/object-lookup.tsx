import { DASHBOARDS } from "./dashboards.dict";
import { UserPaymentPlan } from "./user-payment-plan";

declare const React: any;

export namespace JSX {
  export type Element = Component;
}

export type Component = () => JSX.Element;

export declare const FreePlanDashboard: Component;
export declare const PremiumPlanDashboard: Component;
export declare const UltraPlanDashboard: Component;
export declare const TurboPlanDashboard: Component;

//  if else - ❌, object lookup 🆗

type Props = {
  planType: UserPaymentPlan;
  fallback: Component;
};

function Dashboard({ planType, fallback }: Props) {
  const Cmp = DASHBOARDS[planType] || fallback;
  return <Cmp />;

  // if (planType === 'free') {
  //   return <FreePlanDashboard />;
  // } else if (planType === 'premium') {
  //   return <PremiumPlanDashboard />
  // } else if (planType === 'ultra') {
  //   return <UltraPlanDashboard />
  // } else {
  //   return <fallback />
  // }
}

export default Dashboard;
