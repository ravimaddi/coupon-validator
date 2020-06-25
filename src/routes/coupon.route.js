import express from 'express';
import CouponController from '../controllers/coupon.controller';
import validate from '../helpers/validator';
import verifyToken from '../middlewares/auth/auth.middleware';

const router = express.Router();

router.post('/coupons/generate',
  verifyToken.verify,
  validate.validateBody(validate.schemas.generateCouponSchema),
  CouponController.createCoupon);

router.post('/coupons/validate',
  verifyToken.verify,
  validate.validateBody(validate.schemas.validateCouponSchema),
  CouponController.validateCoupon);

export default router;