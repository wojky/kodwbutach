import {
  FreePlanDashboard,
  PremiumPlanDashboard,
  UltraPlanDashboard,
  Component,
  TurboPlanDashboard,
} from "./object-lookup";
import { UserPaymentPlan } from "./user-payment-plan";

// object jako słownik 📚

type DashboardsDict = Record<UserPaymentPlan, Component>;

const DASHBOARDS: DashboardsDict = {
  free: FreePlanDashboard,
  premium: PremiumPlanDashboard,
  ultra: UltraPlanDashboard,
  turbo: TurboPlanDashboard,
};

export { DASHBOARDS };
