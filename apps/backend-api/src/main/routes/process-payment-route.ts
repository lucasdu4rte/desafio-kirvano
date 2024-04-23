import { Router } from 'express';

import { EspressRouterAdapter } from '../../interfaces/adapters/express-router-adapter';
import { MakeProcessPaymentRoute } from '../../interfaces/http/process-payment-route';

const makeProcessPaymentRoute = new MakeProcessPaymentRoute()

export function processPaymentRouteInjector(router: Router) {
  router.post(
    '/process-payment',
    EspressRouterAdapter.adapt(makeProcessPaymentRoute)
  );
}
